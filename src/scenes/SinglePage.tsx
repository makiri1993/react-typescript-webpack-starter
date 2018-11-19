import React, { Component } from 'react'

import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'react-vertical-timeline-component/style.min.css'

export default class SinglePage extends Component {
  render() {
    return (
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='August 2018 - present'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={
            <FontAwesomeIcon
              style={{ width: 24, marginLeft: -12 }}
              icon='terminal'
            />
          }
        >
          <h3 className='vertical-timeline-element-title'>
            Full Stack Developer
          </h3>
          <h4 className='vertical-timeline-element-title'>
            Schütze Consulting AG
          </h4>
          <h5 className='vertical-timeline-element-subtitle'>Berlin, DE</h5>
          <p>Javascript, Typescript, Webpack, React</p>
          <p>Java, Maven, Docker</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='February 2018 - July 2018'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={
            <FontAwesomeIcon
              style={{ width: 24, marginLeft: -12 }}
              icon='terminal'
            />
          }
        >
          <h3 className='vertical-timeline-element-title'>IT Consultant</h3>
          <h4 className='vertical-timeline-element-title'>ITP Nord GmbH</h4>
          <h5 className='vertical-timeline-element-subtitle'>Potsdam, DE</h5>
          <p>Project in Hanover, DE at Finanz Informatik GmbH</p>
          <p>
            Worked with OSPlus Framework. Developing banking Proof of Concepts.
            Deep dive into market risk management
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='February 2017 - February 2018'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={
            <FontAwesomeIcon
              style={{ width: 24, marginLeft: -12 }}
              icon='terminal'
            />
          }
        >
          <h3 className='vertical-timeline-element-title'>
            Junior IT Consultant
          </h3>
          <h4 className='vertical-timeline-element-title'>ITP Nord GmbH</h4>
          <h5 className='vertical-timeline-element-subtitle'>Potsdam, DE</h5>
          <p>Different projects in Berlin, Hanover and remote.</p>
          <p>
            <strong>Berlin: </strong> Supporting the organisation of a team.
            Working with linux-based Servers
          </p>
          <p>
            <strong>Hanover: </strong>
            Working in a huge redesign project. Process modelling all banking
            processes in the market risk management and liquidity risk
            management.
          </p>
          <p>
            <strong>Remote: </strong>
            Developig a Proof of Concept (Historical Simulation)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='October 2016 - January 2017'
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={
            <FontAwesomeIcon
              style={{ width: 24, marginLeft: -12 }}
              icon='terminal'
            />
          }
        >
          <h3 className='vertical-timeline-element-title'>Bachelor's Degree</h3>
          <h4 className='vertical-timeline-element-title'>
            University of Hildesheim / Finanz Informatik GmbH
          </h4>
          <h5 className='vertical-timeline-element-subtitle'>Hanover, DE</h5>
          <p>
            Writing my bachelor's degree at Finanz Informatik GmbH about
            conception. Designing a new feature in the cms of the Sparkasse.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    )
  }
}
