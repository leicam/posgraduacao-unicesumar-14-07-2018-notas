window.app.controller('notaController', function($scope, APIService, $routeParams){
    $scope.nota = {}

    if($routeParams.id){
        APIService.get($routeParams.id, function(err, data){
            if(err) return window.alert(JSON.stringify(err))

            $scope.nota = data
        })
    }

    $scope.salvar = function(){
        if(!$scope.nota.titulo) return window.alert('Preencha o campo titulo!')
        if(!$scope.nota.titulo) return window.alert('Preencha o campo descricao!')


        APIService.save($scope.nota, function(err, data){
            if(err) return window.alert(JSON.stringify(err))
    
            window.location.href = '/'
        })
    }    

    $scope.excluir = function(){
        var confirmar = confirm('Deseja realmente excluir esta nota?')

        if(confirmar){
            APIService.delete($scope.nota, function(err, data){
                if(err) return window.alert(JSON.stringify(err))
                
                window.location.href = '/'
            })
        }
    } 
})