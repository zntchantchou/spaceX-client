import React, { useState, } from 'react';
import {useQuery} from '@apollo/client';
import {loader} from 'graphql.macro';
import _ from "lodash";
import {getLaunchesDates as launches} from "./types/getLaunchesDates";
import {ReactComponent as ListIcon} from '../../../assets/icons/is-greater-than.svg';
import styles from "./Launches.module.css";
const getLaunchesDates = loader('./getLaunchDates.graphql');

// interface Props {}
function Launches() {
  const [years, setYears] = useState<String[]>([])
  const [displayYears, setDisplayYears] = useState<boolean>(false);

  const {loading, error, data} = useQuery<launches>(getLaunchesDates);
  // const {} = props

  const handleData = (data: launches) => {
    if(data.launches && years.length === 0) {
      const yearsFromData = data.launches
      .filter(launch => launch?.launch_date_utc != null)
      .map((launch) => launch?.launch_date_utc.substring(0, 4));
      setYears(_.uniq(yearsFromData)); // eliminate duplicates
    }
  }

  if(loading) console.log('loading')
  else if(error) console.log('error')
  else if(data) handleData(data);

  const yearsList = (
    <div className={styles.launchesContainer}> 
      {years.map(year => <div className={styles.year}><p>{year}</p></div>)}
    </div>
  )
  return (
    <>
      <div onClick={() => setDisplayYears(!displayYears)} className={styles.tile}>
        <div className={styles.title}>Launches</div>
        <div className={`${styles.listIcon} ${displayYears ? styles.rotateIcon : ''}`}>
          <ListIcon />
        </div>
      </div>
      {displayYears && years && yearsList}
    </>
  )
}

export default Launches
