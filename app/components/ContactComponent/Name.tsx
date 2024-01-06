export default function Name(props:any){
    return (
        <div className="max-w-xs">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="name"
            value={props.text}
            required
            onChange={props.onChange}
            id="name"
            className="bg-transparent border border-gray-300 p-2 rounded-md"
            name="name"
          />
        </div>
      );
}