import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {

      const { googleLogin, githubLogin } = UseAuth();
      const location = useLocation();
      const navigate = useNavigate();

      const socialLogin = (media) => {
            media()
                  .then(() => {
                        toast.success('Successfully Logged in!!')
                        navigate(location?.state ? location?.state : '/login');
                        

                  })
                  .catch(error => {
                        toast.error(error.message)
                  })
      }

      return (
            <div>
                  <div className="my-6 gap-0 flex items-center">
                        <button onClick={() => socialLogin(googleLogin)} aria-label="Login with Google" type="button" className=" flex items-center justify-center w-full py-2 space-x-4 border bg-[#00095E] focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                              <FaGoogle className="text-3xl text-white" />

                        </button>

                        <button onClick={() => socialLogin(githubLogin)} aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full py-2 space-x-4 border focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600 bg-[#00095E]">
                              <FaGithub className="text-3xl text-white" />

                        </button>

                  </div>
            </div>
      );
};

export default SocialLogin;