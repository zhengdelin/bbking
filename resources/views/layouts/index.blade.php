<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Xiang's music store - @yield('title')</title>
    @section('cdn_css')

    @show
    <link rel="stylesheet" href="{{ asset('/css/app.css') }}">
</head>

<body>
    <div id="instrument_platform">
        <v-nav></v-nav>
        <div id="content">
            {{-- @section('content')
    
            @show --}}
            
        </div>
    </div>
    {{-- <script src="{{ asset('/js/home.js') }}"></script> --}}
    {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.extensions.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/vendors/scrolloverflow.min.js"></script>
    <script src="{{ asset('/js/full_page.js') }}"></script> --}}
    @section('js')

    @show

</body>

</html>
