<!-- =================================================
 Vue Template
================================================== -->
<template>
  <div class="page-wrapper">
    <content-header
      :height="10"
      :bg-color="'#00aceb'"
      :color="'#ffffff'"
      :font-size="3"
      :has-back-button="true"
      :button-bg-color="'#00aceb'"
      :button-bg-color-active="'#0CF6B5'"
      :button-text-color="'#ffffff'"
      :button-text-color-active="'#ffffff'"
      @back-button-clicked="jumpTo('home')"
      >
      <h1 slot="content-title">Calendar</h1>
    </content-header>
    <div class="container">
      <div class="main clearfix">
        <div class="bb-custom-wrapper">
          <div id="bb-bookblock" class="bb-bookblock">
            <div class="bb-item">
              <img class="bb-custom-img" src="static/images/demo2/1.jpg" alt="image01"/>
              <div class="fc-calendar-wrap">
                <h2>January 2017</h2>
                <div class="fc-calendar-container"><div class="fc-calendar fc-five-rows"><div class="fc-head"><div>Monday</div><div>Tuesday</div><div>Wednesday</div><div>Thursday</div><div>Friday</div><div>Saturday</div><div>Sunday</div></div><div class="fc-body"><div class="fc-row"><div></div><div class="fc-content"><span class="fc-date">1</span><span class="fc-weekday">Tue</span><div><span>New Year's day</span></div></div><div><span class="fc-date">2</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">3</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">4</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">5</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">6</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">7</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">8</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">9</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">10</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">11</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">12</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">13</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">14</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">15</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">16</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">17</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">18</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">19</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">20</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">21</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">22</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">23</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">24</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">25</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">26</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">27</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">28</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">29</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">30</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">31</span><span class="fc-weekday">Thu</span></div><div></div><div></div><div></div></div></div></div></div>
              </div>
            </div>
            <div class="bb-item">
              <img class="bb-custom-img" src="static/images/demo2/2.jpg" alt="image02"/>
              <div class="fc-calendar-wrap">
                <h2>February 2017</h2>
                <div class="fc-calendar-container"><div class="fc-calendar fc-five-rows"><div class="fc-head"><div>Monday</div><div>Tuesday</div><div>Wednesday</div><div>Thursday</div><div>Friday</div><div>Saturday</div><div>Sunday</div></div><div class="fc-body"><div class="fc-row"><div></div><div></div><div></div><div></div><div><span class="fc-date">1</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">2</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">3</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">4</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">5</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">6</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">7</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">8</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">9</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">10</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">11</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">12</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">13</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">14</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">15</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">16</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">17</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">18</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">19</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">20</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">21</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">22</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">23</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">24</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">25</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">26</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">27</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">28</span><span class="fc-weekday">Thu</span></div><div></div><div></div><div></div></div></div></div></div>
              </div>
            </div>
            <div class="bb-item">
              <img class="bb-custom-img" src="static/images/demo2/3.jpg" alt="image03"/>
              <div class="fc-calendar-wrap">
                <h2>March 2017</h2>
                <div class="fc-calendar-container"><div class="fc-calendar fc-five-rows"><div class="fc-head"><div>Monday</div><div>Tuesday</div><div>Wednesday</div><div>Thursday</div><div>Friday</div><div>Saturday</div><div>Sunday</div></div><div class="fc-body"><div class="fc-row"><div></div><div></div><div></div><div></div><div><span class="fc-date">1</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">2</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">3</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">4</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">5</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">6</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">7</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">8</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">9</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">10</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">11</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">12</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">13</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">14</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">15</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">16</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">17</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">18</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">19</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">20</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">21</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">22</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">23</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">24</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">25</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">26</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">27</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">28</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">29</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">30</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">31</span><span class="fc-weekday">Sun</span></div></div></div></div></div>
              </div>
            </div>
            <div class="bb-item">
              <img class="bb-custom-img" src="static/images/demo2/4.jpg" alt="image04"/>
              <div class="fc-calendar-wrap">
                <h2>April 2017</h2>
                <div class="fc-calendar-container"><div class="fc-calendar fc-five-rows"><div class="fc-head"><div>Monday</div><div>Tuesday</div><div>Wednesday</div><div>Thursday</div><div>Friday</div><div>Saturday</div><div>Sunday</div></div><div class="fc-body"><div class="fc-row"><div><span class="fc-date">1</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">2</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">3</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">4</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">5</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">6</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">7</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">8</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">9</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">10</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">11</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">12</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">13</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">14</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">15</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">16</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">17</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">18</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">19</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">20</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">21</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">22</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">23</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">24</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">25</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">26</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">27</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">28</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">29</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">30</span><span class="fc-weekday">Tue</span></div><div></div><div></div><div></div><div></div><div></div></div></div></div></div>
              </div>
            </div>
            <div class="bb-item">
              <img class="bb-custom-img" src="static/images/demo2/5.jpg" alt="image05"/>
              <div class="fc-calendar-wrap">
                <h2>May 2017</h2>
                <div class="fc-calendar-container"><div class="fc-calendar fc-five-rows"><div class="fc-head"><div>Monday</div><div>Tuesday</div><div>Wednesday</div><div>Thursday</div><div>Friday</div><div>Saturday</div><div>Sunday</div></div><div class="fc-body"><div class="fc-row"><div></div><div></div><div><span class="fc-date">1</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">2</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">3</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">4</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">5</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">6</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">7</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">8</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">9</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">10</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">11</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">12</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">13</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">14</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">15</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">16</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">17</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">18</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">19</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">20</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">21</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">22</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">23</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">24</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">25</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">26</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">27</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">28</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">29</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">30</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">31</span><span class="fc-weekday">Fri</span></div><div></div><div></div></div></div></div></div>
              </div>
            </div>
            <div class="bb-item">
              <img class="bb-custom-img" src="static/images/demo2/6.jpg" alt="image06"/>
              <div class="fc-calendar-wrap">
                <h2>June 2017</h2>
                <div class="fc-calendar-container"><div class="fc-calendar fc-five-rows"><div class="fc-head"><div>Monday</div><div>Tuesday</div><div>Wednesday</div><div>Thursday</div><div>Friday</div><div>Saturday</div><div>Sunday</div></div><div class="fc-body"><div class="fc-row"><div></div><div></div><div></div><div></div><div></div><div><span class="fc-date">1</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">2</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">3</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">4</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">5</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">6</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">7</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">8</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">9</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">10</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">11</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">12</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">13</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">14</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">15</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">16</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">17</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">18</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">19</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">20</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">21</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">22</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">23</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">24</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">25</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">26</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">27</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">28</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">29</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">30</span><span class="fc-weekday">Sun</span></div></div></div></div></div>
              </div>
            </div>
            <div class="bb-item">
              <img class="bb-custom-img" src="static/images/demo2/7.jpg" alt="image07"/>
              <div class="fc-calendar-wrap">
                <h2>July 2017</h2>
                <div class="fc-calendar-container"><div class="fc-calendar fc-five-rows"><div class="fc-head"><div>Monday</div><div>Tuesday</div><div>Wednesday</div><div>Thursday</div><div>Friday</div><div>Saturday</div><div>Sunday</div></div><div class="fc-body"><div class="fc-row"><div><span class="fc-date">1</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">2</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">3</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">4</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">5</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">6</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">7</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">8</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">9</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">10</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">11</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">12</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">13</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">14</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">15</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">16</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">17</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">18</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">19</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">20</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">21</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">22</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">23</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">24</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">25</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">26</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">27</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">28</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">29</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">30</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">31</span><span class="fc-weekday">Wed</span></div><div></div><div></div><div></div><div></div></div></div></div></div>
              </div>
            </div>
            <div class="bb-item">
              <img class="bb-custom-img" src="static/images/demo2/8.jpg" alt="image08"/>
              <div class="fc-calendar-wrap">
                <h2>August 2017</h2>
                <div class="fc-calendar-container"><div class="fc-calendar fc-five-rows"><div class="fc-head"><div>Monday</div><div>Tuesday</div><div>Wednesday</div><div>Thursday</div><div>Friday</div><div>Saturday</div><div>Sunday</div></div><div class="fc-body"><div class="fc-row"><div></div><div></div><div></div><div><span class="fc-date">1</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">2</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">3</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">4</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">5</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">6</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">7</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">8</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">9</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">10</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">11</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">12</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">13</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">14</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">15</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">16</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">17</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">18</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">19</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">20</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">21</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">22</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">23</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">24</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">25</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">26</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">27</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">28</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">29</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">30</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">31</span><span class="fc-weekday">Sat</span></div><div></div></div></div></div></div>
              </div>
            </div>
            <div class="bb-item">
              <img class="bb-custom-img" src="static/images/demo2/9.jpg" alt="image09"/>
              <div class="fc-calendar-wrap">
                <h2>September 2017</h2>
                <div class="fc-calendar-container"><div class="fc-calendar fc-six-rows"><div class="fc-head"><div>Monday</div><div>Tuesday</div><div>Wednesday</div><div>Thursday</div><div>Friday</div><div>Saturday</div><div>Sunday</div></div><div class="fc-body"><div class="fc-row"><div></div><div></div><div></div><div></div><div></div><div></div><div><span class="fc-date">1</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">2</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">3</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">4</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">5</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">6</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">7</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">8</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">9</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">10</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">11</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">12</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">13</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">14</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">15</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">16</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">17</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">18</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">19</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">20</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">21</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">22</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">23</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">24</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">25</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">26</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">27</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">28</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">29</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">30</span><span class="fc-weekday">Mon</span></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div></div></div>
              </div>
            </div>
            <div class="bb-item">
              <img class="bb-custom-img" src="static/images/demo2/10.jpg" alt="image10"/>
              <div class="fc-calendar-wrap">
                <h2>October 2017</h2>
                <div class="fc-calendar-container"><div class="fc-calendar fc-five-rows"><div class="fc-head"><div>Monday</div><div>Tuesday</div><div>Wednesday</div><div>Thursday</div><div>Friday</div><div>Saturday</div><div>Sunday</div></div><div class="fc-body"><div class="fc-row"><div></div><div><span class="fc-date">1</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">2</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">3</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">4</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">5</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">6</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">7</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">8</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">9</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">10</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">11</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">12</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">13</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">14</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">15</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">16</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">17</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">18</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">19</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">20</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">21</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">22</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">23</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">24</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">25</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">26</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">27</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">28</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">29</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">30</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">31</span><span class="fc-weekday">Thu</span></div><div></div><div></div><div></div></div></div></div></div>
              </div>
            </div>
            <div class="bb-item">
              <img class="bb-custom-img" src="static/images/demo2/11.jpg" alt="image11"/>
              <div class="fc-calendar-wrap">
                <h2>November 2017</h2>
                <div class="fc-calendar-container"><div class="fc-calendar fc-five-rows"><div class="fc-head"><div>Monday</div><div>Tuesday</div><div>Wednesday</div><div>Thursday</div><div>Friday</div><div>Saturday</div><div>Sunday</div></div><div class="fc-body"><div class="fc-row"><div></div><div></div><div></div><div></div><div><span class="fc-date">1</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">2</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">3</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">4</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">5</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">6</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">7</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">8</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">9</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">10</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">11</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">12</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">13</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">14</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">15</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">16</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">17</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">18</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">19</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">20</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">21</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">22</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">23</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">24</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">25</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">26</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">27</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">28</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">29</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">30</span><span class="fc-weekday">Sat</span></div><div></div></div></div></div></div>
              </div>
            </div>
            <div class="bb-item">
              <img class="bb-custom-img" src="static/images/demo2/12.jpg" alt="image12"/>
              <div class="fc-calendar-wrap">
                <h2>December 2017</h2>
                <div class="fc-calendar-container"><div class="fc-calendar fc-six-rows"><div class="fc-head"><div>Monday</div><div>Tuesday</div><div>Wednesday</div><div>Thursday</div><div>Friday</div><div>Saturday</div><div>Sunday</div></div><div class="fc-body"><div class="fc-row"><div></div><div></div><div></div><div></div><div></div><div></div><div><span class="fc-date">1</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">2</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">3</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">4</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">5</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">6</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">7</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">8</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">9</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">10</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">11</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">12</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">13</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">14</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">15</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">16</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">17</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">18</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">19</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">20</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">21</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">22</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">23</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">24</span><span class="fc-weekday">Tue</span></div><div><span class="fc-date">25</span><span class="fc-weekday">Wed</span></div><div><span class="fc-date">26</span><span class="fc-weekday">Thu</span></div><div><span class="fc-date">27</span><span class="fc-weekday">Fri</span></div><div><span class="fc-date">28</span><span class="fc-weekday">Sat</span></div><div><span class="fc-date">29</span><span class="fc-weekday">Sun</span></div></div><div class="fc-row"><div><span class="fc-date">30</span><span class="fc-weekday">Mon</span></div><div><span class="fc-date">31</span><span class="fc-weekday">Tue</span></div><div></div><div></div><div></div><div></div><div></div></div></div></div></div>
              </div>
            </div>
          </div>
          <nav>
            <a id="bb-nav-prev" href="#" class="bb-custom-icon bb-custom-icon-arrow-left">Previous</a>
            <a id="bb-nav-next" href="#" class="bb-custom-icon bb-custom-icon-arrow-right">Next</a>
          </nav>
        </div>
      </div>
    </div><!-- /container -->
  </div>
</template>

<!-- =================================================
 Vue Script
================================================== -->
<script>
import ContentHeader from '@/components/ContentHeader'
import '@/../static/js/jquerypp.custom.js'
import '@/../static/js/jquery.bookblock.js'

export default {
  name: 'calendar',
  components: {
    ContentHeader
  },
  created () {
    this.addEventListenerForSocket()
  },
  mounted () {
    this.initPage()
  },
  methods: {
    /*****************************************
    // listening to web socket events
    *****************************************/
    addEventListenerForSocket () {
      this.$bus.$on('rotate-forward', ($event) => {
        $('#bb-bookblock').bookblock('next')
      })
      this.$bus.$on('rotate-backward', ($event) => {
        $('#bb-bookblock').bookblock('prev')
      })
    },
    initPage () {
      let config = {
        $bookBlock : $('#bb-bookblock'),
        $navNext : $('#bb-nav-next'),
        $navPrev : $('#bb-nav-prev')
      }

      config.$bookBlock.bookblock({
        orientation : 'horizontal',
        speed : 700
      })

      this.initEvents(config)
      return { init : this.initPage }
    },
    initEvents (config) {
      // let $slides = config.$bookBlock.children()

      // add navigation events
      config.$navNext.on('click touchstart', () => {
        config.$bookBlock.bookblock('next')
        return false
      })

      config.$navPrev.on('click touchstart', () => {
        config.$bookBlock.bookblock('prev')
        return false
      })

      // add keyboard events
      $(document).keydown((e) => {
        let keyCode = e.keyCode || e.which
        let arrow = {
          left : 37,
          up : 38,
          right : 39,
          down : 40
        }

        switch (keyCode) {
          case arrow.up:
            config.$bookBlock.bookblock('prev')
            e.preventDefault()
            break
          case arrow.down:
            config.$bookBlock.bookblock('next')
            e.preventDefault()
            break
        }
      })
    }
  }
}
</script>

<!-- =================================================
 Vue Style
================================================== -->
<style lang="stylus" scoped>
// @import "../../static/css/default.css"
@import "../../static/css/bookblock.css"
// @import "../../static/css/demo2.css"
@import "../../static/css/calendar.css"

.page-wrapper {
  position: fixed;
  width: 100%;
  top: 10%;
  height: 90%;
}

.container
  padding-top: 100px

*, *:after, *:before { -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; }

.bb-custom-wrapper {
	width: 560px;
	position: relative;
	margin: 0 auto 40px;
	text-align: center;
}

.bb-custom-wrapper .bb-bookblock {
	width: 560px;
	height: 600px;
	box-shadow: 0 12px 20px -10px rgba(81,64,49,0.6);
}

.bb-custom-img {
	position: absolute;
	left: 0;
	top: 0;
}

.bb-custom-wrapper h3 {
	font-size: 1.4em;
	font-weight: 300;
	margin: 0.4em 0 1em;
}

.bb-custom-wrapper nav {
	width: 100%;
	height: 30px;
	margin: 1em auto 0;
	position: relative;
	z-index: 0;
	text-align: center;
}

.bb-custom-wrapper nav a {
	display: inline-block;
	width: 30px;
	height: 30px;
	text-align: center;
	border-radius: 2px;
	background: #883b61;
	color: #fff;
	font-size: 0;
	margin: 2px;
}

.bb-custom-wrapper nav a:hover {
	opacity: 0.6;
}

.bb-custom-icon:before {
	font-family: 'arrows';
	speak: none;
	font-style: normal;
	font-weight: normal;
	font-variant: normal;
	text-transform: none;
	line-height: 1;
	font-size: 20px;
	line-height: 30px;
	display: block;
	-webkit-font-smoothing: antialiased;
}

.bb-custom-icon-first:before,
.bb-custom-icon-last:before {
	content: "\e002";
}

.bb-custom-icon-arrow-left:before,
.bb-custom-icon-arrow-right:before {
	content: "\e003";
}

.bb-custom-icon-arrow-left:before,
.bb-custom-icon-first:before {
	-webkit-transform: rotate(180deg);
	transform: rotate(180deg);
}

</style>
