# WAT — Second Full Fact Check (50 States, Agencies, J-1 Knowledge)

วันที่ตรวจ: 27 สิงหาคม 2026  
ไฟล์ที่ตรวจ: `data.js`, `app.js`, `index.html`, `wat_usa_50_states_complete_guide.md`, `README.md`  
สถานะ: ตรวจสอบเท่านั้น ไม่ได้แก้ไฟล์ต้นฉบับ

## คำตัดสินโดยรวม

ชุดข้อมูลเวอร์ชันปัจจุบันยังไม่พร้อมเผยแพร่เป็น “ข้อมูลล่าสุดและตรวจสอบแล้ว” แม้ค่าแรงขั้นต่ำส่วนใหญ่ได้รับการอัปเดตดีขึ้น แต่ข้อมูลเอเจนซี่มีข้อผิดพลาด/ข้อมูลไม่มีหลักฐานจำนวนมาก Knowledge Hub มีคำกล่าวทางกฎหมายแบบเหมารวม และคะแนนรัฐ/รายได้/ค่าเช่ายังไม่มีแหล่งข้อมูลระดับ record

ระดับความเสี่ยง:

- ข้อมูล 50 รัฐเชิงกฎหมาย: **ปานกลาง** — ค่าแรงส่วนใหญ่ถูก แต่ภาษีหลายรัฐผิด
- ค่าเช่า/ค่าแรงตลาด/ทิป/OT: **สูง** — ไม่มีแหล่งและไม่ระบุ employer/date/sample
- คะแนนรัฐ A–D: **สูง** — เป็น editorial judgment แต่แสดงคล้ายข้อมูลสถิติ
- เอเจนซี่ไทย: **วิกฤต** — พบที่อยู่ เบอร์โทร ราคา partner และอันดับที่ไม่ตรงหรือยืนยันไม่ได้
- Knowledge Hub: **สูง** — มีคำแนะนำกฎหมาย/สุขภาพบางข้อผิดหรืออันตราย

## A. ตรวจทั้ง 50 รัฐ

### A1. ค่าแรงขั้นต่ำ

เทียบ U.S. Department of Labor ตารางมีผล 1 กรกฎาคม 2026 ค่าแรงส่วนใหญ่แก้ถูกแล้ว แต่ยังพบอย่างน้อย:

| รัฐ | ในระบบ | ควรเป็น/ข้อสังเกต | ผล |
|---|---|---|---|
| California | $16.00 standard | DOL: $16.90 | ผิด |
| Colorado | $14.81 | DOL: $15.16 | ผิด |
| Montana | $10.55–$12.00 | DOL standard: $10.85; ไม่ควรใส่ช่วงโดยไม่อธิบายข้อยกเว้น | ไม่ถูกโครงสร้าง |
| New Mexico | $12.00–$12.50 | DOL statewide: $12.00; $12.50 เป็น local/เงื่อนไขอื่น ไม่ใช่ statewide range | ทำให้เข้าใจผิด |

ค่าแรงท้องถิ่น เช่น Denver, Minneapolis, California local ordinances เปลี่ยนตามเมืองและวันที่ ต้องมี source แยก ไม่ควรฝังรวมกับ statewide rate โดยไม่มี effective date

แหล่ง: https://www.dol.gov/agencies/whd/mw-consolidated

### A2. ภาษีเงินได้รัฐ

ตารางในระบบมักแสดงเฉพาะช่วงที่คาดว่าจะเกี่ยวกับแรงงานรายได้ต่ำ แต่ label ระบุเหมือนเป็นช่วงภาษีทั้งหมด จึงผิดเชิงข้อเท็จจริง ตัวอย่างที่ต้องแก้:

- California: ระบบ 1.0%–9.3%; โครงสร้างเต็มขึ้นถึง 13.3%
- Connecticut: ระบบ 3.0%–5.5%; ปี 2026 เริ่ม 2.0% และสูงสุด 6.99%
- Delaware: ระบบ 2.2%–5.5%; สูงสุด 6.6%
- Georgia: ระบบ 5.39%; ข้อมูลปี 2026 ที่เผยแพร่ระบุการลดอัตรา ต้องตรวจ revenue department/กฎหมายล่าสุด (แหล่งรองรับ 4.99%)
- Hawaii: ระบบ 1.4%–8.25%; สูงสุด 11%
- Idaho: ระบบ 5.695%; แหล่งปี 2026 ระบุอัตรา flat ที่ลดลง ต้องตรวจฉบับกฎหมายล่าสุด (โดยทั่วไปอ้าง 5.3%)
- Kentucky: ระบบ 4.0%; แหล่งปี 2026 ระบุ 3.5%
- Maryland: ระบบสูงสุด 5.75%; ตารางปี 2026 มี bracket สูงถึง 6.5% และมี local income tax
- Montana: ระบบสูงสุด 5.9%; ตาราง 2026 สูงสุด 5.65%
- Nebraska: ระบบสูงสุด 5.2%; ตาราง 2026 สูงสุด 4.55%
- New Jersey: ระบบสูงสุด 6.37%; โครงสร้างเต็มสูงสุด 10.75%
- New Mexico: ระบบเริ่ม 1.7%; ตาราง 2026 เริ่ม 1.5%
- New York: ระบบ 4.0%–6.85%; ตาราง 2026 เริ่ม 3.9% และสูงสุดมากกว่า 6.85% (พร้อม NYC/local tax ในบางพื้นที่)
- Oklahoma: ระบบสูงสุด 4.75%; การเปลี่ยนปี 2026 ต้องใช้ 4.5% ตามกฎหมายล่าสุด
- South Carolina: ระบบสูงสุด 6.2%; แหล่งปี 2026 ระบุ top rate 6.0%
- Utah: ระบบ 4.55%; กฎหมายมีนาคม 2026 ลดเป็น 4.45% ย้อนหลังถึง 1 มกราคม 2026
- West Virginia: ระบบ 2.36%–5.12%; ตาราง 2026 ระบุ 2.22%–4.82%
- Wisconsin: ระบบเริ่ม 3.54%; ตาราง 2026 เริ่ม 3.50%

ข้อสำคัญ: ผู้เข้าร่วม WAT ไม่ควรถูกประเมินภาษีด้วย top marginal rate คูณ gross income ทั้งก้อน ต้องใช้ taxable income, filing status, NRA rules, bracket และ local tax

แหล่ง: https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/

### A3. Sales tax

การระบุ 5 รัฐไม่มี general statewide sales tax (AK, DE, MT, NH, OR) ถูกทิศทาง แต่ Alaska มี local sales tax ได้ ส่วน combined local ranges ของทุกรัฐในระบบไม่มี source ต่อ record และเปลี่ยนตามเมือง จึงควรระบุเป็น estimate พร้อม source/date ไม่ใช่ค่าประจำรัฐ

แหล่ง: https://taxfoundation.org/data/all/state/2026-sales-tax-rates-midyear/

### A4. ค่าเช่า ค่าแรงตลาด ทิป ชั่วโมงงาน

ฟิลด์เหล่านี้ไม่มี source, employer, city, job title, date, sample size หรือช่วงฤดูกาล จึง **ยืนยันไม่ได้ทั้ง 50 รัฐ**:

- `market_wage_estimate`
- `avg_housing_cost`
- ข้อความ “พร้อมอาหาร 3 มื้อ”
- “รวมทิปเฉลี่ย”
- การคาดการณ์ OT และงานที่ 2

ห้ามใช้ค่าเหล่านี้ในเครื่องคำนวณเป็น default ที่ดูเหมือนข้อเท็จจริง ควรใช้เฉพาะข้อมูลใน current job offer/employer profile

### A5. คะแนนรัฐและความปลอดภัย

สูตรน้ำหนักอาจถูกเขียนไว้ แต่ input score ไม่มี dataset ต้นทาง จึงเป็น editorial score ไม่ใช่ statistical ranking คำเช่น “100%”, “อันดับ 1”, “ปลอดภัย”, “จักรยานได้ทั้งเมือง” ต้องลบหรือ qualify ระดับเมือง/เส้นทาง คะแนนระดับรัฐไม่สามารถแทน safety ของที่พักและเส้นทางกะดึกได้

## B. ตรวจเอเจนซี่ 8 แห่ง

### คำตัดสิน

ควรถอดโมดูลจัดอันดับออกจากการเผยแพร่ชั่วคราวจนกว่าจะยืนยันแต่ละ record กับเว็บไซต์/สัญญาปีปัจจุบัน เพราะไม่มีหลักฐานสำหรับคะแนน 85–96, tier, annual participants, response speed, visa coaching quality, alumni satisfaction หรือ financial stability

### ข้อผิดพลาดที่ยืนยันได้

#### OEG

- ระบบ: ค่าโครงการ 74,000–84,000 บาท
- เอกสาร OEG 2026: ค่าสมัคร 4,900 + จองงาน 20,000 + งวด 1 35,000 + งวด 2 52,000 = 111,900 บาท ก่อน Visa $185 และ SEVIS $35 (ก่อนส่วนลด)
- ระบบ: C.P. Tower สีลม ชั้น 11
- เว็บไซต์ OEG: 130–132 Sindhorn Tower 1 ชั้น 7 ถนนวิทยุ
- เบอร์ 02-263-3666 และ LINE `@oegworkandtravel` ตรวจพบจากเว็บไซต์; LINE ในระบบเขียนรูปแบบอื่น
- CIEE และ Spirit สำหรับปี 2026 มีหลักฐานจากเอกสาร OEG
- “2,000–2,500+ คน/ปี”, “งานเยอะที่สุด”, “CIEE เบอร์ 1”, คะแนน 96 และข้อความมั่นคงสูงสุด ไม่มีหลักฐาน

แหล่ง:

- https://oeg.co.th/oegfile/OEGWorkAndTravel2026Fee.pdf
- https://www.oeg.co.th/contact-us

#### Acadex

- ระบบระบุ Exchange Tower อโศก และโทร 02-129-3558
- เว็บไซต์ทางการระบุชั้น 12A อาคารสภาคริสตจักรแห่งประเทศไทย 328 ถนนพญาไท และโทร 086-390-0333
- Sponsor บางรายอาจปรากฏใน brochure/job ปีต่างกัน แต่ยังไม่มีหลักฐานว่าทั้ง Intrax, CCUSA, CHI, IENA เป็น partner พร้อมกันในปีเดียวกัน
- ราคา 69,000–79,000, จำนวน 1,500–2,200 คน/ปี และคะแนน 95 ไม่มีหลักฐาน

แหล่ง: https://www.acadexthailand.com/program/work-and-travel-spring/

#### IEE Thailand

- เบอร์ 02-612-9511 และ Phayathai Plaza ถูกทิศทาง
- Sponsor 3 ราย, จำนวน 600–1,000 คน/ปี, ราคา, ความเชี่ยวชาญ “เบอร์ 1 อุทยาน” และคะแนน 93 ยังไม่มีหลักฐานปีปัจจุบัน

แหล่ง: https://www.ieethailand.com/

#### New Step

- ระบบระบุ Fortune Tower, 02-246-8889, LINE `@NewStepAgency`
- เว็บไซต์ทางการระบุสำนักงานใหญ่ SiamScape ห้อง 1910; เบอร์ 063-535-9463 / 062-146-2354 และ LINE `@newstepworktravel` รวมทั้งจุดประสานงานอื่น
- ราคา 67,000–77,000 ไม่สอดคล้องกับโครงสร้างโปรโมชั่น/งวดที่เผยแพร่และไม่สามารถใช้เป็น flat range
- Intrax/CHI/AWA, จำนวน 500–900 คน/ปี และคะแนน 90 ยังยืนยันไม่ได้จากแหล่งปฐมภูมิที่พบ

แหล่ง:

- https://newstepthailand.com/contact-us
- https://newstepthailand.com/promotions

#### American Learning (ALC)

- ระบบระบุ 02-642-4466 และอาคารรัชมังคลา
- เว็บไซต์ทางการระบุ 02-619-0044, 086-320-1990 และ 408/161 Phaholyothin Place ชั้น 39
- CHI/InterExchange/Spirit, ราคา, 150–350 คน/ปี และคะแนน 87 ยังยืนยันไม่ได้

แหล่ง: https://myalcapp.com/

#### Click Education

- ระบบระบุ CentralWorld, 02-168-7555 และ partner GeoVisions/IENA
- เว็บไซต์ทางการระบุ 398/7 ซอยเกษมศรี เขตพระนคร; 02-126-0230 และมือถือหลายหมายเลข
- เว็บไซต์และ TIECA profile ที่พบเน้น study abroad และไม่ได้ยืนยันว่าเปิด Work & Travel หรือมี partner ดังกล่าวในปี 2026
- จึงไม่ควรอยู่ใน ranking WAT จนกว่าจะมีหน้าหรือสัญญาโครงการปัจจุบัน

แหล่ง:

- https://clickeducation.net/contact/
- https://tieca.org/en/member/click-education-consultant-co-ltd-2/

#### Higher Education

เว็บไซต์/ข้อมูลปฐมภูมิปี 2026 ที่ยืนยัน record ปัจจุบันไม่พบจากการค้นรอบนี้ ข้อมูล partner, ราคา, สำนักงาน, จำนวนคน และคะแนนทั้งหมดต้องถือว่า unverified

#### West Coast / Travex Education

ไม่พบหลักฐานปฐมภูมิว่า entity ชื่อนี้เป็นเอเจนซี่ WAT ไทยตาม record ระบบ เว็บไซต์ `travex.co.th`/เบอร์/ที่ตั้งที่ใส่ไว้ไม่สามารถยืนยัน ความเป็นไปได้สูงว่าเป็นการรวมชื่อหรือสร้าง record ผิด ต้องถอดออกจนกว่าจะมีเลขนิติบุคคล เว็บไซต์ และหลักฐานโครงการจริง

### ปัญหาวิธีจัดอันดับเอเจนซี่

- ไม่มี raw reviews หรือจำนวนผู้ตอบ
- ไม่มีหลักฐาน response time, refund handling, complaint rate, visa outcome
- ไม่มีวิธีตรวจความมั่นคงทางการเงิน
- “ได้รับการยอมรับจากสถานทูต”, “ถูกกฎหมาย 100%”, “ไม่มีความเสี่ยงถูกทอดทิ้ง” เป็นคำรับรองที่ไม่ควรเขียน
- ควรเปลี่ยนจาก ranking เป็น directory เชิงข้อเท็จจริง: legal name, registration, current program page, sponsor named in current contract, current fee disclosure, refund policy, contact, verified date

## C. ตรวจ Knowledge Hub

| Claim | ผลตรวจ | หมายเหตุ |
|---|---|---|
| ต้อง arrival check-in ภายใน 72 ชม. | ไม่ใช่กฎรัฐบาลกลางแบบ universal | ต้องแจ้ง sponsor เมื่อมาถึง แต่ deadline มักเป็น sponsor-specific |
| Participant ต้อง check-in ทุก 30 วัน | เขียนคลาดเคลื่อน | กฎกำหนดให้ sponsor maintain monthly contact; วิธี portal/check-in ขึ้นกับ sponsor |
| เปลี่ยนที่อยู่ต้องแจ้งภายใน 10 วัน | แก่นถูก | “ผิดแล้วถูกยกเลิกวีซ่าทันที” เป็นผลลัพธ์ที่เหมารวมเกินจริง |
| Grace period 30 วันหลังโครงการและห้ามทำงาน | ถูกโดยหลัก | ใช้เพื่อเตรียมเดินทางออก/ท่องเที่ยวในประเทศ; re-entry หลังออกนอกสหรัฐฯ ไม่รับประกัน |
| งานที่สองต้อง sponsor อนุมัติก่อน | ถูก | ควรใช้คำว่า sponsor vet/confirm; ไม่จำเป็นต้องกล่าวว่า “บันทึกงานใน SEVIS” ทุกกรณีโดยไม่มี source |
| FICA exemption 7.65% | ถูกแบบมีเงื่อนไข | ต้องเป็น NRA และ authorized employment ที่สอดคล้องกับ J-1 purpose |
| W-4: Single, no dependent, เขียน NRA | ไม่ครบ/อาจล้าสมัย | ต้องทำตาม IRS Notice 1392 และ W-4 instructions ปีนั้น ไม่ควรให้สูตรสั้นแบบตายตัว |
| W-2 ได้ภายในเดือนมกราคม | ควรแก้ | นายจ้างโดยทั่วไปต้อง furnish ภายใน 31 มกราคม; การมาถึงจริงอาจช้ากว่า |
| ผู้ต่ำกว่า 21 ห้ามซื้อ/ถือ/ดื่มทั้งหมด | เหมารวม | อายุซื้อขั้นต่ำ 21 เป็นหลัก แต่ possession/consumption exceptions ต่างตามรัฐ |
| Open container ห้ามทุกที่ทั่วประเทศ | ผิดแบบเหมารวม | กฎหมายต่างตามรัฐ เมือง พื้นที่ licensed event และยานพาหนะ |
| กัญชาทำให้ถูกแบนตลอดชีวิตอัตโนมัติ | ผิด | Federal immigration consequences มีจริง แต่ไม่ใช่ทุกกรณีถูก lifetime ban อัตโนมัติ |
| ประกันไม่จ่ายหากพบกัญชา | ยืนยันไม่ได้ | ขึ้นกับ policy/exclusion และข้อเท็จจริง ห้ามรับรองแบบ blanket |
| รอ 3–5 วันหลัง SEVIS validation ก่อนทำ SSN | ไม่ใช่ SSA rule ที่แม่นยำ | หาก SEVIS เพิ่ง update และ verify ไม่ได้ SSA ระบุรอ 48 ชม.; เอกสารและสถานะต้องพร้อม |
| SSN receipt ทำให้เริ่มงาน/รับเงินได้ทันที | แก่นเรื่องทำงานโดยไม่มีเลข SSN ถูก | Work authorization มาจากสถานะ/เอกสาร ไม่ได้มาจาก receipt และ receipt ไม่แทน SSN card ทุกบริบท |
| Urgent Care copay $50–100, ER $1,000–5,000, ambulance $1,500–3,000 | ยืนยันไม่ได้ | ขึ้นกับ insurance/network/location; ห้ามใช้เป็นตัวเลขรับรอง |
| “ห้ามเรียกรถพยาบาลหากไม่จำเป็นอย่างยิ่ง” | อันตราย | ควรบอกให้โทร 911 เมื่อสงสัยเหตุฉุกเฉิน ไม่ควรชะลอเพราะกลัวค่าใช้จ่าย |
| นายจ้างยกเลิกวีซ่าเองไม่ได้ | แก่นถูก | นายจ้างเลิกจ้างและรายงาน sponsor ได้; sponsor จัดการ SEVIS และสถานะโครงการ |
| เข้าก่อน program start ได้ไม่เกิน 30 วัน | ถูกโดยหลัก | การเข้าประเทศยังขึ้นกับ CBP และเอกสาร |
| Hawaii/Puerto Rico ไปได้ตลอด | เขียนกว้างเกิน | เป็น domestic travel แต่ต้องพกเอกสาร และ status/flight routing อาจมีข้อพิจารณา |
| Canada/Mexico แค่มี travel signature | ไม่ครบ | ต้องพิจารณาวีซ่าเข้า Canada/Mexico, J-1 visa validity, DS-2019 endorsement, re-entry และ automatic visa revalidation |
| เกิน 40 ชม. ต้อง OT 1.5x เสมอ | ผิด | มี FLSA exemptions รวม seasonal amusement/recreational establishments และ state law อาจต่าง |
| กฎหมายจักรยานไฟขาว/แดงเหมือนกันทุกแห่ง | เหมารวม | กฎหมายไฟ/reflector/helmet/sidewalk ต่างตามรัฐและเมือง |
| Southwest โหลดฟรี 2 ใบ | ต้องตรวจนโยบายปัจจุบัน | นโยบายสายการบินเปลี่ยนได้ ไม่ควร hard-code |

แหล่งหลัก:

- SWT rules: https://j1visa.state.gov/programs/summer-work-travel/
- J-1 tax/FICA: https://www.irs.gov/individuals/taxation-of-alien-individuals-by-immigration-status-j-1
- SSA documents: https://www.ssa.gov/ssnumber/ss5doc.htm
- SSA SEVIS procedure: https://secure.ssa.gov/poms.nsf/lnx/0110211395
- FLSA seasonal exemption: https://www.dol.gov/agencies/whd/fact-sheets/18-flsa-seasonal-amusement
- J-1 additional job vetting: https://fam.state.gov/fam/09FAM/09FAM040205.html

## D. เครื่องคำนวณ

ต้องตรวจ/แก้ก่อนใช้วางแผนเงินจริง:

- federal tax แบบ fixed rate ไม่ใช่ final tax ที่แท้จริง
- state `tax_rate_num` เป็นการเลือก rate เดียว ไม่ใช่ bracket/effective tax
- local tax ไม่ครบ
- tip, overtime eligibility, multiple employers และ NRA withholding ไม่ครบ
- FICA “saving” ไม่ใช่รายรับเพิ่ม
- agency fee, exchange rate, rent และ living cost เป็น estimate ไม่มี source/date

ควรติดป้าย “scenario estimator — not tax advice” และให้ผู้ใช้กรอกข้อมูลจาก job offer แทน default ที่ดูเป็นข้อเท็จจริง

## E. ลำดับแก้ไขที่แนะนำ

1. ซ่อน/ถอด Agency ranking ทันทีจนกว่าจะยืนยันข้อมูลทั้งหมด
2. แก้ Knowledge Hub ที่เกี่ยวกับ OT, ambulance, cannabis, SSN, travel และ sponsor reporting
3. แก้ค่าแรง CA/CO/MT/NM และ tax ranges ที่ผิด
4. เปลี่ยน market wage/housing/tips เป็น unverified estimates พร้อม source/date หรือเอาออก
5. เปลี่ยน `alumni_rating` และ quotes ที่ไม่มีหลักฐานเป็น `editorial_score/summary`
6. เพิ่ม `source_url`, `source_title`, `effective_date`, `verified_at`, `geography`, `confidence` ทุก factual field
7. ทำ regression check ให้ `data.js`, `index.html`, `app.js` และ Markdown ใช้ข้อมูลเดียวกัน

## ขอบเขตและข้อจำกัด

รอบนี้ตรวจข้อมูลกฎหมาย/ค่าแรง/ภาษีและ identity/contact ของเอเจนซี่จากแหล่งที่หาได้ ณ วันที่ตรวจ ยังไม่ถือว่าค่าเช่าหรือ employer offer ใดถูกจนกว่าจะมี current job offer/profile โดยตรง และไม่สามารถรับรองคะแนนความนิยม/บริการโดยไม่มี survey dataset ที่ตรวจย้อนกลับได้
