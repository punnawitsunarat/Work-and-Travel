# WAT 50-State Dataset — Verification Handoff for Gemini

ตรวจเมื่อ: 27 สิงหาคม 2026  
โฟลเดอร์ต้นฉบับ: `C:\Users\ASUS\Desktop\WAT`  
สถานะ: **ตรวจสอบอย่างเดียว ยังไม่ได้แก้ไขไฟล์ต้นฉบับใด ๆ**

## เป้าหมายของเอกสารนี้

ใช้เป็น handoff ให้ Gemini ตรวจสอบและปรับปรุงฐานข้อมูล Work and Travel USA ทั้ง 50 รัฐต่อ โดยต้องแยกข้อมูลออกเป็น 3 ประเภท:

1. ข้อเท็จจริงที่ตรวจสอบได้ เช่น ค่าแรงขั้นต่ำ ภาษี และกฎ J-1
2. ค่าประมาณที่เปลี่ยนตามเมือง นายจ้าง และฤดูกาล เช่น ค่าเช่า ค่าแรงตลาด ชั่วโมงงาน และโอกาสได้ OT
3. ความเห็นหรือคะแนนเชิงประสบการณ์ เช่น Safety grade, Alumni rating และคำแนะนำว่ารัฐใดดีที่สุด

ห้ามถือข้อมูลประเภท 2–3 เป็นข้อเท็จจริง หากไม่มีแหล่งอ้างอิง วันที่ และวิธีเก็บข้อมูล

## ไฟล์ที่ตรวจพบ

- `data.js` — ข้อมูล 50 รัฐและคะแนนรายด้าน
- `app.js` — การแสดงผล Quiz และเครื่องคำนวณเงินเก็บ/ภาษี
- `index.html` — หน้าเว็บและข้อความอธิบาย J-1/FICA
- `wat_usa_50_states_complete_guide.md` — คู่มือสรุป 50 รัฐ
- `README.md`, `style.css`

## ข้อสรุปเบื้องต้น

- มีข้อมูลครบ 50 รัฐ
- เมืองท่องเที่ยวและลักษณะงานโดยรวมส่วนใหญ่ไปในทิศทางที่สมเหตุสมผล
- ค่าแรงขั้นต่ำหลายรัฐเป็นข้อมูลเก่าประมาณปี 2024–2025
- อัตราภาษีหลายรัฐล้าสมัยหรือระบุเป็นช่วงที่อาจไม่เหมาะกับรายได้ของผู้ร่วมโครงการ
- ไม่มีหลักฐานรองรับว่า `alumni_quote` เป็นคำพูดจากผู้เข้าร่วมจริง
- คะแนน A–D ไม่มีสูตร น้ำหนัก แหล่งข้อมูล หรือขนาดตัวอย่างที่ตรวจสอบย้อนกลับได้
- เครื่องคำนวณภาษีใน `app.js` เป็นเพียงแบบจำลองหยาบ ไม่ใช่ tax calculator ที่แม่นยำ

## ค่าแรงขั้นต่ำที่ต้องแก้หรือตรวจใหม่

อ้างอิงตาราง U.S. Department of Labor มีผลวันที่ 1 กรกฎาคม 2026:

| รัฐ | ค่าใน `data.js` | ค่าอ้างอิงทั่วไปของ DOL | สถานะ |
|---|---:|---:|---|
| Alaska | $11.73 | $14.00 | ผิด/ล้าสมัย |
| Arizona | $14.35–14.70 | $15.15 | ผิด/ล้าสมัย |
| Connecticut | สูงสุด $16.35 | $16.94 | ผิด/ล้าสมัย |
| Hawaii | $14.00 | $16.00 | ผิด/ล้าสมัย |
| Maine | สูงสุด $14.65 | $15.10 | ผิด/ล้าสมัย |
| Michigan | สูงสุด $12.00 | $13.73 | ผิด/ล้าสมัย |
| Minnesota | $10.85 | $11.41 | ผิด/ล้าสมัย |
| Missouri | สูงสุด $13.75 | $15.00 | ผิด/ล้าสมัย |
| Nebraska | สูงสุด $14.00 | $15.00 | ผิด/ล้าสมัย |
| New Jersey | สูงสุด $15.49 | $15.92 ทั่วไป / $15.23 บางงาน | ไม่ครบ/ล้าสมัย |
| New York | สูงสุด $16.00 | $17.00 ใน NYC, Nassau, Suffolk, Westchester / $16.00 พื้นที่อื่น | ไม่ครบ |
| Ohio | สูงสุด $10.70 | $11.00 หรือ $7.25 ตามขนาดนายจ้าง | ผิด/ล้าสมัย |
| Oregon | $14.20–15.95 | $16.80 Portland / $15.55 standard / $14.55 nonurban | ไม่ครบ/ล้าสมัย |
| Rhode Island | สูงสุด $15.00 | $16.00 | ผิด/ล้าสมัย |
| South Dakota | สูงสุด $11.50 | $11.85 | ผิด/ล้าสมัย |
| Virginia | สูงสุด $12.41 | $12.77 | ผิด/ล้าสมัย |
| Vermont | สูงสุด $14.01 | $14.42 | ผิด/ล้าสมัย |
| Washington | สูงสุด $16.66 | $17.13 | ผิด/ล้าสมัย |

รัฐที่มีตัวเลขเป็นช่วงและครอบคลุมอัตราปัจจุบัน เช่น California, Colorado, Delaware และ Florida ยังควรเปลี่ยนให้ระบุอัตรา วันที่มีผล พื้นที่ และข้อยกเว้นอย่างชัดเจน ไม่ควรรวม “ค่าแรงขั้นต่ำ” กับ “ตลาดจ่ายจริง” ในฟิลด์เดียวกัน

แหล่งหลัก: https://www.dol.gov/agencies/whd/mw-consolidated

## ภาษีที่พบว่าต้องตรวจใหม่อย่างน้อย

- Louisiana: ในไฟล์ยังเป็น 1.85%–4.25%; ปัจจุบันเปลี่ยนเป็น flat 3% และ state sales tax เป็น 5% ตั้งแต่ปี 2025
- Indiana: ในไฟล์ 3.05%; ปี 2026 เป็น 2.95% และอาจมี county income tax เพิ่ม
- North Carolina: ในไฟล์ 4.5%; ปี 2026 เป็น 3.99%
- Ohio: ในไฟล์ 2.75%–3.5%; ปี 2026 เปลี่ยนเป็น 2.75% ตามเกณฑ์ และอาจมี municipal/school income tax
- Georgia, Kentucky, Mississippi, Nebraska, Oklahoma, Montana และ Utah มีการเปลี่ยนอัตราหรือ legislation ใหม่ในปี 2026 ต้องตรวจจาก revenue department ของแต่ละรัฐ
- รายชื่อรัฐไม่มี general statewide sales tax ถูกทิศทาง: Alaska, Delaware, Montana, New Hampshire, Oregon; แต่ Alaska อนุญาตให้ท้องถิ่นเก็บได้

แหล่งเปรียบเทียบ:

- https://taxfoundation.org/data/all/state/state-income-tax-rates-2026/
- https://taxfoundation.org/data/all/state/2026-sales-tax-rates-midyear/

ข้อควรระวัง: marginal rate ไม่เท่ากับ effective tax rate และไม่ควรนำ top rate ไปคูณรายได้ทั้งหมดในเครื่องคำนวณ

## กฎ J-1 และ FICA

ข้อความที่ว่า J-1 ได้ยกเว้น Social Security 6.2% และ Medicare 1.45% ถูกเฉพาะเมื่อผู้เข้าร่วม:

- เป็น nonresident alien เพื่อวัตถุประสงค์ทางภาษี
- ทำงานที่ได้รับอนุญาต
- งานสอดคล้องกับวัตถุประสงค์ที่ได้รับสถานะ J-1

จึงไม่ควรใช้คำว่า “FICA Exemption 100%” โดยไม่แสดงเงื่อนไข ผู้ที่กลายเป็น resident alien ทางภาษีหรือทำงานนอกเหนือการอนุญาตอาจไม่เข้าเงื่อนไข

แหล่ง IRS:

- https://www.irs.gov/individuals/taxation-of-alien-individuals-by-immigration-status-j-1
- https://www.irs.gov/individuals/international-taxpayers/foreign-student-liability-for-social-security-and-medicare-taxes

## งานที่สอง/งานเพิ่มเติม

คำแนะนำลักษณะ “ไปถึงแล้วหางาน 2–3 ทันที” ต้องแก้ให้ชัดว่า SWT participant ต้องแจ้ง sponsor และรอ sponsor ตรวจสอบ/อนุมัติงานเพิ่มเติมก่อนเริ่มทำงาน

แหล่ง U.S. Department of State:

- https://fam.state.gov/fam/09FAM/09FAM040205.html
- https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/wilberforce-english.html
- https://j1visa.state.gov/programs/summer-work-travel/

## ปัญหาเครื่องคำนวณใน `app.js`

ตรวจพบบริเวณฟังก์ชันคำนวณ:

- `federalTaxRate = 0.10` แล้วนำไปคูณ gross income ทั้งหมด
- ใช้ `state.tax_rate_num` ตัวเดียวคูณรายได้ทั้งหมด
- ไม่รองรับ bracket, filing status, nonresident-alien withholding rule, treaty, deduction, tip income หรือ local tax อย่างเหมาะสม
- แสดง FICA 7.65% เป็นเงิน “ประหยัดได้” ทั้งที่เป็นภาษีที่ไม่ควรถูกหักเมื่อเข้าเงื่อนไข ไม่ใช่รายรับเพิ่มเติม
- ผลลัพธ์ `netUSD` จึงเป็น scenario estimate เท่านั้น

ควรเปลี่ยนชื่อเป็น “ประมาณการเบื้องต้น” พร้อม disclaimer และแสดงช่วงผลลัพธ์ หรือออกแบบโมเดลใหม่โดยแยก federal withholding, estimated final tax, state/local tax และ FICA eligibility

## คะแนนและรีวิวเชิงประสบการณ์

### ส่วนที่ไปในทิศทางสมเหตุสมผล

- เมืองชายหาดและเมืองรีสอร์ตมีความต้องการแรงงานตามฤดูกาล
- เมืองอุทยานมักมี employer housing แต่เดินทางออกนอกพื้นที่ยาก
- Massachusetts, Hawaii และ California มีความเสี่ยงเรื่องค่าที่พักสูง
- Wisconsin Dells, Ocean City, Myrtle Beach, Pigeon Forge และเมือง gateway ของอุทยานเป็นตลาดท่องเที่ยวที่เข้ากับงาน SWT

### ส่วนที่ไม่ควรนำเสนอเป็นข้อเท็จจริง

- “ปลอดภัย 100%”, “ไร้อาชญากรรม”
- “งานหาง่ายที่สุดในโลก/อเมริกา”
- “อันดับ 1 ในใจเด็กไทยตลอดกาล”
- “OT กระจาย”, “ทำงาน 60–80 ชั่วโมงได้แน่นอน”
- “เงินเก็บ 200,000–350,000+ บาท” ในฐานะผลลัพธ์ทั่วไป
- “รีวิวเด็กไทยจริง” หากไม่มีชื่อย่อ วันที่ ช่องทางยินยอม จำนวนผู้ตอบ หรือ raw survey data

Safety ควรวัดระดับเมือง/ย่านและช่วงเวลา ไม่ควรให้คะแนนจากค่าเฉลี่ยระดับรัฐเพียงอย่างเดียว ที่พัก การเดินทาง งานที่สอง และรายได้ขึ้นกับ employer, housing address, sponsor, dates และ job offer มากกว่าชื่อรัฐ

## งานที่ Gemini ควรทำต่อ

1. ตรวจทุก record ใน `data.js` กับ DOL และ revenue department ของรัฐนั้น โดยบันทึก `source_url`, `effective_date`, `verified_at`
2. แยกฟิลด์ `statutory_min_wage`, `local_min_wage`, `tipped_cash_wage`, `market_wage_estimate`
3. แยก state income tax, local income tax และ sales tax; ห้ามนำ top marginal rateไปใช้เป็น effective rate โดยตรง
4. เพิ่มเงื่อนไข FICA และ sponsor approval สำหรับ additional job ในหน้าเว็บและคู่มือ
5. ตรวจว่าข้อความใน `data.js`, `index.html` และคู่มือ Markdown สอดคล้องกัน
6. เปลี่ยน absolute claims เป็นภาษาความน่าจะเป็น พร้อมแหล่งข้อมูลและวันที่
7. หากไม่มี survey จริง ให้เปลี่ยน `alumni_quote` เป็น `editorial_summary` และ `alumni_rating` เป็น `editorial_score`
8. ถ้าจะคงคะแนนไว้ ต้องประกาศสูตร น้ำหนัก ข้อมูลต้นทาง และระดับความเชื่อมั่น
9. ตรวจค่าที่พักและการเดินทางในระดับเมือง/นายจ้าง ไม่ใช่เหมารวมทั้งรัฐ
10. สร้าง changelog แยกรายการแก้ทั้งหมดก่อนแก้ไฟล์จริง

## ข้อจำกัดของการตรวจรอบนี้

การตรวจนี้เป็น first-pass audit เน้นข้อผิดพลาดที่เห็นชัดจากข้อมูลทางการระดับประเทศ ยังไม่ได้ยืนยันค่าเช่า นายจ้าง เส้นทางรถบัส อัตราทิป ชั่วโมงงาน และสถิติอาชญากรรมของทุกเมืองแบบรายจุด การตรวจต่อควรใช้แหล่งปฐมภูมิ เช่น state labor/revenue department, employer job offer, local transit agency, sponsor และ FBI/local police data พร้อมระบุปีทุกครั้ง
