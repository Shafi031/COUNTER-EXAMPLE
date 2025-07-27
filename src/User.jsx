export default function User({user}){
    console.log(user)
    const {name,address,id}=user

    const card={
        border:'5px solid red',
        borderRadius:'10px',
        margin:'5px'
    }
    return(
        <div style={card}>
            <h4>Name: {name}</h4>
            <h4>Address: {address.street}</h4>
            <h4>ID: {id}</h4>
        </div>
    )

}