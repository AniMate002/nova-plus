
interface IErrorFormDisplay {
    message: any
}

const ErrorFormDisplay:React.FC<IErrorFormDisplay> = ({message}) => {
    return (
        <p className="text-slate-300 w-fit mb-4 bg-slate-600 rounded-full px-4 py-2 text-sm">{message}</p>
    );
}
 
export default ErrorFormDisplay;