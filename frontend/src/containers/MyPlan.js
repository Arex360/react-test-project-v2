import { BiCheck } from 'react-icons/bi'

const MyPlan = () => {
	return (
		<div className="my_plan">
			<div className="row">
				<div className="col-lg-3 col-12">
					<div className="plan_card">
						<h2>Free</h2>

						<div className="points">
							<div className="point">
								<BiCheck className="icon" />
								Pellentesque interdum libero et
							</div>

							<div className="point">
								<BiCheck className="icon" />
								Pellentesque posuere jdfkdfkdfhd{' '}
							</div>

							<div className="point">
								<BiCheck className="icon" />
								Cras sed felis eget{' '}
							</div>

							<div className="point">
								<BiCheck className="icon" />
								Maecenas eget luctus
							</div>

							<div className="point">
								<BiCheck className="icon" />
								Nullam vitae augue
							</div>
						</div>

						<div className="price">$0</div>

						<button>Downgrade</button>
					</div>
				</div>

				<div className="col-lg-3 col-12">
					<div className="plan_card">
						<h2>Pro</h2>

						<div className="points">
							<div className="point">
								<BiCheck className="icon" />
								Pellentesque interdum libero et
							</div>

							<div className="point">
								<BiCheck className="icon" />
								Pellentesque posuere jdfkdfkdfhd{' '}
							</div>

							<div className="point">
								<BiCheck className="icon" />
								Cras sed felis eget{' '}
							</div>

							<div className="point">
								<BiCheck className="icon" />
								Maecenas eget luctus
							</div>

							<div className="point">
								<BiCheck className="icon" />
								Nullam vitae augue
							</div>
						</div>

						<div className="price">$12</div>

						<button>Downgrade</button>
					</div>
				</div>

				<div className="col-lg-3 col-12 ">
					<div className="plan_card active">
						<h2>Team</h2>

						<div className="points">
							<div className="point">
								<BiCheck className="icon" />
								Pellentesque interdum libero et
							</div>

							<div className="point">
								<BiCheck className="icon" />
								Pellentesque posuere jdfkdfkdfhd{' '}
							</div>

							<div className="point">
								<BiCheck className="icon" />
								Cras sed felis eget{' '}
							</div>

							<div className="point">
								<BiCheck className="icon" />
								Maecenas eget luctus
							</div>

							<div className="point">
								<BiCheck className="icon" />
								Nullam vitae augue
							</div>
						</div>

						<div className="price">$23</div>

						<button>Current Plan</button>
					</div>
				</div>

				<div className="col-lg-3 col-12">
					<div className="plan_card">
						<h2>Agency</h2>

						<div className="points">
							<div className="point">
								<BiCheck className="icon" />
								Pellentesque interdum libero et
							</div>

							<div className="point">
								<BiCheck className="icon" />
								Pellentesque posuere jdfkdfkdfhd{' '}
							</div>

							<div className="point">
								<BiCheck className="icon" />
								Cras sed felis eget{' '}
							</div>

							<div className="point">
								<BiCheck className="icon" />
								Maecenas eget luctus
							</div>

							<div className="point">
								<BiCheck className="icon" />
								Nullam vitae augue
							</div>
						</div>

						<div className="price">$43</div>

						<button>Downgrade</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyPlan
