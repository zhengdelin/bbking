<!DOCTYPE html>

<html lang="en" class="h-full">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>首頁</title>
    {{-- <title>Xiang's music store</title> --}}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.css">
    <link rel="stylesheet" href="{{ asset('/css/app.css') }}">
    <link rel="stylesheet" href="{{ asset('/css/tailwind.css') }}">
    <script src="{{url("assets/tinymce/tinymce.min.js")}}"></script>
    {{-- <script src="https://cdn.tiny.cloud/1/5t2tjtgqke985s15zhhrl58l64chd7xl72ermvbvdxeubdq2/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script> --}}
</head>

<body class="h-full">
    <div id="instrument_platform">
        <alert-box-vue></alert-box-vue>
        <router-view name="nav"></router-view>
        <router-view></router-view>
    </div>
    <script src="{{ asset('/js/app.js') }}"></script>
</body>

</html>
