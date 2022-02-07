{{-- @extends('layouts.index')
@section('title', '首頁')
@section('cdn_css')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.css">
@endsection
@section('content')
    <v-event-img-banner></v-event-img-banner>
    <router-view></router-view>
@endsection
@section('js')
<script src="{{ asset('/js/user.js') }}"></script>
<script src="{{ asset('/js/home.js') }}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.extensions.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/vendors/scrolloverflow.min.js"></script>
<script src="{{ asset('/js/full_page.js') }}"></script>
@endsection --}}

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>首頁</title>
    {{-- <title>Xiang's music store</title> --}}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.css">
    <link rel="stylesheet" href="{{ asset('/css/app.css') }}">
</head>

<body>
    <div id="instrument_platform">
        <v-nav></v-nav>
        <div class="" id="content">
            {{-- {{ dd(session()) }} --}}
            {{-- <v-home v-if="is_home" ref="home"></v-home> --}}
                <router-view></router-view>
            
        </div>
    </div>
    {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.extensions.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/vendors/scrolloverflow.min.js"></script> --}}
    <script src="{{ asset('/js/user.js') }}"></script>
</body>

</html>
