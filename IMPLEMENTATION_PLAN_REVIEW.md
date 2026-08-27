# Review of `IMPLEMENTATION_PLAN.md`

วันที่ตรวจ: 27 สิงหาคม 2026  
คำตัดสิน: **Changes required — ยังไม่ควรเริ่ม implement ตามแผนฉบับนี้**

## Blockers (ต้องแก้ในแผนก่อน)

### P0 — Agency scope ยังตั้งอยู่บนข้อมูลที่ไม่ได้ยืนยัน

- แผนบรรทัด 10 และ 55 เรียก 6 แห่ง รวม `higher` ว่าเปิดรับจริงและมีข้อมูลยืนยันปี 2026 แต่ fact-check รอบสองระบุว่ายังไม่พบแหล่งปฐมภูมิปี 2026 สำหรับ Higher
- IEE บรรทัด 27 ระบุ Phayathai Plaza ชั้น 10 แต่เว็บไซต์ IEE ระบุชั้น 14A
- การคง agency scores/tiers หรือเปลี่ยนเพียงคำเคลมไม่พอ ต้องเปลี่ยนโมดูลเป็น factual directory และเอา score, ranking, capacity, service quality, English difficulty และ alumni rating ที่ไม่มี dataset ออก
- Sponsor partner ต้องยืนยันจาก current-year contract/fee disclosure/job page ของแต่ละ agency ไม่ใช่ brochure เก่าหรือคำกล่าวทั่วไป
- ราคาต้องระบุปี, package, inclusions, exclusions, promotion status และ effective date; ห้ามใช้ range เดียวแทนทุก package

**แผนที่ควรเปลี่ยน:** เริ่มด้วย verified agencies เท่านั้น ส่วน Higher ใช้สถานะ `unverified/hidden` จนกว่าจะมี official 2026 source

### P0 — แผนไม่ครอบคลุมการแก้ภาษี

รายงานรอบสองพบ tax data ผิด/ไม่ครบหลายรัฐ แต่ Proposed Changes ไม่มี phase แก้ state income tax เลย ต้องเพิ่ม canonical 2026 tax dataset และแก้ CA, CT, DE, GA, HI, ID, KY, MD, MT, NE, NJ, NM, NY, OK, SC, UT, WV, WI รวมถึง local-tax caveats

ต้องแยก `rates`, `brackets`, `local_tax_note`, `effective_date`, `source_url` และห้ามใช้ top marginal rate เป็น effective rate

### P0 — Calculator fix คลุมเครือเกินไป

คำว่า “ปรับปรุงการคำนวณและป้ายกำกับ” ไม่ได้ปิด defect หลัก ต้องระบุว่าจะ:

- เอา fixed federal 10% ออก หรือเปลี่ยนเป็น user-entered estimate
- หยุดคูณ gross income ด้วย state rate ตัวเดียว
- ไม่บวก FICA exemption เป็นรายรับ
- รองรับ multiple employers/tips/local tax หรือประกาศชัดว่าไม่รองรับ
- ใช้ job-offer inputs แทน market defaults
- แสดง assumptions และช่วงความไม่แน่นอน

หากยังไม่สร้าง tax engine ที่ตรวจสอบได้ ให้ลด Calculator เป็น scenario estimator ที่ผู้ใช้กรอก tax withholding เอง

### P0 — Knowledge Hub ยังแก้ไม่ครบ

แผนครอบคลุมเพียง 911, OT, cannabis, grace period และ SSN บางส่วน แต่ต้องเพิ่มงานแก้:

- “arrival check-in ภายใน 72 ชั่วโมง” ไม่ใช่ federal universal deadline
- monthly contact เป็นหน้าที่ sponsor; portal/check-in method ขึ้นกับ sponsor
- address change 10 วัน: ตัดคำว่า termination ทันที
- W-4: อ้าง IRS Notice 1392/current-year instructions ไม่ใช้สูตรตายตัว
- W-2 deadline และ 1040-NR caveats
- alcohol/open-container laws แตกต่างตามรัฐ/เมือง
- insurance/urgent care/ER/ambulance prices ไม่มีค่าตายตัว
- Canada/Mexico/Puerto Rico travel ต้องอธิบาย visa, endorsement และ re-entry nuances
- bicycle rules แตกต่างตาม jurisdiction
- airline baggage policy ห้าม hard-code หากไม่มี verified date

### P1 — Market wage/housing แค่ติดป้ายยังไม่พอ

`market_wage_estimate` และ `avg_housing_cost` ไม่มี source/sample การติดคำว่า estimate ไม่ทำให้ข้อมูลน่าเชื่อถือ ต้องเพิ่ม `source_url`, `employer_or_city`, `observed_date`, `sample_size`, `confidence` หรือเอาตัวเลขออก หากใช้ employer profile ต้องบอกว่าเป็นตัวอย่าง ไม่ใช่ค่าเฉลี่ยรัฐ

### P1 — Editorial scores ยังเสี่ยงทำให้เข้าใจผิด

แผนจะติดป้าย Editorial Score แต่ไม่กำหนด provenance ของ input score ควรเลือกอย่างใดอย่างหนึ่ง:

1. เอาคะแนนตัวเลข/อันดับออกและใช้ qualitative notes; หรือ
2. สร้าง rubric ที่ reproducible พร้อม raw sources, normalized inputs, weighting, confidence และ version

ห้ามเรียก `alumni_rating` หากไม่มี survey dataset; ใช้ `editorial_assessment` แทน

## Scope/order ที่ควรแก้

Timeline Checklist และ Emergency Card เป็น feature ใหม่ ควรย้ายไป phase หลัง factual remediation เพราะทั้งสองเพิ่ม claims ใหม่และอาจสร้างความเสี่ยง โดยเฉพาะเบอร์ฉุกเฉิน/เขตกงสุลที่เปลี่ยนได้

ลำดับแนะนำ:

1. Freeze schema/content และสร้าง backup/diff baseline
2. สร้าง canonical sources + verification manifest
3. แก้ P0 legal/medical/agency/tax/minimum-wage claims
4. ลดหรือถอด unverified estimates/scores
5. แก้ calculator
6. ทำให้ guide และ UI generate จาก source เดียว
7. เพิ่ม feature ใหม่พร้อม source/date
8. Regression + visual QA

## Verification plan ที่ต้องเพิ่ม

- ใช้ Node/JS parse `data.js`; Python อย่างเดียวไม่ใช่การยืนยัน JavaScript runtime
- Assert 50 unique state codes, no duplicate IDs/keys, required fields, valid numeric ranges
- เทียบ wage/tax records กับ canonical fixture ที่มี source/effective date
- ตรวจทุก URL/phone/address และเก็บ `verified_at`
- Assert ไม่มี forbidden absolute phrases เช่น `100%`, `อันดับ 1`, `ไม่มีความเสี่ยง`, `เสมอ` ใน claims ที่ไม่มี source
- Unit tests สำหรับ calculator ด้วย known scenarios และ edge cases
- Test agency removal ไม่ทำให้ filter/chart/modal พัง
- Test print layout ของ SOS Card และตรวจเบอร์กับ official consular sitesก่อน release
- Cross-file consistency: `data.js`, `index.html`, guide ต้องไม่เก็บสำเนา facts แยกกัน
- Browser console must have zero errors; test desktop/mobile and offline opening via `file://`
- ทำ before/after claim inventory และ changelog ราย claim

## Acceptance criteria ที่ควรใส่

- ทุก statutory field มี source URL, effective date และ verified date
- ไม่มี agency record ที่ไม่มี official current-year evidence
- ไม่มี agency score/tier/capacity/reputation claim ที่ไม่มี dataset
- ทุก 50 state wage recordตรง DOL ณ release date
- tax displayตรง canonical 2026 table และ calculatorไม่ใช้ marginal rate เป็น effective rate
- Knowledge Hub ไม่มีข้อความ blanket ที่ขัดกับ DOS/IRS/SSA/DOL
- Calculator ระบุ assumptions และไม่ถูกนำเสนอเป็น tax advice
- ทุกหน้าทำงานโดยไม่มี JS errors และเนื้อหาสอดคล้องกัน

## สรุปการอนุมัติ

แผนมีทิศทางที่ดีเรื่อง 911, OT, cannabis, grace period และการถอด Click/Travex แต่ต้องแก้ P0 ข้างต้นก่อน โดยเฉพาะ Higher, ชั้นของ IEE, ภาษีทั้งชุด, calculator และ Knowledge Hub ที่ตกหล่น หลังแก้แผนแล้วจึงเหมาะจะเริ่ม implementation
