import { useEffect, useState } from "react";

const UseTheme = () => {

      const [theme, setTheme] = useState('light');

      const handleToggleTheme = (e) => {
            const html = document.querySelector('html');

            if (e.target.checked) {
                  html.classList.remove('light')
                  html.classList.add('dark')
                  setTheme('dark')

                  localStorage.setItem('theme', 'dark');
            }
            else {
                  html.classList.remove('dark')
                  html.classList.add('light')
                  setTheme('light')

                  localStorage.setItem('theme', 'light');
            }

      }

      useEffect(() => {
            const localTheme = localStorage.getItem('theme');
            setTheme(localTheme)

            document.querySelector('html').classList.add(localTheme)
      }, [])


      return { theme, handleToggleTheme }
};

export default UseTheme;