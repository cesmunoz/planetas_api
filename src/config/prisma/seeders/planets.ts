import { Prisma } from '@prisma/client'

const planetSeeder: Prisma.PlanetCreateInput[] = [
	{
		name: 'Mercury',
		overview: {
			create: {
				content:
					"Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
				source: 'https://en.wikipedia.org/wiki/Mercury_(planet)',
			},
		},
		structure: {
			create: {
				content:
					"Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
				source:
					'https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure',
			},
		},
		geology: {
			create: {
				content:
					"Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
				source:
					'https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology',
			},
		},
		rotation: '58.6 days',
		revolution: '87.97 days',
		radius: '2,439.7 km',
		temperature: '430°c',
		images: {
			create: {
				planet: {
					create: {
						small: '/assets/planet-mercury-small.svg',
						medium: '/assets/planet-mercury-medium.svg',
						large: '/assets/planet-mercury.svg',
					},
				},
				internal: {
					create: {
						small: '/assets/planet-mercury-internal-small.svg',
						medium: '/assets/planet-mercury-internal-medium.svg',
						large: '/assets/planet-mercury-internal.svg',
					},
				},
				geology: {
					create: {
						small: '/assets/geology-mercury-small.png',
						medium: '/assets/geology-mercury-medium.png',
						large: '/assets/geology-mercury.png',
					},
				},
			},
		},
	},
	{
		name: 'Venus',
		overview: {
			create: {
				content:
					"Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
				source: 'https://en.wikipedia.org/wiki/Venus',
			},
		},
		structure: {
			create: {
				content:
					'The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.',
				source: 'https://en.wikipedia.org/wiki/Venus#Internal_structure',
			},
		},
		geology: {
			create: {
				content:
					'Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.',
				source: 'https://en.wikipedia.org/wiki/Venus#Geography',
			},
		},
		rotation: '243 days',
		revolution: '224.7 days',
		radius: '6,051.8 km',
		temperature: '471°c',
		images: {
			create: {
				planet: {
					create: {
						small: '/assets/planet-venus-small.svg',
						medium: '/assets/planet-venus-medium.svg',
						large: '/assets/planet-venus.svg',
					},
				},
				internal: {
					create: {
						small: '/assets/planet-venus-internal-small.svg',
						medium: '/assets/planet-venus-internal-medium.svg',
						large: '/assets/planet-venus-internal.svg',
					},
				},
				geology: {
					create: {
						small: '/assets/geology-venus-small.png',
						medium: '/assets/geology-venus-medium.png',
						large: '/assets/geology-venus.png',
					},
				},
			},
		},
	},
	{
		name: 'Earth',
		overview: {
			create: {
				content:
					"Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
				source: 'https://en.wikipedia.org/wiki/Earth',
			},
		},
		structure: {
			create: {
				content:
					"Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
				source: 'https://en.wikipedia.org/wiki/Earth#Internal_structure',
			},
		},
		geology: {
			create: {
				content:
					'The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.',
				source: 'https://en.wikipedia.org/wiki/Earth#Surface',
			},
		},
		rotation: '0.99 days',
		revolution: '365.26 days',
		radius: '6,371 km',
		temperature: '16°c',
		images: {
			create: {
				planet: {
					create: {
						small: '/assets/planet-earth-small.svg',
						medium: '/assets/planet-earth-medium.svg',
						large: '/assets/planet-earth.svg',
					},
				},
				internal: {
					create: {
						small: '/assets/planet-earth-internal-small.svg',
						medium: '/assets/planet-earth-internal-medium.svg',
						large: '/assets/planet-earth-internal.svg',
					},
				},
				geology: {
					create: {
						small: '/assets/geology-earth-small.png',
						medium: '/assets/geology-earth-medium.png',
						large: '/assets/geology-earth.png',
					},
				},
			},
		},
	},
	{
		name: 'Mars',
		overview: {
			create: {
				content:
					'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
				source: 'https://en.wikipedia.org/wiki/Mars',
			},
		},
		structure: {
			create: {
				content:
					'Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.',
				source: 'https://en.wikipedia.org/wiki/Mars#Internal_structure',
			},
		},
		geology: {
			create: {
				content:
					'Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.',
				source: 'https://en.wikipedia.org/wiki/Mars#Surface_geology',
			},
		},
		rotation: '1.03 days',
		revolution: '1.88 years',
		radius: '3,389.5 km',
		temperature: '−28°c',
		images: {
			create: {
				planet: {
					create: {
						small: '/assets/planet-mars-small.svg',
						medium: '/assets/planet-mars-medium.svg',
						large: '/assets/planet-mars.svg',
					},
				},
				internal: {
					create: {
						small: '/assets/planet-mars-internal-small.svg',
						medium: '/assets/planet-mars-internal-medium.svg',
						large: '/assets/planet-mars-internal.svg',
					},
				},
				geology: {
					create: {
						small: '/assets/geology-mars-small.png',
						medium: '/assets/geology-mars-medium.png',
						large: '/assets/geology-mars.png',
					},
				},
			},
		},
	},
	{
		name: 'Jupiter',
		overview: {
			create: {
				content:
					'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.',
				source: 'https://en.wikipedia.org/wiki/Jupiter',
			},
		},
		structure: {
			create: {
				content:
					"When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
				source: 'https://en.wikipedia.org/wiki/Jupiter#Internal_structure',
			},
		},
		geology: {
			create: {
				content:
					'The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.',
				source:
					'https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices',
			},
		},
		rotation: '9.93 hours',
		revolution: '11.86 years',
		radius: '69,911 km',
		temperature: '-108°c',
		images: {
			create: {
				planet: {
					create: {
						small: '/assets/planet-jupiter-small.svg',
						medium: '/assets/planet-jupiter-medium.svg',
						large: '/assets/planet-jupiter.svg',
					},
				},
				internal: {
					create: {
						small: '/assets/planet-jupiter-internal-small.svg',
						medium: '/assets/planet-jupiter-internal-medium.svg',
						large: '/assets/planet-jupiter-internal.svg',
					},
				},
				geology: {
					create: {
						small: '/assets/geology-jupiter-small.png',
						medium: '/assets/geology-jupiter-medium.png',
						large: '/assets/geology-jupiter.png',
					},
				},
			},
		},
	},
	{
		name: 'Saturn',
		overview: {
			create: {
				content:
					'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.',
				source: 'https://en.wikipedia.org/wiki/Saturn',
			},
		},
		structure: {
			create: {
				content:
					"Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
				source: 'https://en.wikipedia.org/wiki/Saturn#Internal_structure',
			},
		},
		geology: {
			create: {
				content:
					"The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
				source: 'https://en.wikipedia.org/wiki/Saturn#Atmosphere',
			},
		},
		rotation: '10.8 hours',
		revolution: '29.46 years',
		radius: '58,232 km',
		temperature: '-138°c',
		images: {
			create: {
				planet: {
					create: {
						small: '/assets/planet-saturn-small.svg',
						medium: '/assets/planet-saturn-medium.svg',
						large: '/assets/planet-saturn.svg',
					},
				},
				internal: {
					create: {
						small: '/assets/planet-saturn-internal-small.svg',
						medium: '/assets/planet-saturn-internal-medium.svg',
						large: '/assets/planet-saturn-internal.svg',
					},
				},
				geology: {
					create: {
						small: '/assets/geology-saturn-small.png',
						medium: '/assets/geology-saturn-medium.png',
						large: '/assets/geology-saturn.png',
					},
				},
			},
		},
	},
	{
		name: 'Uranus',
		overview: {
			create: {
				content:
					'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
				source: 'https://en.wikipedia.org/wiki/Uranus',
			},
		},
		structure: {
			create: {
				content:
					"The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
				source: 'https://en.wikipedia.org/wiki/Uranus#Internal_structure',
			},
		},
		geology: {
			create: {
				content:
					"The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
				source: 'https://en.wikipedia.org/wiki/Uranus#Atmosphere',
			},
		},
		rotation: '17.2 hours',
		revolution: '84 years',
		radius: '25,362 km',
		temperature: '-195°c',
		images: {
			create: {
				planet: {
					create: {
						small: '/assets/planet-uranus-small.svg',
						medium: '/assets/planet-uranus-medium.svg',
						large: '/assets/planet-uranus.svg',
					},
				},
				internal: {
					create: {
						small: '/assets/planet-uranus-internal-small.svg',
						medium: '/assets/planet-uranus-internal-medium.svg',
						large: '/assets/planet-uranus-internal.svg',
					},
				},
				geology: {
					create: {
						small: '/assets/geology-uranus-small.png',
						medium: '/assets/geology-uranus-medium.png',
						large: '/assets/geology-uranus.png',
					},
				},
			},
		},
	},
	{
		name: 'Neptune',
		overview: {
			create: {
				content:
					'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.',
				source: 'https://en.wikipedia.org/wiki/Neptune',
			},
		},
		structure: {
			create: {
				content:
					"Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
				source: 'https://en.wikipedia.org/wiki/Neptune#Internal_structure',
			},
		},
		geology: {
			create: {
				content:
					"Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
				source: 'https://en.wikipedia.org/wiki/Neptune#Atmosphere',
			},
		},
		rotation: '16.08 hours',
		revolution: '164.79 years',
		radius: '24,622 km',
		temperature: '-201°c',
		images: {
			create: {
				planet: {
					create: {
						small: '/assets/planet-neptune-small.svg',
						medium: '/assets/planet-neptune-medium.svg',
						large: '/assets/planet-neptune.svg',
					},
				},
				internal: {
					create: {
						small: '/assets/planet-neptune-internal-small.svg',
						medium: '/assets/planet-neptune-internal-medium.svg',
						large: '/assets/planet-neptune-internal.svg',
					},
				},
				geology: {
					create: {
						small: '/assets/geology-neptune-small.png',
						medium: '/assets/geology-neptune-medium.png',
						large: '/assets/geology-neptune.png',
					},
				},
			},
		},
	},
]

export default planetSeeder
