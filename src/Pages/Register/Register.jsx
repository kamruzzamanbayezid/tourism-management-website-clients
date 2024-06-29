import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import CommonButton from "../../Components/CommonButton/CommonButton";
import UseAuth from "../../Hooks/UseAuth";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";
// import SocialLogin from ../../Components/SocialLogin/SocialLogin";

const Register = () => {

      const [showPassword, setShowPassword] = useState(false);
      const { createUser, userUpdate } = UseAuth();
      const navigate = useNavigate();

      // using react hook form
      const { register, handleSubmit, formState: { errors } } = useForm()
      const onSubmit = (data) => {
            const { name, email, url, password } = data;

            // validation
            if (password.length < 6) {
                  return toast.error('Password must have at least 6 character or more!!')
            }
            if (!/[A-Z]/.test(password)) {
                  return toast.error('Password should have at least one uppercase letter!!')
            }
            if (!/[a-z]/.test(password)) {
                  return toast.error('Password should have at least one lowercase letter!!')
            }

            // crate user
            createUser(email, password)
                  .then(() => {

                        // update profile
                        userUpdate(name, url)
                              .then(() => {
                                    toast.success('User Create successfully!!');
                                    navigate('/')
                                    console.log('user agaya');
                              })
                              .catch(error => {
                                    toast.error(error.message)
                              })
                  })
                  .catch(error => {
                        toast.error(error.message)
                  })

      }

      return (
            <div className="p-4 lg:p-0">
                  <Helmet>
                        <title>Register | ExploreAsia</title>
                  </Helmet>
                  <div className="w-full mx-auto max-w-xl rounded-md sm:p-8  dark:text-gray-800">
                        <div className="border border-[#ABABAB] bg-[#ffffff33] rounded-md p-8">
                              <h2 className="mb-3 text-3xl font-bold font-josefin">Create an Account!!</h2>
                              <p className="text-base font-medium  dark:text-gray-600 mb-5">Already have an account?
                                    <Link to='/login' rel="noopener noreferrer" className="focus:underline hover:underline text-yellow"> Log in</Link>
                              </p>

                              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 ">
                                    <div className="space-y-4">
                                          <div className="space-y-2">
                                                <input type="text" name="name" id="name" placeholder="Your name" className="w-full px-3 py-2 border-b border-[#C5C5C5] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 placeholder:text-[#000000] placeholder:text-base placeholder:font-medium outline-none"
                                                      {...register("name", { required: true })}
                                                />
                                                {errors.name && <span className="text-red-600">This field is required</span>}
                                          </div>
                                          <div className="space-y-2">

                                                <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-3 py-2 border-b border-[#C5C5C5] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 placeholder:text-[#000000] placeholder:text-base placeholder:font-medium outline-none"
                                                      {...register("email", { required: true })}
                                                />
                                                {errors.email && <span className="text-red-600">This field is required</span>}
                                          </div>
                                          <div className="space-y-2">

                                                <input type="url" name="photoUrl" id="photoUrl" placeholder="Photo Url" className="w-full px-3 py-2 border-b border-[#C5C5C5] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 placeholder:text-[#000000] placeholder:text-base placeholder:font-medium outline-none"
                                                      {...register("url", { required: true })}
                                                />
                                                {errors.url && <span className="text-red-600">This field is required</span>}
                                          </div>
                                          <div className="space-y-2 relative">
                                                <input type={`${showPassword ? 'text' : 'password'}`} name="password" id="password" placeholder="Password" className="w-full px-3 py-2 border-b border-[#C5C5C5] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 placeholder:text-[#000000] placeholder:text-base placeholder:font-medium outline-none"
                                                      {...register("password", { required: true })}
                                                />
                                                {/* show password functionality */}
                                                <span onClick={() => setShowPassword(!showPassword)} className="absolute top-1 right-1 cursor-pointer">{showPassword ? <BsEyeFill className="common-color text-xl" />
                                                      :
                                                      <BsEyeSlashFill className="common-color text-xl" />}
                                                </span>
                                                {errors.password && <span className="text-red-600">This field is required</span>}
                                          </div>
                                    </div>
                                    <CommonButton text='Register' width="100%" />
                              </form>
                        </div>

                        <div className="px-4 lg:px-0">
                              <div className="flex items-center w-full my-4">
                                    <hr className="w-full dark:text-gray-600" />
                                    <p className="px-3 dark:text-gray-600 text-[#000000] font-medium">OR</p>
                                    <hr className="w-full dark:text-gray-600" />
                              </div>

                              <SocialLogin />
                        </div>

                  </div>
            </div>
      );
};

export default Register;