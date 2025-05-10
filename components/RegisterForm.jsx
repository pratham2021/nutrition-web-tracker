import Link from "next/link";

// shadow-lg: Applies a large box-shadow, giving the element a pronounced elevated effect.

// p-5: Applies padding of 1.25rem (20px) on all sides.

// rounded-lg: Applies large border-radius for rounded corners.

// border-t-4: Applies a 4px top border.

// border-green-400: Sets the border color to a medium green from Tailwind's green palette.

export default function RegisterForm() {
  return <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4
      border-green-400">
          <h1 align="center" className="text-xl font-bold my-4">Register</h1>

          <form className="flex flex-col gap-3">
              <input type="text" placeholder="Full Name"/>
              <input type="text" placeholder="Email"/>
              <input type="password" placeholder="Password"/>
              <button className="bg-green-600 text-white
              font-bold cursor-pointer px-6 py-2">Register</button>

              <Link className="text-sm mt-3 text-center" href={'/'}>
                Already have an account? <span
                className="underline">Login</span>
              </Link>
          </form>
      </div>
  </div>
}