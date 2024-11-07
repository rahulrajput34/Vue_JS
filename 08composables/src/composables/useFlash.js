import swal from "sweetalert"
// For the composables we start the name with use key word its a naming convention
export function useFlash(){
    function flash(message){
        return swal("Hello I am inside the Home")
    }
    
    // return whatever want to share to outside from this function
    return {flash}
}