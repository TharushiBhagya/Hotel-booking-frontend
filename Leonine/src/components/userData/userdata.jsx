function UserTag (props){
    return(
        <div className=" flex items-center cursor-pointer space-x-2">
            <img className=" w-[75px] h-[75px]" src={props.imagelink}  alt="Leonine Villa Logo" />
            <span className="text-white ml-[5px] text-xl font-bold">{props.name}</span>
        </div>
    );
}
export default UserTag;