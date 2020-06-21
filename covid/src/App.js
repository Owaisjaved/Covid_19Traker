import React from 'react'

import { Cards, Chart, CountryPicker,Information } from './components';
import styles from './App.module.css';
// import { Button, ButtonGroup } from '@material-ui/core'
// import ScrollableAnchor from 'react-scrollable-anchor'
import { fetchData } from './api/index'

import corImg from '../src/images/image.png'

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }
    async  componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country });

    }
    render() {
        const { data, country } = this.state
        return (

            <div className={styles.container}>
                <img className={styles.image} src={corImg} alt='coronaVirus'></img>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                {/* <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                    <Button a href="#Symtoms">Symptoms</Button>
                    <Button a href="#Prevention">Prevention</Button>
                    <Button a href="#Treatments">Treatments</Button>
                </ButtonGroup> */}

                <Cards data={data} />
                <Chart data={data} country={country} />
                <Information />
                {/* <div>


                    <ScrollableAnchor id={'Symptons'}>
                        <div> Hello World </div>
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'Preventions'}>
                        <div> How are you world? </div>
                    </ScrollableAnchor>
                    <ScrollableAnchor id={'Treatments'}>
                        <div> How are you world? </div>
                    </ScrollableAnchor>

                </div> */}
            </div>

        )
    }
}
export default App;