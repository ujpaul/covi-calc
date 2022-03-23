import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { country as countryAction } from '../redux/action/country';
import { continents as continentsAction } from '../redux/action/continents';
import img from './img.jpg'

function Header() {
	const [ country, setCountry ] = useState('Rwanda');
	const data = useSelector((state) => state);
	const { country: countryRecords, loading } = data;
	const continent = useSelector((state) => state);
	const { continents } = continent;
	const dispatch = useDispatch();
	const getCountry = () => dispatch(countryAction(country));
	useEffect(
		() => {
			dispatch(continentsAction());
		},
		[ loading, dispatch ]
	);
	const {
		active,
		cases,
		todayCases,
		tests,
		deaths,
		recovered,
		countryInfo,
		testsPerOneMillion,
		todayDeaths,
		todayRecovered
	} = countryRecords;

	return (
		<div className="header">
			<div className="flex-header">
				<div className="ms-5 mt-4">
					<h2 className="mt-4 ms-5">COVICALC</h2>
				</div>
				<div className="mt-4 me-5">
					<button className="btn btn-contact me-5 mt-4">
						<span className="btn-text">contact</span>
					</button>
				</div>
			</div>
			<div className="middle mt-4">
				<h1>UPDATES</h1>
				<p>Select Country</p>
				<div className="input-container text-center">
					<div>
						<select
							className="inputs-select"
							name="country"
							style={{ background: `${countryInfo && countryInfo.flag}` }}
							onChange={(e) => setCountry(e.target.value)}
						>
							<option> select country</option>
							<option value="Rwanda">Rwanda</option>
							<option value="Kenya">Kenya</option>
						</select>
					</div>
					<div className="d-flex date-btn-container">
						<input type="date" className="inputs-date" />
						<input type="button" value="submit" className="input-btn" onClick={getCountry} />
					</div>
				</div>
			</div>
			<div className="cumulative-top">
				<h1>2,188,881</h1>
				<p>Cumulatively</p>
			</div>
			<div className="cumulative-bottom ">
				<div className="row">
					<div className="col-md">
						<h3>{testsPerOneMillion}</h3>
						<p>Tests</p>
						<span>{tests}</span>
					</div>
					<div className="col-md">
						<h3>619</h3>
						<p>Postive cases</p>
						<span>4,254</span>
					</div>
					<div className="col-md">
						<h3>20</h3>
						<p>hospitalized</p>
						<span>1,886</span>
					</div>
					<div className="col-md">
						<h3>{todayRecovered}</h3>
						<p>recovered</p>
						<span>{recovered}</span>
					</div>
					<div className="col-md">
						<h3>{todayDeaths}</h3>
						<p>deaths</p>
						<span>{deaths}</span>
					</div>
					<div className="col-md">
						<h3>48,660</h3>
						<p>vaccinated</p>
						<span>729,130</span>
					</div>
				</div>
			</div>
			<div className="continent text-center">
				<h3 className="mb-5">Per Contintents</h3>
				<div className="row g-2">
					{continents &&
						Object.values(
							continents
						).map(({ continent, todayDeaths, deaths, todayRecovered, todayCases, cases }) => (
							<div className="col-md-3 margin-lft">
								<div className="input-container" style={{ display: 'inline-flex' }}>
									<div className="continent-card2-left">
										<h4> {continent} </h4>
										<h2>{todayCases}</h2>
										<p>New cases</p>
										<h6>All cases: {cases}</h6>
									</div>
									<div className="continent-card2-right">
										<div className="continent-card1-div">
											<h2>{todayDeaths}</h2>
											<p>New Deaths</p>
											<h6>Total deaths: {deaths}</h6>
										</div>
										<div className="continent-card1-div">
											<h3>{todayRecovered}</h3>
											<p>Newly Recovered</p>
											<h6>Total Recovered: {todayRecovered}</h6>
										</div>

										<div className="continent-card1-div">
											<h2>0</h2>
											<p>Newly Vaccinated</p>
											<span>Total Vaccinated: 91,878,564</span>
										</div>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
			<div className='d-flex justify-content-space-around'>
				<div className='div-img mt-4'>
					<img src={img} width='100%'height='400'/>
				</div>
				<div className='img-desc text-center'>
					<h2>UWIMANA Jean Paul</h2>
					<p>22<sup>nd</sup>August 2021</p>
				</div>
			</div>
			<div className="profile">
				<h1>REACH ME</h1>
				<h4>Email</h4>
				<p>uwimanajeanpaul3@gmail.com</p>

				<h4>Phone</h4>
				<p>+250781935130</p>

				<h4>Profile</h4>
				<p>https://gitlab.com/paul_dev</p>
			</div>
			<footer className='footer'>
               <p>Developed by <strong>UWIMANA Jean Paul</strong></p>
               <p>Designed by <strong>Awesomity Lab</strong></p>
           </footer>
		</div>
	);
}
export default Header;
