import React from "react"
import { useGetValues } from "../../hooks/useGetValues"

const SignUp = () => {
  const { formData, handleChange } = useGetValues({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    month: "",
    day: "",
    year: "",
    gender: "male",
  })

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]
  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section className="bg-[#eff2f5]">
      <div className="w-[100%] grid place-items-center">
        <h2 className="text-blue-600 font-semibold text-[60px]">facebook</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white w-[450px] text-center rounded-2xl"
        >
          <h3 className="font-semibold text-[25px] my-[15px]">
            Create a new account
          </h3>
          <p className="mb-[20px] text-[gray]">It’s quick and easy.</p>
          <hr />

          {/* First & Last Name */}
          <div className="flex justify-center gap-4 mt-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="outline-gray-300 outline-[1px] rounded-[5px] p-[8px]"
              placeholder="First name"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="outline-gray-300 outline-[1px] rounded-[5px] p-[8px]"
              placeholder="Last name"
            />
          </div>

          
          <div className="p-5 max-w-md">
            <div className="mb-5">
              <label className="block text-sm text-gray-500 mb-2 text-left">
                Birthday
              </label>
              <div className="grid grid-cols-3 gap-3">
                <select
                  name="month"
                  value={formData.month}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Month</option>
                  {months.map((m, index) => (
                    <option key={index} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <select
                  name="day"
                  value={formData.day}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Day</option>
                  {days.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Year</option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm text-gray-500 mb-2 text-left">
                Gender
              </label>
              <div className="grid grid-cols-3 gap-3">
                <label className="flex items-center border-1 border-gray-300 p-2 rounded-[5px]">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                    className="mr-2 "
                  />
                  Female
                </label>
                <label className="flex items-center border-1 border-gray-300 p-2 rounded-[5px]">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Male
                </label>
                <label className="flex items-center border-1 border-gray-300 p-2 rounded-[5px]">
                  <input
                    type="radio"
                    name="gender"
                    value="custom"
                    checked={formData.gender === "custom"}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Custom
                </label>
              </div>

              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-[100%] outline-gray-300 outline-1 p-3 rounded-[2px] my-[25px]"
                placeholder="Mobile number or Email"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-[100%] outline-gray-300 outline-1 p-3 rounded-[2px] mb-[25px]"
                placeholder="Password"
              />

              <p className="text-[12px] text-left">
                People who use our service may have uploaded your contact
                information to Facebook. Learn more. <br />
                <br />
                By clicking Sign Up, you agree to our Terms, Privacy Policy and
                Cookies Policy. You may receive SMS Notifications from us and
                can opt out any time.
              </p>

              <button
                type="submit"
                className="mt-4 bg-green-600 text-white text-[25px] w-[200px] h-[40px] rounded-[8px]"
              >
                Sign Up
              </button>

              <a href="#" className="text-blue-600 block my-5">
                Already have an account?
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default SignUp
