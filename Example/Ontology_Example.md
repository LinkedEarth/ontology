# [WesternPacific.Khider.2014](#id)

## <a name="id">WesternPacific.Khider.2014</a> Type: Dataset
  datasetYear: 2016  
  name: WesternPacific_Khider_2014  
  version: 0.0  
  datasetCreator: [Khider, D.](#khider)  
  datasetContributor: [Khider, D.](#khider)  
  datasetContributor: [Jackson, C.S.](#jackson)  
  datasetContributor: [Stott, L.D.](#stott)  
  datasetContributor: [Rincon, M.](#rincon)  
  datasetContributor: [Southon, J.](#southon)  
  formatName: Text Document  
  publishedIn: [Khider.2014.Paleoceanography](#pub1)  
  publishedIn: [Stott.2007.Science](#pub2)  
  fundedBy: [NSF-1](#funding1)  
  fundedBy: [NSF-2](#funding2)  
  collectedFrom: Western Pacific Warm Pool (Location not modeled in the current ontology version)  
  includesData: [surface variability](#surface)  
  includesData: [deep ocean variability](#deep)  
  includesData: [chronological information](#chron)

## <a name="khider"> Khider, D. </a> Type: Person    
  name: Deborah Khider  
  affiliation: University of Southern California  
  email: khider@usc.edu  
  orcidNumber: 0000-0001-7501-8430

## <a name="jackson"> Jackson, C. </a> Type: Person  
  name: Charles S. Jackson  
  affiliation: The University of Texas at Austin  
  email: charles@utig.ig.utexas.edu

## <a name="stott"> Stott, L.D.  </a> Type: Person    
  name: Lowell D. Stott  
  affiliation: University of Southern California  
  email: stott@usc.edu

## <a name="rincon">Rincon, M.  </a> Type: Person      
  name: Miguel Rincon  
  affiliation: University of Southern California  
  email: rincon@usc.edu

## <a name="southon">Southon, J. </a> Type: Person          
  name: John Southon  
  affiliation: University of California Irvine  
  email: jsouthon@uci.edu

## <a name="pub1">Khider.2014.Paleoceanography</a> Type: PeerReviewedPublication      
  publicationYear: 2014  
  hasLink: http://onlinelibrary.wiley.com/doi/10.1002/2013PA002534/full  
  title: Assessing millennial-scale variability during the Holocene: A perspective from the western tropical Pacific.  
  creator: [Khider, D.](#khider)  
  creator: [Jackson, C.](#jackson)  
  creator: [Stott, L.](#stott)  
  name: Paleoceanography  
  volume: 29  
  issue: 3  
  pages: 143-159   

## <a name="pub2"> Stott.2007.Science </a>  Type: PeerReviewedPublication    
  publicationYear: 2007  
  hasLink: http://science.sciencemag.org/content/318/5849/435.full  
  title: Southern Hemisphere and deep-sea warming led deglacial atmospheric CO2 rise and tropical warming  
  creator: [Stott, L.D.](#stott)  
  creator: [Timmermann, A.](#timmermann)  
  creator: [Thunell, R.](#thunell)  
  name: Science  
  volume: 318  
  issue: 5849  
  pages: 435-438  

## <a name="timmermann">Timmermann, A. </a> Type: Person       
  name: Axel Timmermann  
  affiliation: University of Hawaii  
  email: axel@hawaii.edu  

## <a name="thunell">Tunell, R. </a> Type: Person      
  name: Robert Thunell  
  affiliation: University of South Carolina  
  email: thunell@geol.sc.edu

## <a name="funding1">NSF-1</a> Type Funding  
  fundingCountry: United States of America  
  fundingAgency: National Science Foundation  
  grantNumber: AGS#1049238  
  principalInvestigator: [Stott, L.D.](#stott)  

## <a name="funding2">NSF-2</a> Type: Funding     
  fundingCountry: United States of America  
  fundingAgency: National Science Foundation  
  grantNumber: AGS#1344514  
  principalInvestigator: [Stott, L.D.](#stott)

## <a name="chron">chronological information</a> Type: ChronData   
  description: The age model for core MD98-2181 is based on 14 14C ages of *Globigerinoides sacculifer*, mixed *G. sacculifer* with *G. ruber* or mixed planktonic calibrated to calendar years using the Marine09 calibration curve, adjusted for a modern reservoir age correction of 15 $\pm$ 79years. The age model was determined by using a smoothing spline interpolation scheme in-between 14C horizons. The uncertainty was determined in a Monte-Carlo process in which the radiocarbon ages were perturbed within uncertainty and a new smoothing splice interpolation applied. The 14C chemistry was performed at NOSAMS (WHOI) and the University of California Irvine.  
  hasLink: https://www.ncdc.noaa.gov/paleo/study/16055  
  foundInTable: [MD98-2181 Derived Data - Planktonic](#DataTable1)  
  foundInTable: [MD98-2181 Derived Data - Benthic](DataTable2)  
  foundInTable: [Chronology](#ChronDataTable1)  
  basedOn: [planktonic foraminifera radiocarbon](#ChronProxy)

## <a name="surface"> surface variability </a> Type: PaleoData  
  description: Sea surface temperature and seawater d18O variability is inferred from paired Mg/Ca and calcite d18O measured on the planktonic foraminifer *Globigerinoides ruber*. The data are analyzed to investigate millennial-scale variability in surface and deep water during the Holocene.
  hasLink: https://www.ncdc.noaa.gov/paleo/study/16055  
  foundInTable: [MD98-2181 Raw Isotopes](#PaleoDataTable)  
  foundInTable: [MD98-2181 Derived Data - Planktonic](#DataTable1)  
  basedOn: [Foraminifera Mg/Ca](#MgCaProxy)  
  basedOn: [Foraminifera d18O](#d18OProxy_Planktonic)  

## <a name="deep"> Deep Ocean Variability </a> Type: PaleoData  
  description: Benthic d18O interpreted to represent deep ocean temperature and salinity variability over the Holocene. The deep ocean variability signal originates from the Southern Ocean with a ~1,000-year transit time.  
  hasLink: https://www.ncdc.noaa.gov/paleo/study/16055  
  foundInTable: [MD98-2181 Raw Isotopes](#PaleoDataTable)  
  foundInTable: [MD98-2181 Derived Data - Benthic](#DataTable2)  
  basedOn: [Foraminifera d18O](#d18OProxy_Benthic)  

## <a name="Chronology"> Chronology </a> Type: ChronDataTable
  description: AMS results for marine sediment core MD98-2181. The planktonic
  14C dates were converted to calendar ages using the Marine09 calibration
  after a reservoir age correction of 15+/-79years.  
  format: Text File  
  name: khider2014-raw.txt  
  includesVariable: [depth_cm](#depth)    
  includesVariable: [CAMS#](#cams)  
  includesVariable: [Species](#Species)    
  includesVariable: [14C age](#radiocarbon)  
  includesVariable: [calendar age](#calage)    

## <a name="depth"> depth_cm </a> Type: MeasuredVariable  
  name: depth  
  hasUnits: cm  
  hasValue: [12 55 99 145 201 238 351 402 501 610 711 755 861 941 201 402 751 861]  

## <a name="Species"> Species </a> Type: Variable  
  name: Species  
  notes:  Gs: G sacculifer, Gr: G. ruber, MB: Mixed Benthics, Cm: C. mundulus.  
  hasValue: [Gs Gs/Gr Gs/Gr Gs MP Gs/Gr Gs Gs Gs/Gr Gs Gs Gs Gs MB MN Cm Cm]  

## <a name="cams"> CAMS# </a> Type: Variable
  name: CAMS number  
  hasValue: [OS-36493 OS-37308 OS-37292 OS-37306 90357 OS-36485 104528 OS-37289
  OS-37303 104529 OS-34874 OS-34875 OS-34876 OS-36478 90358 90359 OS-55868 OS-55896]  

## <a name="radiocarbon"> 14C age </a> Type: MeasuredVariable, Observation    
  name: radiocarbon age  
  hasUnits: years    
  hasValue: [580 815 1010 1090 1750 1900 2575 3960 4070 4925 6950 7360 9480 11050 2980 4430 8950 10350]    
  calibratedWith: [Marine09](#Marine09)  
  hasUncertainty: [radiocarbon uncertainty](#radioU)  
  measuredOn: [Marine Sediment Core](#archive)  

## <a name="Marine09"> Marine09</a> Type: Publication  
  publicationYear: 2009  
  hasLink: https://journals.uair.arizona.edu/index.php/radiocarbon/article/view/3569    
  title: IntCal09 and Marine09 radiocarbon age calibration curves 0-50,000 years cal BP.  
  creator: Reimer, P.J.  
  creator: Baillie, M.G.L  
  creator: Bard, E.  
  creator: Bayliss, A.  
  creator: Beck, J.W.  
  creator: Blackwell, P.G.  
  creator: Bronk Ramsey, C.  
  creator: Buck, C.E.  
  creator: Burr, G.S.  
  creator: Edwards, R.L.  
  creator: Friedrich, M.  
  creator: Grootes, P.M.  
  creator: Guilderson, T.P.  
  creator: Hajdas, I.  
  creator: Heaton, T.J.  
  creator: Hogg, A.G.  
  creator: Hughen, K.A.  
  creator: Kaiser, K.F.  
  creator: Kromer, B.  
  creator: McCormac, F.G.  
  creator: Manning, S.W.  
  creator: Reimer, R.W.  
  creator: Richards, D.A.  
  creator: [Southon, J.R.](#southon)  
  creator: Talamo, S.  
  creator: Turney, C.S.M.  
  creator: van der Plitch, J.  
  creator: Weyhenmeyer, C.E.  
  name: Radiocarbon    
  volume: 51    
  issue: 4    
  pages: 1111-1150    

## <a name="radioU"> Radiocarbon Uncertainty </a> Type: Uncertainty
  name: radiocarbon uncertainty  
  hasValue: [110 200 100 120 15 100 20 150 190 30 50 50 55 310 15 20 20 65]      
  hasUnits: years    
  description: Uncertainty in the radiocarbon measurements stemming from instrumental uncertainty and sample heterogeneity. The uncertainty is assumed to follow a normal distribution. The $\pm\sigma$ confidence interval is reported here.

## <a name="archive"> Marine Sediment Core </a> Type: Archive
  name: Marine Sediment  
  hasResolution: [Resolution](#Resolution)  
  method: the core was samples at 2cm intervals for the section corresponding to the Holocene. The bulk sediment samples were disaggregated in a sodium hexametaphosphate solution and wet-sieved through a 63-micrometer mesh to remove the clay fraction. The >63-micrometer fraction was then dry-sieved at >180 micro-meter.

## <a name="Resolution"> Archive Resolution </a> Type: Resolution
  hasValue: 80-180  
  hasUnits: cm/kyr  

## <a name="calage"> Calendar Age </a> Type: InferredVariable  
  name: calendar Age  
  hasValue: [269 491 688 742 1389 1551 2368 4069 4245 5344 7519 7891 10395 12488 -999.9 -999.9 -999.9 -999.9]   
  hasUnits: Years B.P.  
  hasMissingValues: -999.9    
  hasUncertainty: [calendar age uncertainty](#calU)

## <a name="calU"> Calendar Age Uncertainty </a> Type: Uncertainty  
  name: Calendar age uncertainty  
  hasValue: [222 395 205 242 149 262 232 433 530 216 153 193 175 803]    
  hasUnits: Years  
  modeledBy: [Calendar Age Uncertainty](#age_U)  

## <a name="age_U"> Calendar Age Uncertainty </a> Type: UncertaintyModel  
  modelReferences: [Khider.2014.Paleoceanography](#pub1)

## <a name="ChronProxy"> Planktonic foraminifera radiocarbon</a> Type: ChronProxy  
  name: Planktonic Foraminifera Radiocarbon  
  archivedIn: [Marine Sediment Core](#archive)  
  sensingWith: [Planktonic Foraminifera](#sensor1)  
  observedAs: [14C age](#radiocarbon)  

## <a name="sensor1"> Planktonic Foraminifera</a>  Type: OrganicSensor  
  name: Planktonic Foraminifera  
  seasonality: mean annual to warm season  

## <a name="PaleoDataTable"> MD98-2181 Raw Isotopes</a> Type: PaleoDataTable  
  description: Benthic (*cibicidoides mundulus*) foraminifera carbon and oxygen isotopes and planktonic foraminifera (*Globigerinoides ruber*) Mg/Ca and carbon and oxygen isotopes from a sediment core recovered from the Davao Gulf (South of Mindanao) in the western tropical Pacific in 1998. The record is 10,000-year long. Oxygen and carbon isotopic analyses were performed at the University of Southern California. Isotopic values are reported in delta notation relative to the Vienna PeeBee Belemnite (VPDB) isotopic standard. The Mg/Ca analyses were performed at the University of Southern California. This table lists replicate measurements individually and includes analytical outliers which were not used in subsequent analyses.  
  format: Text File
  name: khider2014-raw.txt  
  includesVariable: [depth-raw](#depth_raw)    
  includesVariable: [Mg/Ca-g.rub-w](#MgCa)  
  includesVariable: [d18Og.rub-w](#d18O_rub)  
  includesVariable: [d13Cg.rub-w](#d13C_rub)  
  includesVariable: [d18Oc.mund](#d18O_mund)  
  includesVariable: [d13Cc.mund](#d13C_mund)  

## <a name="depth-raw"> depth-raw </a> Type: MeasuredVariable
  name: depth-raw  
  hasUnits: cm  
  hasValue: [1 1 2.5 .... 847 849 851]  

## <a name="MgCa"> Mg/Ca-g.rub-w </a> Type: MeasuredVariable, Observation  
  name: Globigerinoides ruber white Mg/Ca  
  hasUnits: mmol/mol  
  hasValue: [5.21 -999.9 5.04 .... 5.42 -999.9 5.71]    
  hasMissingValues: -999.9   
  notes: Some values from Stott et al. (2004, 2007)  
  hasUncertainty: [Mg/Ca Uncertainty](#MgCa_U)  
  measuredBy: [ICP-AES](#MgCa_instrument)  
  measuredOn: [Marine Sediment Core](#archive)  
  method: Approximately 50-100 specimens of the planktonic foraminifer *G. ruber* were picked from the >180-micrometer fraction under a binocular microscope. The foraminifera were then cleaned following a protocol adapted from Barker et al. (2003).
  interpretedAs: [Mg/Ca Interpretation](#MgCa_interp)

## <a name="MgCa_interp"> Mg/Ca interpretation </a> Type: ClimateInterpretation  
  name: temperature  
  detail: sea surface  
  interpretationDirection: positive  
  interpretationReferences: [Anand.2003.Paleoceanography](#anand2003)

## <a name="anand2003"> Anand.2003.Paleoceanography </a> Type: Publication  
  publicationYear: 2003    
  hasLink: http://onlinelibrary.wiley.com/doi/10.1029/2002PA000846/full     
  title: Calibration of Mg/Ca thermometry in planktonic foraminifera from a sediment trap time series    
  creator: Anand, P.    
  creator: Elderfield, H.    
  creator: Conte, M. H.      
  name: Paleoceanography      
  volume: 18      
  issue: 2      
  pages: 1050  

## <a name="MgCa_U"> Mg/Ca Uncertainty </a> Type: Uncertainty  
  name: Mg/Ca Uncertainty  
  hasUnits: mmol/mol  
  hasValue: 0.2  
  description: The uncertainty on *G. ruber* samples was assessed by multiple measurements on foraminiferal samples and expressed as the standard error on the mean.  

## <a name="MgCa_instrument"> ICP-AES </a> Type: Instrument
  name: Jobin Yvon inductively coupled plasma atomic emission spectrometer  
  hasUncertainty: [ICP-AES Uncertainty](#MgCa_instrumentU)

## <a name="MgCa_instrumentU"> ICP-AES Uncertainty </a> Type: Uncertainty
  name: ICP-AES Uncertainty  
  hasUnits: mmol/mol  
  hasValue: 0.1  
  description: Uncertainty estimated by repeated measurements of a standard solution made from solid Mg and reagent grade CaCO3 in an elemental ratio of 5.63 mmol/mol.  

## <a name="d18O_rub"> d18Og.rub-w </a> Type: MeasuredVariable, Observation  
  name: *Globigerinoides ruber* white stable oxygen isotopes  
  hasUnits: per mil  
  hasValue: [-999.9 -999.9 -2.83 .... -2.53 -999.9 -2.36]  
  hasMissingValues: -999.9   
  notes: Some values from Stott et al. (2004, 2007)    
  hasUncertainty: [d18O Uncertainty](#d18O_U)  
  measuredOn: [Marine Sediment Core](#archive)  
  measuredBy: [Stable Isotope Ratio Mass Spectrometer](#IRMS)  
  standard: VPDB  
  method: Approximately 50-100 specimens of the planktonic foraminifer *G. ruber* were picked from the >180-micrometer fraction under a binocular microscope. The foraminifera were then cleaned following a protocol adapted from Barker et al. (2003).
  interpretedAs: [d18O interpretation-1](#d18O_interp_1)  
  interpretedAs: [d18O interpretation-2](#d18O_interp_2)
## <a name="d18O_U"> d18O Uncertainty </a> Type: Uncertainty  
  name: d18O Uncertainty  
  hasUnits: per mil  
  hasValue: 0.14  
  description: The uncertainty was assessed by multiple measurements on foraminiferal samples and expressed as the standard error on the mean.

## <a name="IRMS"> Stable Isotope Ratio Mass Spectrometer</a> Type: Instrument
  name: Multiprep Dual Inlet system attached to an Isoprime stable isotope ratio mass spectrometer  
  hasUncertainty: [IRMS Uncertainty](#IRMSU)

## <a name="IRMSU"> IRMS Uncertainty </a> Type: Uncertainty  
  name: IRMS Uncertainty  
  hasValue: 0.1  
  hasUnits: per mil

## <a name="d18O_interp_1">d18O interpretation-1</a> Type: ClimateInterpretation  
  name: Temperature  
  interpretationDirection: negative    
  interpretationReferences: [Epstein.1953.GSABull](#epstein1953)

## <a name="d18O_interp_2">d18O interpretation-2</a> Type: ClimateInterpretation  
  name: Seawater d18O  
  interpretationDirection: positive      
  interpretationReferences: [Epstein.1953.GSABull](#epstein1953)

## <a name="epstein1953"> Epstein.1953.GSABull </a> Type: Publication  
  publicationYear: 1953      
  hasLink: http://gsabulletin.gsapubs.org/content/64/11/1315   
  title: Revised carbonate-water isotopic temperature scale      
  creator: Epstein, S.      
  creator: Buchsbaum, R.      
  creator: Lowenstam, H.A.  
  creator: Urey, H.C.        
  name: Geological Society of America Bulletin        
  volume: 64        
  issue: 11        
  pages: 1315-1326  

## <a name="#d13C_rub"> d13Cg.rub-w </a> Type: MeasuredVariable, Observation   
  name: *Globigerinoides ruber* stable carbon isotopes  
  hasUnits: per mil  
  hasValue: [-999.9 -999.9 0.76 ... 0.75 -999.9 0.78]  
  hasMissingValues: -999.9   
  notes: Some values from Stott et al. (2004, 2007)  
  hasUncertainty: [d13C Uncertainty](#d13C_U)  
  measuredOn: [Marine Sediment Core](#archive)  
  measuredBy: [Stable Isotope Ratio Mass Spectrometer](#IRMS)   

## <a name="d13CU"> d13C Uncertainty </a> Type: Uncertainty  
  name: d13C Uncertainty  
  hasUnits: per mil  
  hasValue: 0.1  
  description: The uncertainty was assessed by multiple measurements on foraminiferal samples and expressed as the standard error on the mean.

## <a name="d18O_mund"> d18Oc.mund </a> Type: MeasuredVariable, Observation  
  name: *Cibicidoides mundulus* stable oxygen isotopes  
  hasUnits: per mil  
  hasValues: [-999.9 2.45 -999.9 .... -999.9 2.73 -999.9]  
  hasMissingValues: -999.9  
  hasUncertainty: [d18O Uncertainty](#d18O_U)  
  measuredOn: [Marine Sediment Core](#archive)  
  measuredBy: [Stable Isotope Ratio Mass Spectrometer](#IRMS)  
  method: Approximately 5-20 specimes of the epifaunal benthic foraminifer *Cibicidoides mundulus* were picked from the >180-micrometer fraction under a binocular miscroscope. The foraminifera were then cleaned following a protocol adapted from Barker et al. [2003].  
  interpretedAs: [d18O interpretation-1](#d18O_interp_1)  
  interpretedAs: [d18O interpretation-2](#d18O_interp_2)

## <a name="d13C_mund"> d13Cc.mund </a> Type: MeasuredVariable, Observation  
  name: *cibicidoides mundulus* stable carbon isotopes  
  hasUnits: per mil  
  hasValues: [-999.9 -0.3 -999.9 .... -999.9 -0.29 -999.9]  
  hasMissingValues: -999.9  
  hasUncertainty: [d13C Uncertainty](#d13C_U)  
  measuredOn: [Marine Sediment Core](#archive)  
  measuredBy: [Stable Isotope Ratio Mass Spectrometer](#IRMS)  
  method: Approximately 5-20 specimes of the epifaunal benthic foraminifer *Cibicidoides mundulus* were picked from the >180-micrometer fraction under a binocular miscroscope. The foraminifera were then cleaned following a protocol adapted from Barker et al. [2003].   

## <a name="DataTable1"> MD98-2181 Derived Data - Planktonic</a> Type: PaleoDataTable, ChronDataTable    
  description: Sea surface temperature and d18Osw interpreted from paired measurements of Mg/Ca and 18Oc measured on the planktonic foraminifer *Globigerinoides ruber* interpreted versus age at each depth horizon in the core. Replicate analyses are averaged and outliers removed.      
  format: Text File  
  name: khider2014-sst.txt  
  includesVariable: [depth_sst](#depth_sst)      
  includesVariable: [Mg/Ca-g.rub-w](#MgCa_norep)    
  includesVariable: [d18Og.rub-w](#d18O_rub_norep)    
  includesVariable: [age_calyrBP](#age_calBP)    
  includesVariable: [SST](#SST)  
  includesVariable: [d18Osw](#d18Osw)  

## <a name="depth_sst"> Depth for surface variables </a> Type: MeasuredVariable  
  name: depth
  hasUnits: cm  
  hasValue: [1 2.5 3.... 839 843 846]  

## <a name="MgCa_norep"> Mg/Ca-g.rub-w </a> Type: MeasuredVariable, Observation  
  name: *Globigerinoides ruber* white Mg/Ca - No Duplicates  
  hasUnits: mmol/mol  
  hasValue: [5.21 5.04 -999.99 ... 5.77 5.45 5.42]    
  hasMissingValues: -999.99  
  hasUncertainty: [Mg/Ca Uncertainty](#MgCa_U)  
  measuredBy: [ICP-AES](#MgCa_instrument)  
  measuredOn: [Marine Sediment Core](#archive)  
  method: Duplicates from this study and Stott et al. (2007, 2004) were averaged. Outliers were removed. Outliers were identified as data points more than nine standard deviations away from the mean.  
  interpretedAs: [Mg/Ca Interpretation](#MgCa_interp)  

## <a name="d18O_rub_norep"> d18Og.rub-w </a> MeasuredVariable, Observation  
  name: *Globigerinoides ruber* white stable oxygen isotopes - No Duplicates  
  hasUnits: per mil  
  hasValue: [-999.99 -2.83 -2.81 ... -2.62 -2.64 -2.53]    
  hasMissingValues: -999.99  
  hasUncertainty: [d18O Uncertainty](#d18O_U)  
  measuredOn: [Marine Sediment Core](#archive)  
  measuredBy: [Stable Isotope Ratio Mass Spectrometer](#IRMS)  
  standard: VPDB  
  method: Duplicates from this study and Stott et al. (2007, 2004) were averaged. Outliers were removed. Outliers were identified as data points more than nine standard deviations away from the mean.  
  interpretedAs: [d18O interpretation-1](#d18O_interp_1)  
    interpretedAs: [d18O interpretation-2](#d18O_interp_2)

## <a name="age_calyrBP"> Calendar Age B.P. </a> Type: InferredVariable  
  name: Calendar Age B.P.    
  hasUnits: years B.P.  
  hasValue: [199 205 207 ... 9793 9888 9960]    
  hasUncertainty: [age uncertainty](#age_U)  
  inferredFrom: [14C age](#radiocarbon)  
  calibratedWith: [Age model](#agemodel)  

## <a name="age_U"> Age Uncertainty </a> Type: Uncertainty
  name: Age Uncertainty    
  hasUnits: years   
  hasValue: [-63 96 237 428  
             -53 104 242 429  
             -50 107 244 430  
             ... ... ... ...  
             9634 9747 9844 9960  
             9726 9839 9942 10059  
             9794 9909 10015 10134]  
  description: Each column in the matrix represents the 2.5%, 34%, 68% and 97.5% uncertainty quantile respectively.    
  modeledBy: [Age model](#agemodel)

## <a name="agemodel"> Age model </a> Type: CalibrationModel
  calibrationReferences:[Khider.2014.Paleceanography](#pub1)  

## <a name="SST"> Sea Surface Temperature </a> Type: Inferred Variable
  name: Sea surface Temperature  
  hasUnits: degree Celcius  
  hasValue: [27.8 27.41 -999.9 ... 28.95 28.3 28.24]  
  hasMissingValues: -999.9    
  hasUncertainty: [sst uncertainty](#sst_U)  
  inferredFrom: [Mg/Ca-g.rub-w](#MgCa_norep)  
  calibratedWith: [SST Calibration](#SST_calibration)  
  interpretedAs: [SST_interpretation](#sst_interp)  

## <a name="sst_U"> Sea surface temperature uncertainty </a> Type: Uncertainty
  name: Sea Surface Temperature Uncertainty      
  hasUnits: degree celcius     
  hasValue: [26.88 27.63 28.04 28.74    
           26.47 27.23 27.65 28.35  
           -999.9 -999.9 -999.9 -999.9  
           ... ... ... ...  
           28.08 28.77 29.17 29.88    
           27.42 28.14 28.53 29.19    
           27.33 28.06 28.47 29.16]  
  hasMissingValues: -999.9  
  description: Each column in the matrix represents the 2.5%, 34%, 68% and 97.5% uncertainty quantile respectively.  
  modeledBy: [SST calibration](#SST_calibration)   

## <a name="SST_calibration"> SST calibration </a> Type: CalibrationModel, SensorModel      
  name: kisakurek2008  
  calibrationReferences: [Kisakurek.2008.EPSL](#kisakurek)  
  calibrationReferences: [Khider.2014.Paleoceanography](#pub1)   

## <a name="kisakurek"> Kisakurek.2008.EPSL </a> Type: Publication  
  publicationYear: 2008  
  hasLink: http://www.sciencedirect.com/science/article/pii/S0012821X08004007    
  title: Controls on shell Mg/Ca and Sr/Ca in cultured planktonic foraminiferan, *Globigerinoides ruber* (white)    
  creator: Kisakurek, B.   
  creator: Eisenhauer, A.   
  creator: Bohm, F.  
  creator: Garbe-Schonberg, D.  
  creator: Erez, J.  
  name: Earth and Planetary Science Letters    
  volume: 273  
  issue: 3-4    
  pages: 260-269  

## <a name="sst_interp"> SST_interpretation </a> Type: ClimateInterpretation  
  name: Temperature    
  interpretationDirection: positive  

## <a name="d18Osw"> Surface Water d18O </a> Type: Inferred Variable
  name: Surface Water d18O  
  hasUnits: per mil    
  hasValue: [-999.99 0.02 -999.99 ... 0.3 0.13 0.22]    
  hasMissingValues: -999.99      
  hasUncertainty: [d18Osw uncertainty](#d18Osw_U)  
  inferredFrom: [Mg/Ca-g.rub-w](#MgCa_norep)  
  inferredFrom: [d18Og.rub-w](#d18O_rub_norep)  
  calibratedWith: [d18Osw calibration](#d18Osw_calibration)  
  interpretedAs: [Seawater d18O](#d18Osw_interp)  

## <a name="d18Osw_U"> d18Osw uncertainty </a> Type: Uncertainty
  name: Surface Water d18O Uncertainty        
  hasUnits: per mil       
  hasValue: [-999.9 -999.9 -999.9 -999.9      
             -0.32 -0.05 0.1 0.35    
             -999.9 -999.9 -999.9 -999.9    
             ... ... ... ...  
             -0.04 0.23 0.38 0.63      
             -0.2 0.07 0.22 0.47      
             -0.1 0.15 0.31 0.56]  
  hasMissingValues: -999.9             
  description: Each column in the matrix represents the 2.5%, 34%, 68% and 97.5% uncertainty quantile respectively.  
  modeledBy: [d18Osw calibration](#d18Osw_calibration)  

## <a name="d18Osw_calibration"> Surface Water d18O Calibration </a> Type: CalibrationModel, SensorModel    
  name: Bemis1998  
  calibrationReferences: [Bemis.1998.Paleoceanography](#bemis)  
  calibrationReferences: [Khider.2014.Paleoceanography](#pub1)  

## <a name="bemis"> Bemis.1998.Paleoceanography </a> Type: Publication  
  publicationYear: 1998    
  hasLink: http://onlinelibrary.wiley.com/doi/10.1029/98PA00070/abstract     
  title: Reevaluation of the oxygen isotopic composition of planktonic foraminifera: Experimental results and revised paleotemperature equation.      
  creator: Bemis, B. E.     
  creator: Spero, J.     
  creator: Bijma, J.    
  creator: Lea, D.     
  name: Paleoceanography      
  volume: 13  
  issue: 2      
  pages: 150-160  

## <a name="d18Osw_interp">  Seawater d18O </a> Type: ClimateInterpretation
  name: Surface Water d18O     
  interpretationDirection: positive  

## <a name="DataTable2"> MD98-2181 Derived Data - Benthic</a> Type: PaleoDataTable, ChronDataTable    
  description: Benthic d18O interpreted versus age at each depth horizon in the core. Replicate analyses are averaged and outliers removed.      
  format: Text File  
  name: khider2014-benth.txt  
  includesVariable: [depth_benthic](#depth_benthic)      
  includesVariable: [age_calyrBP](#age_calBP_benthic)    
  includesVariable: [d18Oc.mund](#d18O_mund_norep)

## <a name="depth_benthic"> Depth for deep ocean variables </a> Type: MeasuredVariable  
  name: depth  
  hasUnits: cm  
  hasValue: [4 7 9.... 841 845 849]  

## <a name="age_calyrBP_benthic"> Calendar Age B.P. </a> Type: InferredVariable  
  name: Calendar Age B.P.    
  hasUnits: years B.P.  
  hasValue: [1212 1225 1233 ... 10840 10935 11031]      
  hasUncertainty: [Transit Time Uncertainty](#age_U_benthic)  
  inferredFrom: [age_calyrBP](#age_calBP)  
  calibratedWith: [Age Model Benthic](#agemodel_benthic)    

## <a name="age_U_benthic"> Transit Time Uncertainty </a> Type: Uncertainty
  name: Benthic Age Model Uncertainty accounting for transit time between the Southern Ocean and the Western Tropical Pacific     
  hasUnits: years   
  hasValue: [451	881	1108	1453    
            492	904	1124	1462   
            519	920	1135	1468    
            ... ... ... ...  
            10357	10758	10984	11378    
            10429	10847	11081	11490    
            10502	10936	11180	11608]  
  description: Each column in the matrix represents the 2.5%, 34%, 68% and 97.5% uncertainty quantile respectively. To obtain an independent age model for the MD81 benthic data that accounts for the transit time between the Southern Oceana and our site in the Western Tropical Pacific, we adjusted each time point in the calendar age distributions using a normal distribution characterized by a mean of 1000 years and a standard deviation of 300 years.  
  modeledBy: [Age Model Benthic](#agemodel_benthic)   

## <a name="agemodel_benthic"> Age Model Benthic </a> Type: CalibrationModel  
  calibrationReferences:[Khider.2014.Paleceanography](#pub1)  

## <a name="d18O_mund_norep"> d18Oc.mund </a> Type: MeasuredVariable, Observation  
  name: *Cibicidoides mundulus* stable oxygen isotopes  
  hasUnits: per mil  
  hasValues: [2.75 2.67 2.64.... 2.52 2.91 2.73]  
  hasUncertainty: [d18O Uncertainty](#d18O_U)  
  measuredOn: [Marine Sediment Core](#archive)  
  measuredBy: [Stable Isotope Ratio Mass Spectrometer](#IRMS)  
  method: Approximately 5-20 specimes of the epifaunal benthic foraminifer *Cibicidoides mundulus* were picked from the >180-micrometer fraction under a binocular microscope. The foraminifera were then cleaned following a protocol adapted from Barker et al. [2003].  
  interpretedAs: [d18O interpretation-1](#d18O_interp_1)  
  interpretedAs: [d18O interpretation-2](#d18O_interp_2)   

## <a name="MgCaProxy"> *Globigerinoides ruber* Mg/Ca</a> Type: ClimateProxy  
  name: *Globigerinoides ruber* Mg/Ca    
  archivedIn: [Marine Sediment Core](#archive)  
  sensingWith: [*Globigerinoides ruber*](#sensor2)  
  observedAs: [MgCa](#MgCa)  
  modeledBy: [MgCa Proxy Model](#MgCa_Proxy_Model)

## <a name="sensor2"> *Globigerinoides ruber*</a>  Type: OrganicSensor  
  name: *Globigerinoides ruber*  
  seasonality: mean annual to warm season

## <a name="MgCa_Proxy_Model"> MgCa Proxy Model </a> Type: ProxySystemModel
  name: MgCa Proxy Model for the planktonic foraminifera *G. ruber*  
  hasPart: [Mg/Ca sensor Model](#SST_calibration)  

## <a name="d18OProxy_Planktonic"> *Globigerinoides ruber* d18O</a> Type: ClimateProxy  
  name: *Globigerinoides ruber* d18O    
  archivedIn: [Marine Sediment Core](#archive)  
  sensingWith: [*Globigerinoides ruber*](#sensor2)  
  observedAs: [d18O](#d18O_rub)  
  modeledBy: [d18O Proxy Model - *G. ruber*](#d18O_Proxy_Model)  

## <a name="d18O_Proxy_Model"> d18O Proxy Model for *G. ruber*</a> Type: ProxySystemModel
  name: d18O Proxy Model for the planktonic foraminifera *G. ruber*
  hasPart: [d18O Sensor Model - *G. ruber*](#d18Osw_calibration)

## <a name="d18OProxy_Benthic"> *Cibicidoides mundulus* d18O</a> Type: ClimateProxy  
  name: *Cibicidoides mundulus* d18O    
  archivedIn: [Marine Sediment Core](#archive)  
  sensingWith: [*Cibicidoides mundulus*](#sensor3)  
  observedAs: [d18O](#d18O_mund)  

## <a name="sensor2"> *Cibicidoides mundulus*</a>  Type: OrganicSensor  
  name: *Cibicidoides mundulus*   
  seasonality: mean annual
