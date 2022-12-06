import './utils/i18n'
import { useTranslation } from 'react-i18next'

function App() {
  const {t, i18n} = useTranslation()
  const changeLanguage = (value:string) => {
    i18n.changeLanguage(value)
    .then( () => {
      console.log("Linguagem Alterada")
    })
    .catch((err) => {
      console.log(err)
    })
  }
  return (
    <div className="h-screen flex items-center justify-around flex-col">
      <div className="flex">
        <div>
         <img
            onClick={() => changeLanguage('pt')}
            className="cursor-pointer	w-10"
            alt="Português"
            src="/br.jpeg"
          />
        </div>
        <div>
        <img
            onClick={() => changeLanguage('en')}
            className="cursor-pointer	ml-2 w-10 h-7"
            alt="Inglês"
            src="/en.png"
          />
        </div>
      </div>
      <div className="flex flex-col bg-gray-700 shadow-lg shadow-gray-800 py-4 px-6 rounded-md mb-20">
        <div className="flex flex-row items-center">
          <img
            className="w-24 rounded-full"
            alt="Profile"
            src="https://github.com/airton-canale.png"
          />
          <div className="ml-4">
            <h3 className="font-semibold text-xl">Airton Canale</h3>
            <h4 className="text-indigo-300 pt-1">{t('Front-End Developer')}</h4>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold text-2xl mb-2">{t('Bio')}</h2>
          <p className="text-gray-300 font-light mt-1 max-w-lg text-justify">
            {t('Description')}
          </p>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold text-2xl mb-2">{t('Career')}</h2>
          <div className="mt-2">
            <h3 className="text-yellow-500 font-medium text-xl mt-1">
              ConcordiaLabs
            </h3>
            <ul className="pl-2">
              <li>{t('Front-End Developer')}</li>
              <li className="list-disc list-inside pt-1 pl-4">JavaScript</li>
              <li className="list-disc list-inside pl-4">React Js</li>
              <li className="list-disc list-inside pl-4">Python</li>
              <li className="list-disc list-inside pl-4">Django</li>
            </ul>
            <div className="mt-4">
              <h3 className="text-yellow-500 font-medium text-xl mt-1">
                DipSystem
              </h3>
              <ul className="pl-2">
                <li>{t('Full-Stack Developer')}</li>
                <li className="list-disc list-inside pt-1 pl-4">JavaScript</li>
                <li className="list-disc list-inside pl-4">TypeScript</li>
                <li className="list-disc list-inside pl-4">Python</li>
                <li className="list-disc list-inside pl-4">Django</li>
                <li className="list-disc list-inside pl-4">Ionic</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
