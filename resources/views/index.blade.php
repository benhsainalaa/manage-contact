@extends('layouts.app')

@section('content')
        <div id="app">
        </div>
         <script>
           window.Laravel = <?php echo json_encode([
               'csrfToken' => csrf_token(),
                    ]); ?>
          </script>
        <script src="{{asset('js/app.js')}}"></script>
@endsection

