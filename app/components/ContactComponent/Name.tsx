export default function Name(props:any){
    return (
        <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
              value={props.text}
              required
              onChange={props.onChange}
              name="name"
            />
          </div>
      );
}