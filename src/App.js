import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import TabOne from './Tabs/TabOne'
import TabTwo from './Tabs/TabTwo'
import TabThree from './Tabs/TabThree'
import TabFour from './Tabs/TabFour'
import TabFive from './Tabs/TabFive'
import TabSix from './Tabs/TabSix'

function App() {
	return (
	<section id='wrapper'>
		<div className="content">
			
			<div className="tabs">
			<button className="tablinks active" data-country="tab1" id="testttt"><p data-title="О нас">О нас</p></button>
			<button className="tablinks" data-country="tab2"><p data-title="Сервера">Сервера</p></button>
			<button className="tablinks" data-country="tab3"><p data-title="Правила">Правила</p></button>
			<button className="tablinks tablink-wide" data-country="tab4"><p data-title="Плагины">Уникальные плагины</p></button>
			<button className="tablinks" data-country="tab5"><p data-title="Киты">Киты</p></button>
			<button className="tablinks tablink-wide" data-country="tab6"><p data-title="Блокировка">Блокировка после вайпа</p></button>
			</div>

			<div className="wrapper_tabcontent">
<TabOne />
<TabTwo />
<TabThree />
<TabFour />
<TabFive />
<TabSix />
            </div>
        </div>
    </section>
)}

export default App;

