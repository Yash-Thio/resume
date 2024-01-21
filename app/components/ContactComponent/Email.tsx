export default function Email(props:any){
    return (
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
                name="email"
                onChange={props.onChange}
                required
                value={props.text}
              />
            </div>
      );
}