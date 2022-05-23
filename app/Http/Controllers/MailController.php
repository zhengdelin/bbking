<?php

namespace App\Http\Controllers;

use App\Mail\MailForgetPassword;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class MailController extends GlobalController
{
    public $mail_type = [
        1 => "forget_password"
    ];
    /** 
     * 寄件
     * @param type 1:忘記密碼
     * @return [(200 | 400), msg]
     */
    public function sendMail($type, $email, $user, $user_id)
    {
        $mail_type = $this->mail_type[$type];
        $mail_log = DB::table("mail_log")
            ->where([["type", $mail_type], ["email", $email], ["member_id", $user_id]])
            ->orderByDesc('send_time')
            ->limit(15)
            ->get();
        $user = empty($user) ? "顧客" : $user;
        $now = parent::get_datetime();
        if (count($mail_log) > 10) {
            //超過寄件上限
            return [400, "已超過當日寄件上限"];
        } else if (count($mail_log) > 0) {
            $send_time = $mail_log[0]->send_time;
            // dd($send_time, strtotime("now"), strtotime($send_time) < 60, strtotime("now") - strtotime($send_time) < 60);
            //每60秒一封
            if (strtotime("now") - strtotime($send_time) < 60) {
                return [400, "請等待60秒後再寄送驗證信"];
            }
        }
        switch ($type) {
            case 1:
                $code = random_int(100000, 999999);
                DB::table("mail_log")->insert([
                    "type" => $mail_type,
                    "email" => $email,
                    "code" => $code,
                    "member_id" => $user_id,
                    "send_time" => $now,
                ]);
                try {
                    $params = [
                        "user" => $user,
                        "code" => $code
                    ];
                    Mail::to($email)
                        ->send(new MailForgetPassword("比比王樂器 | 找回密碼", $params));
                    return [200, "驗證信寄送成功"];
                } catch (\Throwable $e) {
                    return [400, $e->getMessage()];
                }
            default:
                return [400, "信件寄送錯誤"];
        }
    }
}
