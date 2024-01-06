export default function Email(props:any){
    return (
        <div className="max-w-xs">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            required
            onChange={props.onChange}
            id="email"
            className="bg-transparent border border-gray-300 p-2 rounded-md"
            name="email"
          />
        </div>
      );
}