import React from 'react';


export default function TabTwo() {

        return (
            <div id="tab2" className="tabcontent text-left">
				<h3>Сервера</h3>
			<p className="MsoNormal">
				<span id="grname1">ClockWise#1 MAX 2 Procedural</span></p>
                        <div className="server-group">
				<div className="form-group">
					<label><span>Адрес сервера</span></label>
					<div  className="input-group">
						<div className="input-group-btn">
						<button className="btn btn-secondary" number="1" id="connbtn">
							<i className="fas fa-play"></i>
						</button>
						</div>
						<input id="ipval1" className="form-control" readOnly value="37.230.137.70:56210"/>
						<div className="input-group-btn">
							<button className="btn btn-secondary" number="1" id="copbtn">
								<i className="fa fa-copy"></i></button></div>
                               </div>
				</div>
				<div className="server-status__progress">
				<div id="label1"  className="mb-2">Игроки (100/300) Подключаются: 1</div>
					<div id="online"  className="progress bs-tether-target bs-tether-abutted bs-tether-abutted-top bs-tether-element-attached-bottom bs-tether-element-attached-center bs-tether-target-attached-top bs-tether-target-attached-center">
						<div id="bar1-1"  className="progress-bar progress-bar-animated bg-success progress-bar-striped" role="progressbar" ></div>
						<div id="bar1-2"  className="progress-bar progress-bar-animated progress-bar-striped" role="progressbar"></div>
						<div id="bar1-3"  className="progress-bar progress-bar-animated bg-warning progress-bar-striped" role="progressbar"></div>
				</div>
                </div>
				</div>
                        
                  <div className="x-spoiler"> 
                    <input className="spoil-button" type="checkbox" tabIndex="-1" />     
                       <div className="spoil-box">
                             <span className="spoil-close fa">
                                   </span><span className="spoil-open fa"></span>

                  <span className="spoil-head">Преимущества сервера</span>
		
			<blockquote className="spoil-Extend">
			<ul><li>Рейты x2
			</li><li>Стаки
			</li><li>Рейты печек х3
			</li><li>Разрешено играть только соло
			</li><li>Мощные анти-читы [AntiCheat]
			</li><li>Отзывчивая Администрация
			</li><li>Бесплатные оповещения о рейдах (/vk)
			</li><li>Частые Ивенты [EVENTS]
			</li><li>Ремув своих строений (8 часов с момента строения) [/remove]
			</li><li>Блокировка оружия и взрывчатки после вайпа [/block]
			</li><li>Цензура в чате [Censor]
			</li><li>Внутриигровая карта (bind m map.open)
			</li><li>Онлайн карта [RustIO:/map]
			</li><li>Система телепортации [HOME]
			</li><li>Наборы для игроков [Kits:Starter,Бомж,Med,Food,Hunt]
			</li><li>Мгновенный крафт [InstaCraft]
			</li><li>Блок телепорта в зоне рейда [NoEscape]
			</li><li>Авто-апгрейд при постройке в зоне авторизации [Up]
			</li><li>Картинки на таблички [/sil]
			</li><li>Донат-наборы [STORE:Premium, WARS, ELITE, KING, GRAND]
			</li><li>Вертолет каждые 4 часа
			</li><li>Танк каждые 4 часа
			</li><li>Корабль каждые 4 часа
			</li><li>Чинук каждые 4 часа
			</li><li>Автоматические ивенты
			</li><li>Переработчик Редких Металлов (ПРМ)
			</li><li>Способности на сервере прокачиваемые за опыт
			</li><li>Супер игра в которой могут принять участие все желающие
			</li><li>Внутриигровой магазин с покупкой вещей за опыт
			</li><li>Майнинговая ферма грандов (внутриигровой валюты)
			</li><li>Кейсы с внутриигровым складом			
                  </li><li>День длится 55 минут, Ночь 3 минуты
			</li><li>Запрещено строить дома в текстурах и монументах
			</li>
			</ul></blockquote>
				</div>
                        </div>
                        </div>
		
        )
        
      }
      
