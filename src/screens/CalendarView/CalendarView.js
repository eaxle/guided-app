import React, { Component } from 'react';
import HorizontalScroll from 'react-scroll-horizontal'
import {render} from 'react-dom'
import CalendarHeader from './CalendarHeader'
import CalendarMain from './CalendarMain'
import CalendarFooter from './CalendarFooter'


// class CalendarView extends Component {
//   render() {
//     const child   = { width: `30em`, height: `100%`}
//     const parent  = { width: `60em`, height: `100%`}
//     return (
//       <div style={parent}>
//         <HorizontalScroll>
//             <div style={child} />
//             <div style={child} />
//             <div style={child} />
//         </HorizontalScroll>
//       </div>
//     )
//   }
// }

const displayDaysPerMonth = (year)=> {

  //定义每个月的天数，如果是闰年第二月改为29天
  let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    daysInMonth[1] = 29
  }

  //以下为了获取一年中每一个月在日历选择器上显示的数据，
  //从上个月开始，接着是当月，最后是下个月开头的几天

  //定义一个数组，保存上一个月的天数
  let daysInPreviousMonth = [].concat(daysInMonth)
  daysInPreviousMonth.unshift(daysInPreviousMonth.pop())

  //获取每一个月显示数据中需要补足上个月的天数
  let addDaysFromPreMonth = new Array(12)
    .fill(null)
    .map((item, index)=> {
      let day = new Date(year, index, 2).getDay()
      if (day === 0) {
        return 6
      } else {
        return day - 1
      }
    })

  //已数组形式返回一年中每个月的显示数据,每个数据为6行*7天
  return new Array(12)
    .fill([])
    .map((month, monthIndex)=> {
      let addDays = addDaysFromPreMonth[monthIndex],
        daysCount = daysInMonth[monthIndex],
        daysCountPrevious = daysInPreviousMonth[monthIndex],
        monthData = []
      //补足上一个月
      for (; addDays > 0; addDays--) {
        monthData.unshift(daysCountPrevious--)
      }
      //添入当前月
      for (let i = 0; i < daysCount;) {
        monthData.push(++i)
      }
      //补足下一个月
      for (let i = 35 - monthData.length, j = 0; j < i;) {
        monthData.push(++j)
      }
      return monthData
    })

}



class CalendarView extends Component {
  constructor() {
    //继承React.Component
    super()
    let now = new Date()
    this.state = {
      year: now.getFullYear(),
      month: now.getMonth(),
      day: now.getDate(),
      picked: false
    }
  }

  //切换到下一个月
    nextMonth() {
      if (this.state.month === 11) {
        this.setState({
          year: ++this.state.year,
          month: 0
        })
      } else {
        this.setState({
          month: ++this.state.month
        })
      }
    }
    //切换到上一个月
    prevMonth() {
      if (this.state.month === 0) {
        this.setState({
          year: --this.state.year,
          month: 11
        })
      } else {
        this.setState({
          month: --this.state.month
        })
      }
    }
    //选择日期
    datePick(day) {
      this.setState({day})
    }
    //切换日期选择器是否显示
    datePickerToggle() {
      this.refs.main.style.height =
        this.refs.main.style.height === '460px' ?
          '0px' : '460px'
    }
    //标记日期已经选择
    picked() {
      this.state.picked = true
    }



  render() {
    let props = {
      viewData: displayDaysPerMonth(this.state.year),
      datePicked: `${this.state.year} year
                   ${this.state.month + 1} month
                   ${this.state.day} day`
    }

    return (
      <div className="output">
        <div className="star1"></div>
        <div className="star2"></div>
        <div className="star3"></div>
        <p className="datePicked"
           onClick={this.datePickerToggle.bind(this)}>
          {props.datePicked}
        </p>
        <div className="main" ref="main">
          <CalendarHeader prevMonth={this.prevMonth.bind(this)}
                          nextMonth={this.nextMonth.bind(this)}
                          year={this.state.year}
                          month={this.state.month}
                          day={this.state.day}/>
          <CalendarMain {...props}
                        prevMonth={this.prevMonth.bind(this)}
                        nextMonth={this.nextMonth.bind(this)}
                        datePick={this.datePick.bind(this)}
                        year={this.state.year}
                        month={this.state.month}
                        day={this.state.day}/>
          <CalendarFooter
            picked={this.picked.bind(this)}
            datePickerToggle={this.datePickerToggle.bind(this)}/>
        </div>
      </div>
    )






    //   <div>
    //     <div className="headerborder">
		// 				<p>07 </p>
		// 				<p>2018</p>
		// 				<p className="triangle-left"> </p>
		// 				<p className="triangle-right"> </p>
    //     </div>
    //
    //     <div className="weekday">
		// 					<ul>
		// 						<li>SUN</li>
		// 						<li>MON</li>
		// 						<li>TUE</li>
		// 						<li>WED</li>
		// 						<li>THU</li>
		// 						<li>FRI</li>
		// 						<li>SAT</li>
		// 					</ul>
		// 	  </div>
    //
    //     <div className="CalendarDay">
		// 					<ul>
		// 						<li>1</li>
		// 						<li>2</li>
		// 						<li>3</li>
		// 						<li>4</li>
		// 						<li>5</li>
		// 						<li>6</li>
		// 						<li>7</li>
		// 					</ul>
		// 				</div>
    //
    //   </div>
    // )
  }
}

export default CalendarView;
