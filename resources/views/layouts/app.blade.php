<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="no-js css-menubar">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta name="description" content="bootstrap admin template">
    <meta name="author" content="Alaa">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Contact') }}</title>

    <!-- Scripts -->
    

    <!-- Fonts -->
  
    <link rel="stylesheet" href="{{ asset('font-awesome/css/font-awesome.min.css') }}">
    
    <link rel="apple-touch-icon" href="{{ asset('images/apple-touch-icon.png') }}">
    <link rel="shortcut icon" href="{{ asset('images/favicon.ico') }}">
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="{{ asset('css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/bootstrap-extend.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/site.min.css') }}">
    
    <!-- Plugins -->
    <link rel="stylesheet" href="{{ asset('css/animsition.css') }}">
    <link rel="stylesheet" href="{{ asset('css/asScrollable.css') }}">
    <link rel="stylesheet" href="{{ asset('css/switchery.css') }}">
    <link rel="stylesheet" href="{{ asset('css/introjs.css') }}">
    <link rel="stylesheet" href="{{ asset('css/slidePanel.css') }}">
    <link rel="stylesheet" href="{{ asset('css/flag-icon.css') }}">
        
        
    <link rel="stylesheet" href="{{ asset('css/v1.css') }}">
    
    
    <!-- Fonts -->
    <link rel="stylesheet" href="{{ asset('fonts/weather-icons/weather-icons.css') }}">
    <link rel="stylesheet" href="{{ asset('fonts/web-icons/web-icons.min.css') }}">
    <link rel="stylesheet" href="{{ asset('fonts/brand-icons/brand-icons.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/formValidation.css') }}">
    <link rel="stylesheet" href="{{ asset('css/validation.css') }}">
    <link rel="stylesheet" href="{{ asset('css/masks.css') }}">
    <link rel="stylesheet" href="{{ asset('css/bootstrap-datepicker.css') }}">
    <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Roboto:300,400,500,300italic'>

    
    <!--[if lt IE 9]>
    <script src="{{ asset('js/html5shiv/html5shiv.min.js') }}"></script>
    <![endif]-->
    
    <!--[if lt IE 10]>
    <script src=""{{ asset('js/media-match/media.match.min.js') }}"></script>
    <script src=""{{ asset('js/respond/respond.min.js') }}"></script>
    <![endif]-->
    
    <!-- Scripts -->
    <script src="{{ asset('js/breakpoints/breakpoints.js') }}"></script>
    <script>
      Breakpoints();
    </script>
   
</head>

    
        
      @include('layouts.header')
      @include('layouts.left-bar')
      <div class="page">
      <div class="page-content container-fluid">
      @yield('content')
        
       
      </div>
      </div>
      @include('layouts.footer') 
      
    <script src="{{ asset('js/babel-external-helpers/babel-external-helpers.js') }}"></script>    
    <script src="{{ asset('js/jquery/jquery.js') }}"></script>
    <script src="{{ asset('js/popper-js/umd/popper.min.js') }}"></script>
    <script src="{{ asset('js/bootstrap/bootstrap.js') }}"></script>
    <script src="{{ asset('js/animsition/animsition.js') }}"></script>
    <script src="{{ asset('js/mousewheel/jquery.mousewheel.js') }}"></script>
    <script src="{{ asset('js/asscrollbar/jquery-asScrollbar.js') }}"></script>
    <script src="{{ asset('js/asscrollable/jquery-asScrollable.js') }}"></script>
    <script src="{{ asset('js/ashoverscroll/jquery-asHoverScroll.js') }}"></script>
    
    <!-- Plugins -->
    <script src="{{ asset('js/switchery/switchery.js') }}"></script>
    <script src="{{ asset('js/intro-js/intro.js') }}"></script>
    <script src="{{ asset('js/screenfull/screenfull.js') }}"></script>
    <script src="{{ asset('js/slidepanel/jquery-slidePanel.js') }}"></script>
    <script src="{{ asset('js/skycons/skycons.js') }}"></script>
    <script src="{{ asset('js/aspieprogress/jquery-asPieProgress.min.js') }}"></script>
    <script src="{{ asset('js/matchheight/jquery.matchHeight-min.js') }}"></script>
    <script src="{{ asset('js/datatables.net/jquery.dataTables.js') }}"></script>
    <script src="{{ asset('js/datatables.net-bs4/dataTables.bootstrap4.js') }}"></script>
    <script src="{{ asset('js/datatables.net-fixedheader/dataTables.fixedHeader.js') }}"></script>
    <script src="{{ asset('js/datatables.net-fixedcolumns/dataTables.fixedColumns.js') }}"></script>
    <script src="{{ asset('js/datatables.net-rowgroup/dataTables.rowGroup.js') }}"></script>
    <script src="{{ asset('js/datatables.net-scroller/dataTables.scroller.js') }}"></script>
    <script src="{{ asset('js/datatables.net-responsive/dataTables.responsive.js') }}"></script>
    <script src="{{ asset('js/datatables.net-responsive-bs4/responsive.bootstrap4.js') }}"></script>
    <script src="{{ asset('js/datatables.net-buttons/dataTables.buttons.js') }}"></script>
    <script src="{{ asset('js/datatables.net-buttons/buttons.html5.js') }}"></script>
    <script src="{{ asset('js/datatables.net-buttons/buttons.flash.js') }}"></script>
    <script src="{{ asset('js/datatables.net-buttons/buttons.print.js') }}"></script>
    <script src="{{ asset('js/datatables.net-buttons/buttons.colVis.js') }}"></script>
    <script src="{{ asset('js/datatables.net-buttons-bs4/buttons.bootstrap4.js') }}"></script>
    <script src="{{ asset('js/asrange/jquery-asRange.min.js') }}"></script>
    <script src="{{ asset('js/bootbox/bootbox.js') }}"></script>
    <script src="{{ asset('js/formValidation.min.js') }}"></script>
    <script src="{{ asset('js/bootstrap4.min.js') }}"></script>
    <script src="{{ asset('js/jquery.formatter.js') }}"></script>
    <script src="{{ asset('js/bootstrap-datepicker.js') }}"></script>
    <script src="{{ asset('js/layout-grid.js') }}"></script>
    
    <!-- Scripts -->
    <script src="{{ asset('js/Component.js') }}"></script>
    <script src="{{ asset('js/Plugin.js') }}"></script>
    <script src="{{ asset('js/Base.js') }}"></script>
    <script src="{{ asset('js/Config.js') }}"></script>
    
    <script src="{{ asset('js/Section/Menubar.js') }}"></script>
    <script src="{{ asset('js/Section/GridMenu.js') }}"></script>
    <script src="{{ asset('js/Section/Sidebar.js') }}"></script>
    <script src="{{ asset('js/Section/PageAside.js') }}"></script>
    <script src="{{ asset('js/Plugin/menu.js') }}"></script>
    
    <script src="{{ asset('js/config/colors.js') }}"></script>
    <script src="{{ asset('js/config/tour.js') }}"></script>
    <script>Config.set('assets', 'assets');</script>
    
    <!-- Page -->
    <script src="{{ asset('js/Site.js') }}"></script>
    <script src="{{ asset('js/Plugin/asscrollable.js') }}"></script>
    <script src="{{ asset('js/Plugin/slidepanel.js') }}"></script>
    <script src="{{ asset('js/Plugin/switchery.js') }}"></script>
    <script src="{{ asset('js/Plugin/matchheight.js') }}"></script>
    <script src="{{ asset('js/v1.js') }}"></script>
    <script src="{{ asset('js/Plugin/datatables.js') }}"></script>
    <script src="{{ asset('js/tables/datatable.js') }}"></script>
    <script src="{{ asset('js/Plugin/formatter.js') }}"></script>
    <script src="{{ asset('js/forms/validation.js') }}"></script>
    <script src="{{ asset('js/Plugin/bootstrap-datepicker.js') }}"></script>
    <script src="{{ asset('js/bootstrap-datepicker.fr.min.js') }}"></script>
    
      
    
</body>
</html>
