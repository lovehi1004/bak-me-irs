(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("sampleHighChart");
            this.set_titletext("High Chart");
            if (Form == this.constructor)
            {
                this._setFormPosition(1596,707);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsChart", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">name1</Col><Col id=\"data\">11</Col></Row><Row><Col id=\"name\">name1</Col><Col id=\"data\">12</Col></Row><Row><Col id=\"name\">name1</Col><Col id=\"data\">13</Col></Row><Row><Col id=\"name\">name1</Col><Col id=\"data\">14</Col></Row><Row><Col id=\"name\">name1</Col><Col id=\"data\">15</Col></Row><Row><Col id=\"name\">name2</Col><Col id=\"data\">21</Col></Row><Row><Col id=\"name\">name2</Col><Col id=\"data\">22</Col></Row><Row><Col id=\"name\">name2</Col><Col id=\"data\">23</Col></Row><Row><Col id=\"name\">name2</Col><Col id=\"data\">24</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsChartArea", this);
            obj._setContents("<ColumnInfo><Column id=\"name\" type=\"STRING\" size=\"256\"/><Column id=\"data\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"name\">USA</Col><Col id=\"data\"/></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\"/></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\"/></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\"/></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\"/></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">2</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">9</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">13</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">50</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">170</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">299</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">438</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">841</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">1169</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">1703</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">2422</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">3692</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">5543</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">7345</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">12298</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">18638</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">22229</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">25540</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">28133</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">29463</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">31139</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">31175</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">31255</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">29561</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">27552</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">26008</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">25830</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">26516</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">27835</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">28537</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">27519</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">25914</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">25542</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">24418</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">24138</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">24104</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">23208</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">22886</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">23305</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">23459</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">23368</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">23317</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">23575</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">23205</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">22217</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">21392</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">19008</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">13708</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">11511</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">10979</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">10904</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">11011</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">10903</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">10732</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">10685</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">10577</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">10526</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">10457</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">10027</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">8570</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">8360</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">7853</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">5709</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">5273</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">5113</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">5066</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">4897</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">4881</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">4804</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">4717</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">4571</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">4018</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">3822</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">3785</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">3805</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">3750</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">3708</Col></Row><Row><Col id=\"name\">USA</Col><Col id=\"data\">3708</Col></Row><Row><Col id=\"name\">USSR/Russia</Col></Row><Row><Col id=\"name\">USSR/Russia</Col></Row><Row><Col id=\"name\">USSR/Russia</Col></Row><Row><Col id=\"name\">USSR/Russia</Col></Row><Row><Col id=\"name\">USSR/Russia</Col></Row><Row><Col id=\"name\">USSR/Russia</Col></Row><Row><Col id=\"name\">USSR/Russia</Col></Row><Row><Col id=\"name\">USSR/Russia</Col></Row><Row><Col id=\"name\">USSR/Russia</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">1</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">5</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">25</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">50</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">120</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">150</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">200</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">426</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">660</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">863</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">1048</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">1627</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">2492</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">3346</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">4259</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">5242</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">6144</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">7091</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">8400</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">9490</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">10671</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">11736</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">13279</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">14600</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">15878</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">17286</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">19235</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">22165</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">24281</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">26169</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">28258</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">30665</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">32146</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">33486</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">35130</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">36825</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">38582</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">40159</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">38107</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">36538</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">35078</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">32980</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">29154</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">26734</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">24403</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">21339</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">18179</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">15942</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">15442</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">14368</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">13188</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">12188</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">11152</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">10114</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">9076</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">8038</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">7000</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">6643</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">6286</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">5929</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">5527</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">5215</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">4858</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">4750</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">4650</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">4600</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">4500</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">4490</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">4300</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">4350</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">4330</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">4310</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">4495</Col></Row><Row><Col id=\"name\">USSR/Russia</Col><Col id=\"data\">4477</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new WebBrowser("wbsHighChart","20","100",null,null,"20","100",null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Button("btnDrawLine","36","25","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Draw (Line)");
            this.addChild(obj.name, obj);

            obj = new Button("btnDrawArea","195","25","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Draw (Area)");
            this.addChild(obj.name, obj);

            obj = new Button("btnDrawLinePopup","356","25","150","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Draw (Line) Popup");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1596,707,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("sampleChart.xfdl", function() {
        /***********************************************************************************
        * SERVICE GROUP : Develop_Sample
        * BUSINESS      : sampleChart Form
        * FILE NAME     : sampleChart.xfdl
        * DESCRIPTION   : High CHart 샘플
        *------------------------------------------------------------------
        * MODIFY DATE   PROGRAMMER	     DESCRIPTION
        *------------------------------------------------------------------
        * 2022.09.19    TOBESOFT	     최초생성
        ***********************************************************************************/



        /***********************************************************************************
        * 1.Include Common Library
        ***********************************************************************************/


        /***********************************************************************************
        * 2.Form 변수 선언
        ***********************************************************************************/
        this.fvSendData;							// Chart 그리기 위한 데이터 object

        /***********************************************************************************
        * 3.Form Event Area
        ***********************************************************************************/
        /**
         * @description Form 의 초기화가 완료되었을 때 발생하는 이벤트입니다.
         *           	컴포넌트의 초기 위치 조정 등 코드 기술
         */
        this.form_oninit = function(obj,e)
        {
        	// TODO

        };

        /**
         * @description Form 내부의 모든 컴포넌트가 생성되고, DataSet 에 데이터 로딩까지 완료되면
         *              gfnSetFormInit 를 통해 공통 초기화 작업이 수행된다.
         *              콜백함수명을 지정하여 해당 함수에서 개발자의 초기작업 코드를 기술한다.
         */
        this.form_onload = function(obj,e)
        {
        	// Load 후 초기화설정 및 Data Setting
        	this.gfnSetFormInit(obj, "fnFormInit");			// gfnSetFormInit 의 실행이후 callback 함수
        };

        /**
         * @description form_onload 의 gfnSetFormInit 후 실행되는 callback 함수 , 개발자의 초기작업 코드 기술
         */
        this.fnFormInit = function(objForm)
        {
        	trace("[sampleChart]Form onload 후 필요(설정)시 실행되는 callback 함수 ");
        	// var sUrl = "http://127.0.0.1:4098/thirdParty/Highcharts/index.html";
        	var sUrl = this.fvApp.Tran.webUrl + "/thirdParty/Highcharts/index.html";
        	this.wbsHighChart.set_url(sUrl);
        };

        /**
         * @description setTimer() 메소드로 생성한 타이머의 시간 간격마다 발생하는 이벤트
         */
        this.form_ontimer = function(obj,e)
        {
        	trace("[form_ontimer]==========================================================");
        	obj.killTimer(e.timerid);
        	switch (e.timerid)
        	{
        		case 9001:
        			// TODO
        			break;
        		default:
        			break;
        	}
        };

        /************************************************************************************
        * 4.Callback 처리 Area (Transaction, Popup)
        ************************************************************************************/

        /**
         * @description 팝업호출 CallBack 함수(선택)
         */
        this.fnPopupCallback = function(sPopupId, objRtn)
        {
        	trace("[fnPopupCallback]sPopupId : "+sPopupId+" | objRtn : "+ objRtn);

        	// 반환받은 값 받아온다.
        	// objRtnValue["반환키값"]
        	var objRtnValue = this.gfnGetPopupRetun(this, objRtn);

        	switch (sPopupId)
        	{
        		case "HChartPop" :
        			// 후처리 코드
        			break;
        		default:
        			break;
        	}
        };


        /***********************************************************************************
        * 5.CRUD 및 Transaction 서비스 호출 처리 Area
        ***********************************************************************************/



        /***********************************************************************************
        * 6.User Function Area
        ***********************************************************************************/

        /**
         * @desc webBrowser 컴포넌트에 그리기 함수 호출 (NRE 용)
         * @param N/A
         * @return N/A
        */
        this.fnSetDataNRE = function()
        {
        	// WebBrowser에 로드된 웹페이지의 "fnCallMethod" 함수 호출
        	this.wbsHighChart.callMethod("fnCallMethod",this.fvSendData);
        };

        /**
         * @desc webBrowser 컴포넌트에 그리기 함수 호출 (WRE 용)
         * @param N/A
         * @return N/A
        */
        this.fnSetDataWRE = function()
        {
        	// postMessage 로 현재 웹페이지에 데이터 송신
        	var iframe = this.wbsHighChart._ifrm_elem.handle;
        	iframe.contentWindow.postMessage(this.fvSendData, "*");
        };

        /**
         * @desc Line Chart 용 데이터 설정
         * @param N/A
         * @return N/A
        */
        this.fnSetDataLine = function()
        {
        	this.fvSendData = {};

        	this.fvSendData.title =  {
        			text: 'U.S Solar Employment Growth',
        			align: 'left'
        		};
        	this.fvSendData.subtitle = {
        			text: 'By Job Category. Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>.',
        			align: 'left'
        		};
        	this.fvSendData.yAxis = {
        			title: {
        				text: 'Number of Employees'
        			}
        		};
        	this.fvSendData.xAxis = {
        			accessibility: {
        				rangeDescription: 'Range: 2010 to 2020'
        			}
        		};
        	this.fvSendData.legend = {
        			layout: 'vertical',
        			align: 'right',
        			verticalAlign: 'middle'
        		};
        	this.fvSendData.plotOptions = {
        			series: {
        				label: {
        					connectorAllowed: false
        				},
        				pointStart: 2010
        			}
        		};
        	this.fvSendData.series = [{
        			name: 'Installation & Developers',
        			data: [43934, 48656, 65165, 81827, 112143, 142383,
        				171533, 165174, 155157, 161454, 154610]
        		}, {
        			name: 'Manufacturing',
        			data: [24916, 37941, 29742, 29851, 32490, 30282,
        				38121, 36885, 33726, 34243, 31050]
        		}, {
        			name: 'Sales & Distribution',
        			data: [11744, 30000, 16005, 19771, 20185, 24377,
        				32147, 30912, 29243, 29213, 25663]
        		}, {
        			name: 'Operations & Maintenance',
        			data: [null, null, null, null, null, null, null,
        				null, 11164, 11218, 10077]
        		}, {
        			name: 'Other',
        			data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
        				17300, 13053, 11906, 10073]
        		}];
        	this.fvSendData.responsive = {
        			rules: [{
        				condition: {
        					maxWidth: 500
        				},
        				chartOptions: {
        					legend: {
        						layout: 'horizontal',
        						align: 'center',
        						verticalAlign: 'bottom'
        					}
        				}
        			}]
        		};
        };

        /**
         * @desc Area Chart 용 데이터 설정
         * @param N/A
         * @return N/A
        */
        this.fnSetDataArea = function()
        {
        	this.fvSendData = {};

        	this.fvSendData.chart = {
        			type: 'area'
        		};
        	this.fvSendData.accessibility = {
        			description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
        		};
        	this.fvSendData.title = {
        			text: 'US and USSR nuclear stockpiles'
        		};
        	this.fvSendData.subtitle = {
        			text: 'Source: <a href="https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/" ' +
        				'target="_blank">FAS</a>'
        		};
        	this.fvSendData.xAxis = {
        			allowDecimals: false,
        			accessibility : {
        				rangeDescription: 'Range: 1940 to 2017.'
        			}
        		};
        	this.fvSendData.yAxis = {
        			title: {
        				text: 'Nuclear weapon states'
        			}
        		};
        	this.fvSendData.tooltip = {
        			pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
        		};
        	this.fvSendData.plotOptions = {
        			area: {
        				pointStart: 1940,
        				marker: {
        					enabled: false,
        					symbol: 'circle',
        					radius: 2,
        					states: {
        						hover: {
        							enabled: true
        						}
        					}
        				}
        			}
        		};
        	/*
        	this.fvSendData.series = [{
        			name: 'USA',
        			data: [
        				null, null, null, null, null, 2, 9, 13, 50, 170, 299, 438, 841,
        				1169, 1703, 2422, 3692, 5543, 7345, 12298, 18638, 22229, 25540,
        				28133, 29463, 31139, 31175, 31255, 29561, 27552, 26008, 25830,
        				26516, 27835, 28537, 27519, 25914, 25542, 24418, 24138, 24104,
        				23208, 22886, 23305, 23459, 23368, 23317, 23575, 23205, 22217,
        				21392, 19008, 13708, 11511, 10979, 10904, 11011, 10903, 10732,
        				10685, 10577, 10526, 10457, 10027, 8570, 8360, 7853, 5709, 5273,
        				5113, 5066, 4897, 4881, 4804, 4717, 4571, 4018, 3822, 3785, 3805,
        				3750, 3708, 3708
        			]
        		}, {
        			name: 'USSR/Russia',
        			data: [null, null, null, null, null, null, null, null, null,
        				1, 5, 25, 50, 120, 150, 200, 426, 660, 863, 1048, 1627, 2492,
        				3346, 4259, 5242, 6144, 7091, 8400, 9490, 10671, 11736, 13279,
        				14600, 15878, 17286, 19235, 22165, 24281, 26169, 28258, 30665,
        				32146, 33486, 35130, 36825, 38582, 40159, 38107, 36538, 35078,
        				32980, 29154, 26734, 24403, 21339, 18179, 15942, 15442, 14368,
        				13188, 12188, 11152, 10114, 9076, 8038, 7000, 6643, 6286, 5929,
        				5527, 5215, 4858, 4750, 4650, 4600, 4500, 4490, 4300, 4350, 4330,
        				4310, 4495, 4477
        			]
        		}];
        	*/
        	this.fvSendData.series = this.gfnDsToSeries(this.dsChartArea, "name", "data");
        };

        /**
         * @desc Chart 의 contextmenu 버튼 숨기기
         * @param N/A
         * @return N/A
        */
        this.fnSetDisableContextmenu = function()
        {
        	this.fvSendData.navigation = {
                buttonOptions: {
                    enabled: false
                }
            }
        };

        /**
         * @desc Chart 의 contextmenu 위치, 아이템
         * @param N/A
         * @return N/A
        */
        this.fnSetContextmenu = function()
        {
        	this.fvSendData.exporting = {
                    buttons: {
                        contextButton: {
                            align: 'left'
                        },
        				menuItems: ["viewFullscreen", "printChart", "separator", "downloadPNG", "downloadJPEG", "downloadPDF", "downloadSVG"]
                    }
                }
        };

        /***********************************************************************************
        * 7.Component Event Area
        ***********************************************************************************/
        // Component Event Area - 컴포넌트 이벤트 함수는  자동으로 생성되는 함수명을 사용한다.

        /**
         * @description Line chart 그리기
        */
        this.btnDrawLine_onclick = function(obj,e)
        {
        	// Line Chart 용 데이터 설정
        	this.fnSetDataLine();

        	// contextmenu 버튼 숨기기
        	this.fnSetDisableContextmenu();

        	// webBrowser 컴포넌트에 chart 그리기 호출
        	if(system.navigatorname == "nexacro")
        	{
        		this.fnSetDataNRE();
        	}
        	else
        	{
        		this.fnSetDataWRE();
        	}
        };

        /**
         * @description Area chart 그리기
        */
        this.btnDrawArea_onclick = function(obj,e)
        {
        	// Area Chart 용 데이터 설정
        	this.fnSetDataArea();

        	this.fnSetContextmenu();

        	// webBrowser 컴포넌트에 chart 그리기 호출
        	if(system.navigatorname == "nexacro")
        	{
        		this.fnSetDataNRE();
        	}
        	else
        	{
        		this.fnSetDataWRE();
        	}
        };

        /**
         * @description WebBrowser 에 웹페이지가 로딩 되었을 때 발생
        */
        this.wbsHighChart_onloadcompleted = function(obj,e)
        {
        	trace("[wbsHighChart_onloadcompleted]");
        };

        /**
         * @description Line chart 그리기 (Popup)
        */
        this.btnDrawLinePopup_onclick = function(obj,e)
        {
        	// Line Chart 용 데이터 설정
        	this.fnSetDataLine();

        	// contextmenu 버튼 숨기기
        	this.fnSetDisableContextmenu();

        	var sPopupId	= "HChartPop";
        	var sPopupUrl	= "Frame_Popup::comHChartPop.xfdl";
        	var objArgs		= {pvSendData:this.fvSendData};
        	var oOption		= {modal:false, resizable:true, width: 930, height:600, titletext:"HChart - Line"};

        	this.gfnShowPopupForSysOnly(this, sPopupId, sPopupUrl, objArgs, "fnPopupCallback", oOption);
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("oninit",this.form_oninit,this);
            this.addEventHandler("onload",this.form_onload,this);
            this.addEventHandler("ontimer",this.form_ontimer,this);
            this.wbsHighChart.addEventHandler("onloadcompleted",this.wbsHighChart_onloadcompleted,this);
            this.btnDrawLine.addEventHandler("onclick",this.btnDrawLine_onclick,this);
            this.btnDrawArea.addEventHandler("onclick",this.btnDrawArea_onclick,this);
            this.btnDrawLinePopup.addEventHandler("onclick",this.btnDrawLinePopup_onclick,this);
        };
        this.loadIncludeScript("sampleChart.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
