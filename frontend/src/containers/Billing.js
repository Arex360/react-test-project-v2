import { VscFilePdf } from 'react-icons/vsc'

const Billing = () => {
	return (
		<div className="billing">
			<div className="table table-borderless">
				<thead>
					<tr>
						<th style={{ width: '250px' }}>ReferEnce ID</th>
						<th style={{ width: '200px' }}>DATE</th>
						<th style={{ width: '200px' }}>AMOUNT</th>
						<th style={{ width: '200px' }}>Invoice</th>
					</tr>
				</thead>

				<tbody>
					<tr>
						<td>4571222f6rthswfg9981fr55</td>
						<td>7/12/2020</td>
						<td>$26</td>
						<td>
							<VscFilePdf className="icon" />
						</td>
					</tr>
					<tr>
						<td>4571222f6rthswfg9981fr55</td>
						<td>7/12/2020</td>
						<td>$26</td>
						<td>
							<VscFilePdf className="icon" />
						</td>
					</tr>
					<tr>
						<td>4571222f6rthswfg9981fr55</td>
						<td>7/12/2020</td>
						<td>$26</td>
						<td>
							<VscFilePdf className="icon" />
						</td>
					</tr>
				</tbody>
			</div>
		</div>
	)
}

export default Billing
