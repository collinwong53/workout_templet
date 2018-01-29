function Workout_api() {
    var exercise_list = null;
    this.get_workouts = (muscle_group_array) => {
        var promise = {
            then: function (resolve, reject) {
                this.resolve = resolve;
                this.reject = reject;
            }
        }
        $.ajax({
            dataType: 'json',
            url:"http://localhost:9000/exercises/",
            method: 'get',
            success: function (data) {
                promise.resolve(data);
            },
            error: function (data) {
                promise.reject(data);
            }
        })
        return promise;
    }
    this.data_recieved = function(data){
        exercise_list = data;
        console.log(data);
    }
    this.data_failed = function(data){
        console.log('api failed');
    }
    this.get_workouts_promise = () =>{
        this.get_workouts().then(this.data_recieved,this.data_failed);
    }
}