const STATES_DATA = [
  {
    "id": "wisconsin",
    "name": "Wisconsin",
    "code": "WI",
    "nickname": "Badger State / America's Dairyland",
    "tier": "Tier S",
    "overall_grade": "A+",
    "overall_score": 99,
    "region": "Midwest",
    "vibe": "Waterpark Capital of the World & Ultimate J-1 Community",
    "statutory_min_wage": "$7.25/ชม. (Federal Minimum Wage)",
    "market_wage_estimate": "ฐาน $13.50 - $17.50 / รวมทิปเฉลี่ย ~$17.50 - $26.00+/ชม.",
    "min_wage": "กม. $7.25 | ฐาน $13.5-$17.5 (รวมทิป ~$17.5-$26+)",
    "min_wage_num": 15.0,
    "state_income_tax": "3.54% - 7.65% (ตามขั้นบันได)",
    "tax_rate_num": 0.0354,
    "state_sales_tax": "5.0% (+ภาษีเคาน์ตี 0.5% รวม 5.5% อัตราต่ำ)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$85 - $125 / สัปดาห์",
    "housing_cost_num": 105,
    "housing_type": "หอพักพนักงานรีสอร์ต / แชร์บ้าน J-1 / โมเทล",
    "commute_type": "ปั่นจักรยาน 100% (เลนจักรยานทั้งเมือง) / เดินเท้า / แท็กซี่ J-1",
    "grades": {
      "safety": {
        "grade": "A+",
        "score": 99,
        "note": "Wisconsin Dells และ Lake Geneva มีความปลอดภัยสูงมาก เมืองออกแบบเพื่อรองรับ J-1 โดยเฉพาะ"
      },
      "scenery_friendliness": {
        "grade": "A+",
        "score": 98,
        "note": "สวนน้ำยักษ์ระดับโลก แม่น้ำ Wisconsin River หน้าผาหินทราย ชุมชนต้อนรับเด็กไทยอบอุ่น"
      },
      "tourism_crowds": {
        "grade": "A+",
        "score": 100,
        "note": "เมืองหลวงสวนน้ำของโลก (Waterpark Capital of the World) ดึงดูดนักท่องเที่ยว 5 ล้านคน/ปี"
      },
      "earning_job2_tax": {
        "grade": "A+",
        "score": 100,
        "note": "อุปสงค์งานบริการสูงที่สุด สวนน้ำ/ร้านอาหารเพียบ ค่าครองชีพสบาย ภาษีซื้อรวมต่ำ 5.5% คุ้มค่าที่สุด"
      },
      "housing_value": {
        "grade": "A+",
        "score": 96,
        "note": "หอพักนายจ้าง (Kalahari / Mt. Olympus / Chula Vista / Wilderness) และบ้านเช่า J-1 มีพร้อม"
      },
      "commute_convenience": {
        "grade": "A+",
        "score": 99,
        "note": "เมืองจักรยาน J-1 ปั่นไปทำงานสะดวก 100% เลนจักรยานครอบคลุม แบนราบ ปลอดภัย"
      },
      "alumni_rating": {
        "grade": "A+",
        "score": 100,
        "note": "จุดหมายยอดนิยมอันดับ 1 ของเด็กไทย อุปสงค์งานบริการสูง ปั่นจักรยานสะดวก ชุมชนอบอุ่น"
      }
    },
    "hotspots": [
      "Wisconsin Dells (Noah's Ark, Kalahari, Mt. Olympus, Wilderness)",
      "Lake Geneva",
      "Door County",
      "Green Bay"
    ],
    "pros": [
      "จุดหมายยอดนิยมอันดับ 1 ของโครงการ Work and Travel ในหมู่นักศึกษาไทย",
      "อุปสงค์แรงงานภาคบริการและร้านอาหารสูงมากตลอดถนน Broadway และ Wisconsin Dells Pkwy",
      "เมืองออกแบบเพื่อการปั่นจักรยาน 100% ปั่นไปทำงานสะดวก แบนราบ ปลอดภัย",
      "มีสวนน้ำระดับโลก Noah's Ark, Kalahari, Mt. Olympus ให้เข้าฟรีหรือราคาพิเศษ",
      "มีเครือข่ายคอมมูนิตี้และองค์กรดูแลนักศึกษาอย่างอบอุ่น",
      "ภาษีซื้อระดับรัฐรวมท้องถิ่นต่ำเพียง 5.5%"
    ],
    "cons": [
      "มีผู้เข้าร่วมโครงการสัญชาติไทยจำนวนมาก (ต้องขวนขวายฝึกภาษาอังกฤษกับเพื่อนต่างชาติ)",
      "ต้องดูแลล็อคจักรยานให้เรียบร้อยในจุดพลุกพล่าน"
    ],
    "editorial_summary": "Wisconsin Dells เป็นเมืองหลวงสวนน้ำของโลกและเป็นศูนย์กลางโครงการ J-1 ที่มีความพร้อมสูงสุด ทั้งโครงสร้างพื้นฐานเลนจักรยาน หอพักนายจ้าง สวนน้ำระดับโลก และอุปสงค์แรงงานบริการที่หนาแน่นที่สุด",
    "alumni_quote": "Wisconsin Dells เป็นเมืองหลวงสวนน้ำของโลกและเป็นศูนย์กลางโครงการ J-1 ที่มีความพร้อมสูงสุด ทั้งโครงสร้างพื้นฐานเลนจักรยาน หอพักนายจ้าง สวนน้ำระดับโลก และอุปสงค์แรงงานบริการที่หนาแน่นที่สุด",
    "best_for": "ทุกคน! จุดหมายยอดนิยมอันดับ 1 ของเด็กไทย อุปสงค์งานบริการหนาแน่น ปั่นจักรยานสะดวก 100% ชุมชนอบอุ่น ปลอดภัย",
    "source_info": {
      "dol_wage_2026": "$7.25",
      "tax_foundation_2026": "3.54-7.65% Income, 5.5% Sales",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A-",
        "note": "ช่วง มี.ค.-เม.ย. อากาศเริ่มอุ่นขึ้น สวนสนุกในร่ม/เมืองเปิดปกติ สวนน้ำกลางแจ้งและบอร์ดวอล์กเปิดเต็มที่ปลาย พ.ค. (Memorial Day)"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วง High Season สูงสุด นักท่องเที่ยวหลายล้านคน สวนน้ำและชายหาดเปิด 100% โอกาสทำ OT และงานเสริมหนาแน่นที่สุด"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) หรือ ปลาย Spring",
      "badge": "summer"
    },
    "exact_state_tax_pct": 3.54,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 3.54% (ฐานขั้นแรก $0-$14,320)"
  },
  {
    "id": "wyoming",
    "name": "Wyoming",
    "code": "WY",
    "nickname": "Equality State / Cowboy State",
    "tier": "Tier S",
    "overall_grade": "A+",
    "overall_score": 99,
    "region": "Mountain West",
    "vibe": "Grand Teton, Yellowstone & 0% Income Tax",
    "statutory_min_wage": "$7.25/ชม. (Federal Minimum Wage)",
    "market_wage_estimate": "ฐาน $14.50 - $19.00 / รวมทิปเฉลี่ย ~$18.50 - $27.50+/ชม.",
    "min_wage": "กม. $7.25 | ฐาน $14.5-$19 (รวมทิป ~$18.5-$27.5+)",
    "min_wage_num": 15.5,
    "state_income_tax": "0% (ไม่มีภาษีเงินได้ระดับรัฐ)",
    "tax_rate_num": 0.0,
    "state_sales_tax": "4.0% (+ภาษีท้องถิ่น รวม 5.0-6.0%)",
    "has_no_income_tax": true,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$60 - $95 / สัปดาห์ (พร้อมอาหาร 3 มื้อ)",
    "housing_cost_num": 75,
    "housing_type": "หอพักพนักงานอุทยาน (Xanterra / Delaware North / Grand Teton Lodge)",
    "commute_type": "เดินเท้า 100% / รถรับส่งพนักงานอุทยานฟรี",
    "grades": {
      "safety": {
        "grade": "A+",
        "score": 100,
        "note": "ความปลอดภัยสูงมาก อยู่ในพื้นที่อุทยานแห่งชาติระดับโลก"
      },
      "scenery_friendliness": {
        "grade": "A+",
        "score": 100,
        "note": "ยอดเขาหิมะ Grand Teton สะท้อนน้ำ ทะเลสาบ Jenny Lake บ่อน้ำพุร้อน Yellowstone ฝูงไบซันและสัตว์ป่า"
      },
      "tourism_crowds": {
        "grade": "A+",
        "score": 98,
        "note": "อุทยาน Yellowstone และ Grand Teton มีผู้มาเยือนกว่า 8 ล้านคนต่อปี"
      },
      "earning_job2_tax": {
        "grade": "A+",
        "score": 99,
        "note": "0% State Income Tax ภาษีซื้อต่ำ 4% หอพักรวมอาหาร 3 มื้อ (EDR) ราคาถูกที่สุด คุมค่าครองชีพได้ดีที่สุดในประเทศ"
      },
      "housing_value": {
        "grade": "A+",
        "score": 100,
        "note": "หอพักพนักงานอุทยานราคาประหยัด ($60-90/สัปดาห์) พร้อมโรงอาหารพนักงาน 3 มื้อ"
      },
      "commute_convenience": {
        "grade": "A+",
        "score": 98,
        "note": "เดินเท้าถึงที่ทำงาน 2-3 นาที หรือขึ้นรถบัสพนักงานฟรี ไม่เสียค่าเดินทาง"
      },
      "alumni_rating": {
        "grade": "A+",
        "score": 100,
        "note": "ประสบการณ์ธรรมชาติระดับโลก ภาษี 0% อาหารพร้อม 3 มื้อ ช่วยคุมค่าใช้จ่ายได้ดีที่สุด"
      }
    },
    "hotspots": [
      "Jackson / Jackson Hole",
      "Yellowstone National Park (Old Faithful, Canyon, Mammoth)",
      "Grand Teton National Park (Colter Bay, Jackson Lake)",
      "Cody"
    ],
    "pros": [
      "สิทธิประโยชน์ปลอดภาษีเงินได้ระดับรัฐ (0% State Income Tax)",
      "หอพักพนักงานราคาประหยัด พร้อมอาหาร 3 มื้อในโรงอาหารพนักงาน (EDR)",
      "ธรรมชาติและทัศนียภาพระดับโลก Grand Teton & Yellowstone",
      "ภาษีซื้อระดับรัฐ (Sales Tax) ต่ำเพียง 4.0%",
      "ความปลอดภัยสูง อากาศบริสุทธิ์ เย็นสบาย",
      "เดินเท้าไปทำงาน 2 นาที หรือขึ้นรถบัสพนักงานฟรี"
    ],
    "cons": [
      "อยู่ในพื้นที่อุทยาน ห่างไกลจากห้างสรรพสินค้าใหญ่ (มีรถบัสจัดพาไปซื้อของ)",
      "สัญญาณมือถือในบางจุดของอุทยานอาจมีจำกัด"
    ],
    "editorial_summary": "ไวโอมิงและอุทยานแห่งชาติ Grand Teton / Yellowstone มอบประสบการณ์ธรรมชาติระดับโลก ปลอดภาษีเงินได้ระดับรัฐ (0% Income Tax) มีหอพักพนักงานพร้อมอาหาร 3 มื้อ (EDR) ช่วยให้ผู้เข้าร่วมโครงการคุมค่าใช้จ่ายได้ดีที่สุดในบรรดาทุกรัฐ",
    "alumni_quote": "ไวโอมิงและอุทยานแห่งชาติ Grand Teton / Yellowstone มอบประสบการณ์ธรรมชาติระดับโลก ปลอดภาษีเงินได้ระดับรัฐ (0% Income Tax) มีหอพักพนักงานพร้อมอาหาร 3 มื้อ (EDR) ช่วยให้ผู้เข้าร่วมโครงการคุมค่าใช้จ่ายได้ดีที่สุดในบรรดาทุกรัฐ",
    "best_for": "ทุกคน! สายรักธรรมชาติระดับโลก ภูเขาหิมะ สัตว์ป่า สิทธิประโยชน์ 0% State Income Tax ที่พักรวมอาหาร 3 มื้อ คุมค่าใช้จ่ายได้ดีที่สุด",
    "source_info": {
      "dol_wage_2026": "$7.25",
      "tax_foundation_2026": "0% Income, 4% State Sales",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B",
        "note": "ช่วง มี.ค. - เม.ย. ยังมีหิมะและอากาศหนาวจัด อุทยาน/ลอดจ์บางแห่งเริ่มเปิดรับงานช่วง พ.ค. เหมาะสำหรับผู้ที่ไปปลายสปริง"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วงเวลาทอง (Golden Peak) ของรัฐนี้ อากาศเย็นสบาย (15-25°C) ธรรมชาติสวยที่สุด เรือสำราญและอุทยานเปิด 100%"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) แนะนำสูงสุด",
      "badge": "summer"
    },
    "exact_state_tax_pct": 0.0,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🎉 0% ปลอดภาษีเงินได้รัฐ (ประหยัดได้ 100%)"
  },
  {
    "id": "maine",
    "name": "Maine",
    "code": "ME",
    "nickname": "Pine Tree State",
    "tier": "Tier S",
    "overall_grade": "A+",
    "overall_score": 96,
    "region": "New England",
    "vibe": "Coastal National Park & Lobster Harbor",
    "statutory_min_wage": "$15.10/ชม. (Maine Statutory Minimum Wage 2026)",
    "market_wage_estimate": "ฐาน $15.50 - $18.00 / รวมทิปเฉลี่ย ~$19.50 - $26.50+/ชม.",
    "min_wage": "กม. $15.10 | ฐาน $15.5-$18 (รวมทิป ~$19.5-$26.5+)",
    "min_wage_num": 15.1,
    "state_income_tax": "5.8% - 7.15% (ตามขั้นบันได)",
    "tax_rate_num": 0.057999999999999996,
    "state_sales_tax": "5.5% (ภาษีซื้อระดับรัฐค่อนข้างต่ำ)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$85 - $135 / สัปดาห์",
    "housing_cost_num": 110,
    "housing_type": "หอพักพนักงานรีสอร์ต / เคบิน / แชร์บ้าน",
    "commute_type": "Island Explorer Bus ฟรี / ปั่นจักรยาน / เดินเท้า",
    "grades": {
      "safety": {
        "grade": "A+",
        "score": 99,
        "note": "รัฐที่มีสถิติอาชญากรรมต่ำที่สุดในสหรัฐฯ อย่างต่อเนื่อง"
      },
      "scenery_friendliness": {
        "grade": "A+",
        "score": 99,
        "note": "ป่าสนติดทะเล ประภาคารหิน คลื่นกระทบฝั่ง ล็อบสเตอร์สด อากาศเย็นสบาย"
      },
      "tourism_crowds": {
        "grade": "A",
        "score": 94,
        "note": "อุทยาน Acadia และ Bar Harbor มีผู้มาเยือนกว่า 4 ล้านคนต่อซัมเมอร์"
      },
      "earning_job2_tax": {
        "grade": "A+",
        "score": 96,
        "note": "ค่าแรงขั้นต่ำ $15.10+ ทิปซีฟู้ดสูงมาก ภาษีซื้อต่ำ 5.5% ค่าครองชีพในพื้นที่อุทยานคุ้มค่าด้วยหอพักนายจ้าง"
      },
      "housing_value": {
        "grade": "A-",
        "score": 88,
        "note": "นายจ้างส่วนใหญ่มีหอพักพนักงานราคาเหมาะสมรองรับ"
      },
      "commute_convenience": {
        "grade": "A+",
        "score": 98,
        "note": "มี Island Explorer Bus รถบัสพลังงานสะอาดบริการฟรีรอบเกาะและในอุทยาน"
      },
      "alumni_rating": {
        "grade": "A+",
        "score": 98,
        "note": "ความปลอดภัยสูงมาก รถบัสฟรี อากาศดี อาหารทะเลสดใหม่"
      }
    },
    "hotspots": [
      "Bar Harbor (Acadia National Park Gateway)",
      "Ogunquit",
      "Old Orchard Beach",
      "Camden",
      "Kennebunkport"
    ],
    "pros": [
      "สถิติความปลอดภัยติดอันดับ 1 ของประเทศอย่างต่อเนื่อง",
      "ค่าแรงขั้นต่ำปรับขึ้นเป็น $15.10/ชม. ในปี 2026",
      "มีรถบัส Island Explorer บริการฟรีรอบเกาะ Mount Desert Island และอุทยาน",
      "อากาศหน้าร้อนเย็นสบาย (18-26 °C) อาหารทะเลสดใหม่"
    ],
    "cons": [
      "น้ำทะเลเย็นตลอดทั้งปี",
      "ตำแหน่งงานเต็มค่อนข้างเร็ว"
    ],
    "editorial_summary": "เมนเป็นหนึ่งในรัฐที่ปลอดภัยที่สุดในอเมริกา มีอุทยานแห่งชาติ Acadia และเมืองตากอากาศ Bar Harbor ค่าแรงขั้นต่ำปี 2026 ปรับเป็น $15.10/ชม. มีรถบัสฟรี Island Explorer และอาหารทะเลคุณภาพสูง",
    "alumni_quote": "เมนเป็นหนึ่งในรัฐที่ปลอดภัยที่สุดในอเมริกา มีอุทยานแห่งชาติ Acadia และเมืองตากอากาศ Bar Harbor ค่าแรงขั้นต่ำปี 2026 ปรับเป็น $15.10/ชม. มีรถบัสฟรี Island Explorer และอาหารทะเลคุณภาพสูง",
    "best_for": "ทุกคน! สายรักธรรมชาติ ปลอดภัยสูง รถบัสฟรี อากาศเย็นสบาย และชอบอาหารทะเล",
    "source_info": {
      "dol_wage_2026": "$15.10",
      "tax_foundation_2026": "5.8-7.15% Income, 5.5% Sales",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B+",
        "note": "ช่วง มี.ค. - เม.ย. ยังมีหิมะและอากาศหนาวจัด อุทยาน/ลอดจ์บางแห่งเริ่มเปิดรับงานช่วง พ.ค. เหมาะสำหรับผู้ที่ไปปลายสปริง"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วงเวลาทอง (Golden Peak) ของรัฐนี้ อากาศเย็นสบาย (15-25°C) ธรรมชาติสวยที่สุด เรือสำราญและอุทยานเปิด 100%"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) แนะนำสูงสุด",
      "badge": "summer"
    },
    "exact_state_tax_pct": 5.8,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 5.80% (ฐานขั้นแรก $0-$26,050)"
  },
  {
    "id": "tennessee",
    "name": "Tennessee",
    "code": "TN",
    "nickname": "Volunteer State",
    "tier": "Tier S",
    "overall_grade": "A+",
    "overall_score": 96,
    "region": "South",
    "vibe": "Smoky Mountains, Dollywood & 0% Income Tax",
    "statutory_min_wage": "$7.25/ชม. (Federal Minimum Wage)",
    "market_wage_estimate": "ฐาน $14.00 - $18.50 / รวมทิปเฉลี่ย ~$18.00 - $27.00+/ชม.",
    "min_wage": "กม. $7.25 | ฐาน $14-$18.5 (รวมทิป ~$18-$27+)",
    "min_wage_num": 15.0,
    "state_income_tax": "0% (ไม่มีภาษีเงินได้ระดับรัฐ)",
    "tax_rate_num": 0.0,
    "state_sales_tax": "7.0% (+ภาษีท้องถิ่น รวม 9.25-9.75%)",
    "has_no_income_tax": true,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$90 - $130 / สัปดาห์",
    "housing_cost_num": 110,
    "housing_type": "แชร์เคบิน / โมเทล / หอพักพนักงาน",
    "commute_type": "Pigeon Forge Trolley ($1-2.50) / ปั่นจักรยาน / เดินเท้า",
    "grades": {
      "safety": {
        "grade": "A+",
        "score": 96,
        "note": "Pigeon Forge และ Gatlinburg มีความปลอดภัยสูง เมืองท่องเที่ยวครอบครัว"
      },
      "scenery_friendliness": {
        "grade": "A+",
        "score": 96,
        "note": "อุทยาน Great Smoky Mountains ป่าเขาเขียวขจี ลำธาร สวนสนุก Dollywood"
      },
      "tourism_crowds": {
        "grade": "A+",
        "score": 98,
        "note": "อุทยานแห่งชาติที่มีผู้มาเยือนมากที่สุดในสหรัฐฯ (14 ล้านคน/ปี)"
      },
      "earning_job2_tax": {
        "grade": "A+",
        "score": 99,
        "note": "0% State Income Tax ปลอดภาษีเงินได้ Dollywood และ The Parkway งานแน่น ค่าครองชีพไม่แพง"
      },
      "housing_value": {
        "grade": "A-",
        "score": 88,
        "note": "เคบินและโมเทลราคาดี มีคอมมูนิตี้ J-1 ขนาดใหญ่"
      },
      "commute_convenience": {
        "grade": "A",
        "score": 94,
        "note": "มีรถราง Trolley วิ่งรับส่งทั่วเมือง The Parkway ตั๋วราคาประหยัด ($1-2.50)"
      },
      "alumni_rating": {
        "grade": "A+",
        "score": 98,
        "note": "ปลอดภาษีเงินได้รัฐ รถราง Trolley ดีมาก สวนสนุก Dollywood อบอุ่น"
      }
    },
    "hotspots": [
      "Pigeon Forge (The Parkway / Dollywood)",
      "Gatlinburg (Smoky Mountains Gateway)",
      "Sevierville (Tanger Outlets)"
    ],
    "pros": [
      "สิทธิประโยชน์ปลอดภาษีเงินได้ระดับรัฐ (0% State Income Tax)",
      "Dollywood สวนสนุกระดับสากล ดูแลพนักงานดี มีอาหารและเครื่องเล่นฟรี",
      "มีรถราง Fun Time Trolley วิ่งรับส่งตลอดสาย The Parkway เดินทางสะดวก",
      "อุปสงค์งานบริการบนถนน The Parkway หนาแน่น",
      "อุทยาน Great Smoky Mountains เข้าชมฟรี"
    ],
    "cons": [
      "ภาษีซื้อรวมท้องถิ่นอยู่ที่ประมาณ 9.25-9.75%",
      "ถนน The Parkway การจราจรอาจหนาแน่นช่วงวันหยุด"
    ],
    "editorial_summary": "เทนเนสซีและเมือง Pigeon Forge โดดเด่นด้วยสวนสนุก Dollywood อุทยาน Great Smoky Mountains ปลอดภาษีเงินได้ระดับรัฐ (0% Income Tax) มีรถราง Fun Time Trolley เดินทางสะดวก และมีอุปสงค์แรงงานบริการสูง",
    "alumni_quote": "เทนเนสซีและเมือง Pigeon Forge โดดเด่นด้วยสวนสนุก Dollywood อุทยาน Great Smoky Mountains ปลอดภาษีเงินได้ระดับรัฐ (0% Income Tax) มีรถราง Fun Time Trolley เดินทางสะดวก และมีอุปสงค์แรงงานบริการสูง",
    "best_for": "ทุกคน! สายเน้นเก็บเงิน ภาษี 0% ชอบความคึกคัก มีรถราง Trolley เดินทางง่าย และชอบสวนสนุก Dollywood",
    "source_info": {
      "dol_wage_2026": "$7.25",
      "tax_foundation_2026": "0% Income, 7% State Sales",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A+",
        "note": "สภาพอากาศอบอุ่น มีนักท่องเที่ยว Spring Break ตั้งแต่ มี.ค. สวนสนุกและร้านอาหารเปิดบริการเต็มที่ตั้งแต่ต้นซีซัน"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "นักท่องเที่ยวซัมเมอร์หนาแน่นมาก อากาศร้อนชื้นหรือแดดแรงช่วง ก.ค.-ส.ค. ชั่วโมงงานและทิปสูง"
      },
      "best_season": "Spring & Summer (ดีเยี่ยมทั้ง 2 ช่วง)",
      "badge": "both"
    },
    "exact_state_tax_pct": 0.0,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🎉 0% ปลอดภาษีเงินได้รัฐ (ประหยัดได้ 100%)"
  },
  {
    "id": "utah",
    "name": "Utah",
    "code": "UT",
    "nickname": "Beehive State",
    "tier": "Tier S",
    "overall_grade": "A+",
    "overall_score": 96,
    "region": "Mountain West",
    "vibe": "The Mighty 5 National Parks & Red Rock Wonder",
    "statutory_min_wage": "$7.25/ชม. (Federal Minimum Wage)",
    "market_wage_estimate": "ฐาน $14.50 - $18.50 / รวมทิปเฉลี่ย ~$18.50 - $27.00+/ชม.",
    "min_wage": "กม. $7.25 | ฐาน $14.5-$18.5 (รวมทิป ~$18.5-$27+)",
    "min_wage_num": 15.0,
    "state_income_tax": "4.55% (Flat Rate อัปเดต 2026 ปรับลดจาก 4.65%)",
    "tax_rate_num": 0.0455,
    "state_sales_tax": "6.1% (+ภาษีท้องถิ่น รวม 7.0-8.5%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$75 - $115 / สัปดาห์",
    "housing_cost_num": 95,
    "housing_type": "หอพักพนักงานรีสอร์ต / เคบิน / แชร์บ้าน",
    "commute_type": "เดินเท้า / Zion Canyon Shuttle ฟรีตลอดสาย / ปั่นจักรยาน",
    "grades": {
      "safety": {
        "grade": "A+",
        "score": 99,
        "note": "รัฐที่มีความปลอดภัยสูงมาก ชุมชนสงบ มีระเบียบวินัย"
      },
      "scenery_friendliness": {
        "grade": "A+",
        "score": 100,
        "note": "หน้าผาหินสีส้มแดง Zion, ซุ้มหินธรรมชาติ Arches, Bryce Canyon สวยงามระดับโลก"
      },
      "tourism_crowds": {
        "grade": "A+",
        "score": 96,
        "note": "นักท่องเที่ยวจากทั่วโลกหลั่งไหลมาชมอุทยาน The Mighty 5 ตลอดซัมเมอร์"
      },
      "earning_job2_tax": {
        "grade": "A",
        "score": 92,
        "note": "ค่าแรงตลาด $14.5-18.5 ภาษีลดเหลือ 4.55% ทิปดี หอพักอุทยานราคาประหยัด ค่าครองชีพสมเหตุสมผล"
      },
      "housing_value": {
        "grade": "A",
        "score": 92,
        "note": "รีสอร์ตและโรงแรมใน Springdale / Moab มักมีหอพักพนักงานราคาประหยัด"
      },
      "commute_convenience": {
        "grade": "A+",
        "score": 98,
        "note": "มี Zion Canyon Shuttle รถบัสบริการฟรีตลอดเมือง Springdale และเข้าอุทยาน"
      },
      "alumni_rating": {
        "grade": "A+",
        "score": 98,
        "note": "ทิวทัศน์ Zion สวยงามตระการตา ปลอดภัย รถบัสฟรี ผู้คนสุภาพ"
      }
    },
    "hotspots": [
      "Springdale (Zion NP Gateway)",
      "Moab (Arches & Canyonlands)",
      "Park City",
      "Bryce Canyon City"
    ],
    "pros": [
      "ธรรมชาติหน้าผาหินส้มแดง (Red Rock) สวยงามระดับสากล",
      "เมือง Springdale มีระบบรถบัส Zion Canyon Shuttle บริการฟรีตลอดสาย สะดวกมาก",
      "ความปลอดภัยสูง ชุมชนเป็นมิตรและมีระเบียบ",
      "ภาษีเงินได้รัฐแบบคงที่ปรับลดเหลือ 4.55%"
    ],
    "cons": [
      "แดดกลางวันหน้าร้อนค่อนข้างแรง (ควรเตรียมครีมกันแดดและหมวก)",
      "กฎหมายเครื่องดื่มแอลกอฮอล์ค่อนข้างเคร่งครัด"
    ],
    "editorial_summary": "ยูทาห์โดดเด่นด้วยอุทยานแห่งชาติระดับโลกอย่าง Zion และ Arches เมืองหน้าด่าน Springdale มีรถบัส Shuttle ฟรีตลอดสาย ความปลอดภัยสูง ภาษีรัฐปรับลดเหลือ 4.55% Flat Rate เหมาะสำหรับผู้รักธรรมชาติและการถ่ายภาพ",
    "alumni_quote": "ยูทาห์โดดเด่นด้วยอุทยานแห่งชาติระดับโลกอย่าง Zion และ Arches เมืองหน้าด่าน Springdale มีรถบัส Shuttle ฟรีตลอดสาย ความปลอดภัยสูง ภาษีรัฐปรับลดเหลือ 4.55% Flat Rate เหมาะสำหรับผู้รักธรรมชาติและการถ่ายภาพ",
    "best_for": "ทุกคน! สายรักธรรมชาติระดับโลก ถ่ายรูปสวย ปลอดภัยสูง มีรถบัสฟรี และผู้คนสุภาพ",
    "source_info": {
      "dol_wage_2026": "$7.25",
      "tax_foundation_2026": "4.55% Flat",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A-",
        "note": "ช่วง มี.ค.-เม.ย. อากาศเริ่มอุ่นขึ้น สวนสนุกในร่ม/เมืองเปิดปกติ สวนน้ำกลางแจ้งและบอร์ดวอล์กเปิดเต็มที่ปลาย พ.ค. (Memorial Day)"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วง High Season สูงสุด นักท่องเที่ยวหลายล้านคน สวนน้ำและชายหาดเปิด 100% โอกาสทำ OT และงานเสริมหนาแน่นที่สุด"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) หรือ ปลาย Spring",
      "badge": "summer"
    },
    "exact_state_tax_pct": 4.55,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 4.55% (Flat Rate)"
  },
  {
    "id": "montana",
    "name": "Montana",
    "code": "MT",
    "nickname": "Treasure State / Big Sky Country",
    "tier": "Tier S",
    "overall_grade": "A+",
    "overall_score": 95,
    "region": "Mountain West",
    "vibe": "Glacier National Park & 0% Sales Tax",
    "statutory_min_wage": "$10.85/ชม. (Montana Statutory Standard Wage 2026)",
    "market_wage_estimate": "ฐาน $14.50 - $18.00 / รวมทิปเฉลี่ย ~$18.50 - $26.50+/ชม.",
    "min_wage": "กม. $10.55 | ฐาน $14.5-$18 (รวมทิป ~$18.5-$26.5+)",
    "min_wage_num": 10.85,
    "state_income_tax": "4.7% - 5.9% (ตามขั้นบันได)",
    "tax_rate_num": 0.047,
    "state_sales_tax": "0% (ไม่มีภาษีซื้อระดับรัฐ 0% Sales Tax)",
    "has_no_income_tax": false,
    "has_no_sales_tax": true,
    "has_clothing_tax_exemption": true,
    "avg_housing_cost": "$60 - $95 / สัปดาห์ (พร้อมอาหาร)",
    "housing_cost_num": 75,
    "housing_type": "หอพักพนักงานอุทยาน / ลอดจ์ไม้",
    "commute_type": "เดินเท้า 100% / รถรับส่งอุทยานฟรี",
    "grades": {
      "safety": {
        "grade": "A+",
        "score": 99,
        "note": "ความปลอดภัยสูงมาก อยู่ท่ามกลางธรรมชาติอุทยานแห่งชาติ"
      },
      "scenery_friendliness": {
        "grade": "A+",
        "score": 100,
        "note": "Glacier National Park สวยงามระดับแถวหน้าของโลก ทะเลสาบสีมรกต ยอดเขาสะท้อนน้ำ"
      },
      "tourism_crowds": {
        "grade": "A",
        "score": 92,
        "note": "นักท่องเที่ยวสายธรรมชาติหลั่งไหลมาเยือนตลอดซัมเมอร์"
      },
      "earning_job2_tax": {
        "grade": "A",
        "score": 92,
        "note": "0% Sales Tax ปลอดภาษีซื้อ + หอพักพนักงานรวมอาหาร 3 มื้อราคาถูก ช่วยคุมค่าครองชีพได้ดีที่สุด"
      },
      "housing_value": {
        "grade": "A+",
        "score": 98,
        "note": "หอพักพนักงานอุทยาน (Pursuit / Xanterra) ราคาประหยัดและมักรวมอาหาร 3 มื้อ"
      },
      "commute_convenience": {
        "grade": "A",
        "score": 90,
        "note": "เดินเท้าถึงที่ทำงาน 2-5 นาที หรือขึ้นรถบัสอุทยานฟรี"
      },
      "alumni_rating": {
        "grade": "A+",
        "score": 98,
        "note": "วิวสวยสะกดใจทุกวัน หอพักรวมอาหารช่วยเก็บเงิน 0% Sales Tax"
      }
    },
    "hotspots": [
      "Glacier National Park (West Glacier, St. Mary, Many Glacier)",
      "Big Sky Resort",
      "West Yellowstone",
      "Whitefish"
    ],
    "pros": [
      "สิทธิประโยชน์ปลอดภาษีซื้อระดับรัฐ (0% State Sales Tax) ช้อปปิ้งสินค้าไม่มีภาษี",
      "อุทยาน Glacier สวยงามระดับสิ่งมหัศจรรย์ธรรมชาติ ทะเลสาบใสราวกระจก",
      "หอพักพนักงานพร้อมอาหาร 3 มื้อ (EDR) ช่วยคุมค่าใช้จ่ายได้ดีมาก",
      "ความปลอดภัยสูง อากาศบริสุทธิ์"
    ],
    "cons": [
      "ตั้งอยู่ในพื้นที่ธรรมชาติ ห่างไกลจากห้างสรรพสินค้าใหญ่",
      "สัญญาณมือถือในบางจุดของอุทยานอาจมีจำกัด"
    ],
    "editorial_summary": "มอนแทนาเป็นจุดหมายชั้นยอดสำหรับผู้รักธรรมชาติ อุทยานแห่งชาติ Glacier สวยงามตระการตา ปลอดภาษีซื้อระดับรัฐ (0% Sales Tax) และมีหอพักพนักงานพร้อมอาหาร ช่วยประหยัดค่าใช้จ่ายได้สูงสุด",
    "alumni_quote": "มอนแทนาเป็นจุดหมายชั้นยอดสำหรับผู้รักธรรมชาติ อุทยานแห่งชาติ Glacier สวยงามตระการตา ปลอดภาษีซื้อระดับรัฐ (0% Sales Tax) และมีหอพักพนักงานพร้อมอาหาร ช่วยประหยัดค่าใช้จ่ายได้สูงสุด",
    "best_for": "สายรักธรรมชาติอันดับ 1 ของโลก ประหยัดค่ากินอยู่แบบรวมอาหาร 3 มื้อ และช้อปปิ้งปลอดภาษี 0%",
    "source_info": {
      "dol_wage_2026": "$10.55-12.00",
      "tax_foundation_2026": "4.7-5.9% Income, 0% Sales",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B",
        "note": "ช่วง มี.ค. - เม.ย. ยังมีหิมะและอากาศหนาวจัด อุทยาน/ลอดจ์บางแห่งเริ่มเปิดรับงานช่วง พ.ค. เหมาะสำหรับผู้ที่ไปปลายสปริง"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วงเวลาทอง (Golden Peak) ของรัฐนี้ อากาศเย็นสบาย (15-25°C) ธรรมชาติสวยที่สุด เรือสำราญและอุทยานเปิด 100%"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) แนะนำสูงสุด",
      "badge": "summer"
    },
    "exact_state_tax_pct": 4.7,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 4.70% (ฐานขั้นแรก)"
  },
  {
    "id": "south_carolina",
    "name": "South Carolina",
    "code": "SC",
    "nickname": "Palmetto State",
    "tier": "Tier S",
    "overall_grade": "A+",
    "overall_score": 95,
    "region": "South",
    "vibe": "Grand Strand Beach & Seasonal Hospitality Demand",
    "statutory_min_wage": "$7.25/ชม. (Federal Minimum Wage)",
    "market_wage_estimate": "ฐาน $13.50 - $17.50 / รวมทิปเฉลี่ย ~$17.50 - $26.00+/ชม.",
    "min_wage": "กม. $7.25 | ฐาน $13.5-$17.5 (รวมทิป ~$17.5-$26+)",
    "min_wage_num": 14.5,
    "state_income_tax": "0% - 6.2% (ตามขั้นบันได อัปเดต 2026)",
    "tax_rate_num": 0.022000000000000002,
    "state_sales_tax": "6.0% (+ภาษีท้องถิ่น รวม 7.0-9.0%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$95 - $135 / สัปดาห์",
    "housing_cost_num": 115,
    "housing_type": "แชร์บ้านพัก J-1 / โมเทลริมหาด / อพาร์ตเมนต์",
    "commute_type": "ปั่นจักรยาน 100% (Ocean Blvd / Kings Hwy) / เดินเท้า / Coast RTA Bus",
    "grades": {
      "safety": {
        "grade": "A-",
        "score": 88,
        "note": "Myrtle Beach และ North Myrtle Beach มีตำรวจและระบบตรวจตราหนาแน่น"
      },
      "scenery_friendliness": {
        "grade": "A",
        "score": 92,
        "note": "หาดทรายทอดยาว 60 ไมล์ ชิงช้าสวรรค์ SkyWheel สวนสนุก Broadway at the Beach"
      },
      "tourism_crowds": {
        "grade": "A+",
        "score": 99,
        "note": "ชายหาดยอดนิยมสูงสุดแห่งหนึ่งของฝั่งตะวันออก (20 ล้านคน/ปี)"
      },
      "earning_job2_tax": {
        "grade": "A+",
        "score": 99,
        "note": "อุปสงค์งานบริการหนาแน่นตลอด 60 ไมล์ ค่าครองชีพ อาหาร และที่พักราคาประหยัด ช่วยคุมค่าใช้จ่ายได้ดี"
      },
      "housing_value": {
        "grade": "A-",
        "score": 88,
        "note": "มีบ้านพักและโมเทลสำหรับ J-1 รองรับเยอะ ค่าเช่าแชร์กันตก $95-135/สัปดาห์"
      },
      "commute_convenience": {
        "grade": "A",
        "score": 94,
        "note": "ปั่นจักรยานเลียบหาดบน Ocean Blvd สะดวกมาก ถนนแบนราบ ปั่นง่าย"
      },
      "alumni_rating": {
        "grade": "A+",
        "score": 98,
        "note": "อุปสงค์งานบริการหนาแน่น ปั่นจักรยานสะดวก ค่าครองชีพสบาย"
      }
    },
    "hotspots": [
      "Myrtle Beach (The Grand Strand / Ocean Blvd)",
      "North Myrtle Beach",
      "Hilton Head Island",
      "Charleston"
    ],
    "pros": [
      "อุปสงค์แรงงานภาคบริการและร้านอาหารสูงมากตลอดแนวชายหาด 60 ไมล์",
      "ปั่นจักรยานไปทำงานสะดวกตลอดแนว Ocean Boulevard",
      "ค่าครองชีพ อาหาร และค่าที่พักไม่แพง ช่วยคุมค่าใช้จ่ายได้ดี",
      "มีคอมมูนิตี้และเครือข่ายผู้เข้าร่วมโครงการ J-1 ขนาดใหญ่"
    ],
    "cons": [
      "แดดหน้าร้อนแรงและค่อนข้างร้อนชื้น",
      "ต้องดูแลล็อคจักรยานให้เรียบร้อยในจุดพลุกพล่าน"
    ],
    "editorial_summary": "Myrtle Beach เซาท์แคโรไลนาเป็นเมืองตากอากาศชายหาดขนาดใหญ่ที่มีอุปสงค์แรงงานภาคบริการหนาแน่นตลอด 60 ไมล์ ปั่นจักรยานสะดวกตลอดแนวหาด ค่าครองชีพและที่พักราคาเป็นมิตร",
    "alumni_quote": "Myrtle Beach เซาท์แคโรไลนาเป็นเมืองตากอากาศชายหาดขนาดใหญ่ที่มีอุปสงค์แรงงานภาคบริการหนาแน่นตลอด 60 ไมล์ ปั่นจักรยานสะดวกตลอดแนวหาด ค่าครองชีพและที่พักราคาเป็นมิตร",
    "best_for": "สายขยันเน้นทำงานบริการ ปั่นจักรยานสะดวก ค่าครองชีพสบาย และรักทะเลคึกคัก",
    "source_info": {
      "dol_wage_2026": "$7.25",
      "tax_foundation_2026": "0-6.2%",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A+",
        "note": "สภาพอากาศอบอุ่น มีนักท่องเที่ยว Spring Break ตั้งแต่ มี.ค. สวนสนุกและร้านอาหารเปิดบริการเต็มที่ตั้งแต่ต้นซีซัน"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "นักท่องเที่ยวซัมเมอร์หนาแน่นมาก อากาศร้อนชื้นหรือแดดแรงช่วง ก.ค.-ส.ค. ชั่วโมงงานและทิปสูง"
      },
      "best_season": "Spring & Summer (ดีเยี่ยมทั้ง 2 ช่วง)",
      "badge": "both"
    },
    "exact_state_tax_pct": 2.2,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: ~2.20% (ยกเว้น $3,460 แรก)"
  },
  {
    "id": "alaska",
    "name": "Alaska",
    "code": "AK",
    "nickname": "The Last Frontier",
    "tier": "Tier S",
    "overall_grade": "A+",
    "overall_score": 94,
    "region": "Pacific",
    "vibe": "Glaciers & Grand Wilderness",
    "statutory_min_wage": "$14.00/ชม. (Alaska Statutory Minimum Wage 2026)",
    "market_wage_estimate": "ฐาน $15.00 - $18.00 / รวมทิปเฉลี่ย ~$19.00 - $26.50+/ชม.",
    "min_wage": "กม. $14.00 | ฐาน $15-$18 (รวมทิป ~$19-$26.5+)",
    "min_wage_num": 14.0,
    "state_income_tax": "0% (ไม่มีภาษีเงินได้ระดับรัฐ)",
    "tax_rate_num": 0.0,
    "state_sales_tax": "0% (ไม่มีภาษีซื้อระดับรัฐ แต่ท้องถิ่นอาจเก็บ 0-7.5%)",
    "has_no_income_tax": true,
    "has_no_sales_tax": true,
    "has_clothing_tax_exemption": true,
    "avg_housing_cost": "$60 - $95 / สัปดาห์ (พร้อมอาหาร)",
    "housing_cost_num": 75,
    "housing_type": "หอพักพนักงานอุทยาน / โรงแรมลอดจ์",
    "commute_type": "เดินเท้า / รถรับส่งพนักงาน",
    "grades": {
      "safety": {
        "grade": "A+",
        "score": 98,
        "note": "ชุมชนท่องเที่ยวและพื้นที่อุทยานมีความปลอดภัยสูงมาก"
      },
      "scenery_friendliness": {
        "grade": "A+",
        "score": 98,
        "note": "ธารน้ำแข็ง กลาเซียร์ วาฬหลังค่อม ฟยอร์ด และปรากฏการณ์พระอาทิตย์เที่ยงคืน"
      },
      "tourism_crowds": {
        "grade": "A",
        "score": 90,
        "note": "เรือสำราญ (Cruise Ships) เทียบท่าทุกวัน นักท่องเที่ยวหนาแน่นตลอดซัมเมอร์"
      },
      "earning_job2_tax": {
        "grade": "A+",
        "score": 96,
        "note": "ค่าแรงขั้นต่ำ $14.00+ สิทธิ 0% State Tax หอพักพร้อมอาหาร 3 มื้อราคาประหยัด ช่วยคุมค่าครองชีพได้ดีที่สุด"
      },
      "housing_value": {
        "grade": "A+",
        "score": 96,
        "note": "หอพักพนักงานพร้อมมื้ออาหารราคาประหยัด ช่วยคุมค่าใช้จ่ายได้ดีมาก"
      },
      "commute_convenience": {
        "grade": "B",
        "score": 82,
        "note": "เดินเท้าถึงสถานที่ทำงานได้ในระยะสั้น หรือมีรถรับส่งพนักงาน"
      },
      "alumni_rating": {
        "grade": "A",
        "score": 92,
        "note": "ประสบการณ์ธรรมชาติระดับโลก 0% ภาษีเงินได้รัฐ และหอพักรวมอาหารคุ้มค่า"
      }
    },
    "hotspots": [
      "Denali National Park (Princess Lodge / Holland America)",
      "Seward (Kenai Fjords NP)",
      "Skagway",
      "Juneau",
      "Ketchikan"
    ],
    "pros": [
      "สิทธิประโยชน์ปลอดภาษีเงินได้ระดับรัฐ (0% State Income Tax)",
      "ค่าแรงขั้นต่ำปรับขึ้นเป็น $14.00/ชม. ในปี 2026",
      "ที่พักรวมอาหารราคาประหยัด ช่วยประหยัดค่าใช้จ่ายได้มาก",
      "สัมผัสธรรมชาติระดับโลก ธารน้ำแข็ง วาฬ และสัตว์ป่า"
    ],
    "cons": [
      "อากาศหน้าร้อนเย็น (10-18 °C)",
      "อยู่ไกล ค่าตั๋วเครื่องบินเข้า-ออกสูงกว่ารัฐอื่น"
    ],
    "editorial_summary": "อะแลสกาเหมาะอย่างยิ่งสำหรับผู้ที่ต้องการสัมผัสธรรมชาติอันยิ่งใหญ่ ธารน้ำแข็ง และสัตว์ป่า ค่าแรงขั้นต่ำปี 2026 ปรับเป็น $14/ชม. ปลอดภาษีเงินได้รัฐ และที่พักมักรวมอาหาร ช่วยให้เก็บเงินได้เป็นสัดส่วนสูง",
    "alumni_quote": "อะแลสกาเหมาะอย่างยิ่งสำหรับผู้ที่ต้องการสัมผัสธรรมชาติอันยิ่งใหญ่ ธารน้ำแข็ง และสัตว์ป่า ค่าแรงขั้นต่ำปี 2026 ปรับเป็น $14/ชม. ปลอดภาษีเงินได้รัฐ และที่พักมักรวมอาหาร ช่วยให้เก็บเงินได้เป็นสัดส่วนสูง",
    "best_for": "สายรักธรรมชาติยิ่งใหญ่ เน้นประหยัดเงินกินอยู่ สิทธิประโยชน์ 0% ภาษีเงินได้รัฐ",
    "source_info": {
      "dol_wage_2026": "$14.00",
      "tax_foundation_2026": "0% Income, 0% State Sales",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B",
        "note": "ช่วง มี.ค. - เม.ย. ยังมีหิมะและอากาศหนาวจัด อุทยาน/ลอดจ์บางแห่งเริ่มเปิดรับงานช่วง พ.ค. เหมาะสำหรับผู้ที่ไปปลายสปริง"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วงเวลาทอง (Golden Peak) ของรัฐนี้ อากาศเย็นสบาย (15-25°C) ธรรมชาติสวยที่สุด เรือสำราญและอุทยานเปิด 100%"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) แนะนำสูงสุด",
      "badge": "summer"
    },
    "exact_state_tax_pct": 0.0,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🎉 0% ปลอดภาษีเงินได้รัฐ (ประหยัดได้ 100%)"
  },
  {
    "id": "maryland",
    "name": "Maryland",
    "code": "MD",
    "nickname": "Old Line State",
    "tier": "Tier S",
    "overall_grade": "A+",
    "overall_score": 94,
    "region": "East Coast",
    "vibe": "Boardwalk Beach Resort & 24/7 Energy",
    "statutory_min_wage": "$15.00/ชม. (DOL Statutory Rate 2026)",
    "market_wage_estimate": "ฐาน $15.00 - $17.50 / รวมทิปเฉลี่ย ~$19.00 - $26.00+/ชม.",
    "min_wage": "กม. $15.00 | ฐาน $15-$17.5 (รวมทิป ~$19-$26+)",
    "min_wage_num": 15.0,
    "state_income_tax": "2.0% - 5.75% (+ภาษีเคาน์ตี 2.25-3.2%)",
    "tax_rate_num": 0.0425,
    "state_sales_tax": "6.0%",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$100 - $145 / สัปดาห์",
    "housing_cost_num": 125,
    "housing_type": "แชร์บ้านพัก J-1 / โมเทลริมหาด",
    "commute_type": "Coastal Highway Beach Bus ($4 วิ่ง 24 ชม.) / ปั่นจักรยาน 100%",
    "grades": {
      "safety": {
        "grade": "A-",
        "score": 88,
        "note": "Ocean City มีระบบตรวจตราและกล้องวงจรปิดตลอดแนวบอร์ดวอล์ก"
      },
      "scenery_friendliness": {
        "grade": "A",
        "score": 90,
        "note": "หาดยาว 10 ไมล์ ทางเดินไม้ Boardwalk สวนสนุกริมหาด ปูแมริแลนด์"
      },
      "tourism_crowds": {
        "grade": "A+",
        "score": 99,
        "note": "เมืองตากอากาศชายหาดยอดนิยมสูงสุดแห่งหนึ่งของฝั่ง Mid-Atlantic (8 ล้านคน/ปี)"
      },
      "earning_job2_tax": {
        "grade": "A+",
        "score": 99,
        "note": "ค่าแรง $15.00 งานบริการแน่นตลอด 146 บล็อก ค่าครองชีพและอาหารราคามาตรฐาน มีตัวเลือกเยอะ"
      },
      "housing_value": {
        "grade": "B",
        "score": 82,
        "note": "มีบ้านพักและโมเทลรองรับเด็ก J-1 จำนวนมาก แชร์กับเพื่อนตก $100-140/wk"
      },
      "commute_convenience": {
        "grade": "A+",
        "score": 98,
        "note": "Beach Bus วิ่งตลอด 24 ชม. (ตั๋วเหมาวัน $4) และมีเลนจักรยานกว้างตลอดสาย"
      },
      "alumni_rating": {
        "grade": "A+",
        "score": 97,
        "note": "อุปสงค์งานบริการหนาแน่น ปั่นจักรยานสะดวก รถเมล์ 24 ชม. ค่าแรง $15"
      }
    },
    "hotspots": [
      "Ocean City (OCMD - Boardwalk, Coastal Highway 1st-146th St)",
      "Deep Creek Lake",
      "Annapolis"
    ],
    "pros": [
      "ค่าแรงขั้นต่ำ $15.00/ชม. อุปสงค์งานบริการหนาแน่นตลอด 146 บล็อก",
      "Beach Bus วิ่งตลอด 24 ชั่วโมง ตั๋วเหมาทั้งวันราคาประหยัด",
      "เลนจักรยานกว้าง ปั่นไปทำงานสะดวกตลอดแนวชายฝั่ง",
      "ใกล้ Washington D.C., Philadelphia, New York City เดินทางเที่ยวง่าย"
    ],
    "cons": [
      "ต้องดูแลล็อคจักรยานให้ดีในพื้นที่พลุกพล่าน",
      "คนแน่นตลอดทั้งซัมเมอร์"
    ],
    "editorial_summary": "Ocean City แมริแลนด์เป็นเมืองตากอากาศชายหาดที่คึกคัก มีค่าแรงขั้นต่ำ $15.00/ชม. มีอุปสงค์แรงงานภาคบริการสูง ระบบขนส่ง Beach Bus วิ่ง 24 ชั่วโมง และเลนจักรยานตลอดแนวชายหาด ช่วยให้การเดินทางสะดวกมาก",
    "alumni_quote": "Ocean City แมริแลนด์เป็นเมืองตากอากาศชายหาดที่คึกคัก มีค่าแรงขั้นต่ำ $15.00/ชม. มีอุปสงค์แรงงานภาคบริการสูง ระบบขนส่ง Beach Bus วิ่ง 24 ชั่วโมง และเลนจักรยานตลอดแนวชายหาด ช่วยให้การเดินทางสะดวกมาก",
    "best_for": "สายขยันเน้นทำงานบริการ ชอบปั่นจักรยาน รถเมล์ 24 ชม. และชอบความคึกคักริมทะเล",
    "source_info": {
      "dol_wage_2026": "$15.00",
      "tax_foundation_2026": "2.0-5.75% Income, 6% Sales",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A-",
        "note": "ช่วง มี.ค.-เม.ย. อากาศเริ่มอุ่นขึ้น สวนสนุกในร่ม/เมืองเปิดปกติ สวนน้ำกลางแจ้งและบอร์ดวอล์กเปิดเต็มที่ปลาย พ.ค. (Memorial Day)"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วง High Season สูงสุด นักท่องเที่ยวหลายล้านคน สวนน้ำและชายหาดเปิด 100% โอกาสทำ OT และงานเสริมหนาแน่นที่สุด"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) หรือ ปลาย Spring",
      "badge": "summer"
    },
    "exact_state_tax_pct": 4.25,
    "exact_local_tax_pct": 2.8,
    "exact_tax_note": "🏛️ ภาษีรัฐ 4.25% + ภาษีเคาน์ตีท้องถิ่น (Ocean City) ~2.80%"
  },
  {
    "id": "north_carolina",
    "name": "North Carolina",
    "code": "NC",
    "nickname": "Tar Heel State",
    "tier": "Tier S",
    "overall_grade": "A+",
    "overall_score": 94,
    "region": "East Coast",
    "vibe": "Outer Banks Coastal Haven & Saturday Turnarounds",
    "statutory_min_wage": "$7.25/ชม. (Federal Minimum Wage)",
    "market_wage_estimate": "ฐาน $14.50 - $18.00 / รวมทิปเฉลี่ย ~$18.50 - $26.50+/ชม.",
    "min_wage": "กม. $7.25 | ฐาน $14.5-$18 (รวมทิป ~$18.5-$26.5+)",
    "min_wage_num": 15.0,
    "state_income_tax": "3.99% (Flat Rate อัปเดตการปฏิรูปภาษี 2026)",
    "tax_rate_num": 0.039900000000000005,
    "state_sales_tax": "4.75% (+ภาษีท้องถิ่น รวม 6.75-7.5%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$100 - $145 / สัปดาห์",
    "housing_cost_num": 125,
    "housing_type": "แชร์บ้านพักตากอากาศริมทะเล / โมเทล",
    "commute_type": "ปั่นจักรยาน 100% (มีเลนจักรยานเลียบหาดยาว) / เดินเท้า",
    "grades": {
      "safety": {
        "grade": "A+",
        "score": 98,
        "note": "Outer Banks (OBX) มีความปลอดภัยสูงมาก บรรยากาศชุมชนครอบครัว"
      },
      "scenery_friendliness": {
        "grade": "A+",
        "score": 96,
        "note": "เกาะสันทรายยาวร้อยไมล์ ประภาคารโบราณ ม้าป่าหาดทราย ลมทะเลสดชื่น"
      },
      "tourism_crowds": {
        "grade": "A",
        "score": 92,
        "note": "นักท่องเที่ยวมาเช่าบ้านพักตากอากาศเต็มตลอดฤดูร้อน"
      },
      "earning_job2_tax": {
        "grade": "A+",
        "score": 97,
        "note": "ภาษีเงินได้ลดเหลือ 3.99% Flat + งานเสริมทำความสะอาดบ้านพักวันเสาร์ $150-250/วัน ค่าครองชีพไม่แพง"
      },
      "housing_value": {
        "grade": "B+",
        "score": 84,
        "note": "แชร์บ้านพักตากอากาศริมหาดกับเพื่อนร่วมโครงการคุ้มค่า"
      },
      "commute_convenience": {
        "grade": "A",
        "score": 94,
        "note": "ปั่นจักรยาน 100% มีเลนจักรยานแยกต่างหากเลียบหาดยาวหลายสิบไมล์"
      },
      "alumni_rating": {
        "grade": "A+",
        "score": 96,
        "note": "OBX บรรยากาศดี ปลอดภัย ปั่นจักรยานชิล งานเสริมวันเสาร์ทำรายได้ดี"
      }
    },
    "hotspots": [
      "Outer Banks (OBX: Nags Head, Kill Devil Hills, Kitty Hawk, Corolla)",
      "Asheville (Blue Ridge Mountains)",
      "Charlotte (Carowinds)"
    ],
    "pros": [
      "Outer Banks (OBX) มีโอกาสงานพิเศษวันเสาร์ (Turnover Day) รายได้เฉลี่ย $150-$250/วัน",
      "ภาษีเงินได้รัฐปรับลดลงเหลือ 3.99% Flat Rate ในปี 2026",
      "ความปลอดภัยสูง ผู้คนท้องถิ่นเป็นมิตร",
      "ทางจักรยานเลียบหาดปั่นง่าย แบนราบ วิวสวยงาม"
    ],
    "cons": [
      "ไม่มีรถบัสสาธารณะ ต้องพึ่งพาจักรยานเป็นหลัก",
      "เป็นแนวเกาะสันทราย การเข้าเมืองใหญ่ต้องขับรถข้ามสะพาน"
    ],
    "editorial_summary": "Outer Banks นอร์ทแคโรไลนาเป็นเกาะสันทรายที่มีความปลอดภัยสูง ปั่นจักรยานเลียบหาดสะดวก ภาษีเงินได้รัฐปรับลดเหลือ 3.99% Flat Rate ในปี 2026 และมีโอกาสงานเสริมทำความสะอาดบ้านพักตากอากาศในวันเสาร์ที่สร้างรายได้ดี",
    "alumni_quote": "Outer Banks นอร์ทแคโรไลนาเป็นเกาะสันทรายที่มีความปลอดภัยสูง ปั่นจักรยานเลียบหาดสะดวก ภาษีเงินได้รัฐปรับลดเหลือ 3.99% Flat Rate ในปี 2026 และมีโอกาสงานเสริมทำความสะอาดบ้านพักตากอากาศในวันเสาร์ที่สร้างรายได้ดี",
    "best_for": "สายชอบทะเล เกาะสันทราย ปั่นจักรยานชิล เน้นทำเงินพิเศษวันเสาร์ และชอบความปลอดภัยสูง",
    "source_info": {
      "dol_wage_2026": "$7.25",
      "tax_foundation_2026": "3.99% Flat",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B-",
        "note": "งานบริการตามฤดูกาลช่วง มี.ค.-เม.ย. มีจำกัด"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "B",
        "note": "มีงานบริการช่วงซัมเมอร์ระดับปานกลาง"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.)",
      "badge": "summer"
    },
    "exact_state_tax_pct": 3.99,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 3.99% (Flat Rate 2026)"
  },
  {
    "id": "ohio",
    "name": "Ohio",
    "code": "OH",
    "nickname": "Buckeye State",
    "tier": "Tier S",
    "overall_grade": "A+",
    "overall_score": 94,
    "region": "Midwest",
    "vibe": "Roller Coaster Capital & Low Housing Cost",
    "statutory_min_wage": "$11.00/ชม. (Ohio Large Employer Standard 2026)",
    "market_wage_estimate": "ฐาน $13.50 - $16.50 / รวมทิปเฉลี่ย ~$17.50 - $25.00+/ชม.",
    "min_wage": "กม. $11.00 | ฐาน $13.5-$16.5 (รวมทิป ~$17.5-$25+)",
    "min_wage_num": 11.0,
    "state_income_tax": "2.75% (อัตราสูงสุด อัปเดต 2026 + ภาษีเทศบาล 1-2.5%)",
    "tax_rate_num": 0.0,
    "state_sales_tax": "5.75% (+ภาษีท้องถิ่น รวม 6.5-8.0%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$50 - $85 / สัปดาห์ (ถูกที่สุดในประเทศ)",
    "housing_cost_num": 65,
    "housing_type": "หอพักพนักงาน Cedar Point (Commons / Bayside)",
    "commute_type": "รถบัสพนักงานฟรี (Bus Shuttle) / เดินเท้า / จักรยาน",
    "grades": {
      "safety": {
        "grade": "A",
        "score": 92,
        "note": "ในหอพักพนักงานและสวนสนุกมีระบบรักษาความปลอดภัย 24 ชั่วโมง"
      },
      "scenery_friendliness": {
        "grade": "A-",
        "score": 88,
        "note": "สวนสนุกระดับโลกริมทะเลสาบ Erie รถไฟเหาะระดับตำนาน ชายหาด Cedar Point"
      },
      "tourism_crowds": {
        "grade": "A+",
        "score": 98,
        "note": "Cedar Point และ Kings Island มีผู้มาเยือนหนาแน่นตลอดซัมเมอร์"
      },
      "earning_job2_tax": {
        "grade": "A",
        "score": 92,
        "note": "ชั่วโมงงาน OT 1.5x มั่นคง (50-60 ชม./wk) หอพักถูกที่สุดในประเทศ ($50-85) โรงอาหารราคาถูก ค่าครองชีพต่ำมาก"
      },
      "housing_value": {
        "grade": "A+",
        "score": 100,
        "note": "หอพักพนักงานราคาประหยัดที่สุด ($50-85/สัปดาห์) พร้อมสิ่งอำนวยความสะดวก"
      },
      "commute_convenience": {
        "grade": "A+",
        "score": 98,
        "note": "มีรถบัสพนักงานฟรีรับส่งระหว่างหอพักกับสวนสนุกตลอด 24 ชั่วโมง"
      },
      "alumni_rating": {
        "grade": "A+",
        "score": 96,
        "note": "Cedar Point หอพักถูกที่สุด รถบัสฟรี OT มั่นคง เล่นเครื่องเล่นฟรี"
      }
    },
    "hotspots": [
      "Sandusky (Cedar Point - Roller Coaster Capital)",
      "Mason (Kings Island)",
      "Put-in-Bay (Lake Erie)"
    ],
    "pros": [
      "หอพักพนักงานราคาประหยัดที่สุดในประเทศ ($50-$85/สัปดาห์)",
      "รถบัสรับส่งพนักงานฟรีตลอด 24 ชั่วโมง ไม่ต้องเสียค่าเดินทาง",
      "ชั่วโมงงาน Overtime (1.5x) ในงานหลักมีความมั่นคง ไม่ต้องเหนื่อยหางานที่สอง",
      "สิทธิ์เข้าเล่นสวนสนุกและสวนน้ำ Cedar Point ฟรี",
      "โรงอาหารพนักงานราคาประหยัด"
    ],
    "cons": [
      "มีภาษีเทศบาลท้องถิ่น (Municipal Tax 1-2%) เพิ่มเติม",
      "งานสวนสนุกกลางแจ้งอาจต้องยืนกลางแดด"
    ],
    "editorial_summary": "โอไฮโอมีสวนสนุกระดับโลกอย่าง Cedar Point โดดเด่นเรื่องหอพักพนักงานราคาถูกที่สุดในประเทศ มีรถบัสรับส่งฟรี 24 ชม. และชั่วโมงงานหลักพร้อม OT 1.5 เท่า เหมาะสำหรับผู้ที่ต้องการความสะดวกครบวงจร",
    "alumni_quote": "โอไฮโอมีสวนสนุกระดับโลกอย่าง Cedar Point โดดเด่นเรื่องหอพักพนักงานราคาถูกที่สุดในประเทศ มีรถบัสรับส่งฟรี 24 ชม. และชั่วโมงงานหลักพร้อม OT 1.5 เท่า เหมาะสำหรับผู้ที่ต้องการความสะดวกครบวงจร",
    "best_for": "ทุกคนที่ไม่ชอบความวุ่นวายเรื่องหาบ้าน/เดินทาง อยากได้หอพักถูกที่สุด รถบัสฟรี OT มั่นคง และชอบสวนสนุก",
    "source_info": {
      "dol_wage_2026": "$11.00",
      "tax_foundation_2026": "2.75% Max State Rate",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A-",
        "note": "ช่วง มี.ค.-เม.ย. อากาศเริ่มอุ่นขึ้น สวนสนุกในร่ม/เมืองเปิดปกติ สวนน้ำกลางแจ้งและบอร์ดวอล์กเปิดเต็มที่ปลาย พ.ค. (Memorial Day)"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วง High Season สูงสุด นักท่องเที่ยวหลายล้านคน สวนน้ำและชายหาดเปิด 100% โอกาสทำ OT และงานเสริมหนาแน่นที่สุด"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) หรือ ปลาย Spring",
      "badge": "summer"
    },
    "exact_state_tax_pct": 0.0,
    "exact_local_tax_pct": 1.75,
    "exact_tax_note": "🏛️ รัฐยกเว้นภาษีเงินได้แรก $26,050 (0%) แต่มีภาษีเทศบาลเมือง ~1.75%"
  },
  {
    "id": "colorado",
    "name": "Colorado",
    "code": "CO",
    "nickname": "Centennial State",
    "tier": "Tier S",
    "overall_grade": "A+",
    "overall_score": 93,
    "region": "Mountain West",
    "vibe": "Rocky Mountains & Alpine Resort",
    "statutory_min_wage": "$15.16/ชม. (Colorado Statutory Minimum Wage 2026)",
    "market_wage_estimate": "ฐาน $15.00 - $18.00 / รวมทิปเฉลี่ย ~$19.00 - $26.50+/ชม.",
    "min_wage": "กม. $14.81 | ฐาน $15-$18 (รวมทิป ~$19-$26.5+)",
    "min_wage_num": 15.16,
    "state_income_tax": "4.4% (Flat Rate / ลดเหลือ 4.25% ตามเกณฑ์)",
    "tax_rate_num": 0.044000000000000004,
    "state_sales_tax": "2.9% (ภาษีซื้อระดับรัฐต่ำที่สุดในประเทศ)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$80 - $125 / สัปดาห์",
    "housing_cost_num": 100,
    "housing_type": "หอพักพนักงานรีสอร์ต / เคบิน / แชร์บ้าน",
    "commute_type": "Estes Park Free Shuttle / ปั่นจักรยาน / เดินเท้า",
    "grades": {
      "safety": {
        "grade": "A+",
        "score": 98,
        "note": "เมืองตากอากาศเทือกเขาร็อกกี้มีความปลอดภัยสูงมาก"
      },
      "scenery_friendliness": {
        "grade": "A+",
        "score": 98,
        "note": "ยอดเขาหิมะ ป่าสน สัตว์ป่า อากาศหน้าร้อนเย็นสบาย"
      },
      "tourism_crowds": {
        "grade": "A",
        "score": 92,
        "note": "อุทยาน Rocky Mountain มีผู้มาเยือนกว่า 4.5 ล้านคนต่อปี"
      },
      "earning_job2_tax": {
        "grade": "A",
        "score": 92,
        "note": "ค่าแรง $14.81+ ภาษีซื้อรัฐต่ำสุด 2.9% ค่าครองชีพปานกลาง-สูง แต่มีหอพักพนักงานพร้อมอาหารช่วยประหยัด"
      },
      "housing_value": {
        "grade": "A-",
        "score": 88,
        "note": "รีสอร์ตอย่าง YMCA of the Rockies มีหอพักพนักงานราคาประหยัดพร้อมอาหาร"
      },
      "commute_convenience": {
        "grade": "A-",
        "score": 90,
        "note": "มีรถชัตเติลบัสบริการฟรีในเมืองท่องเที่ยวอย่าง Estes Park และ Steamboat"
      },
      "alumni_rating": {
        "grade": "A+",
        "score": 96,
        "note": "อากาศดี ปลอดภัย บรรยากาศเมืองน่ารักสไตล์อัลไพน์"
      }
    },
    "hotspots": [
      "Estes Park (Rocky Mountain NP Gateway / YMCA)",
      "Steamboat Springs",
      "Vail / Beaver Creek",
      "Breckenridge",
      "Aspen"
    ],
    "pros": [
      "อากาศหน้าร้อนเย็นสบาย (15-25 °C) ไม่ร้อนอบอ้าว",
      "ความปลอดภัยระดับสูง ชุมชนต้อนรับนักท่องเที่ยว",
      "ภาษีซื้อระดับรัฐ (State Sales Tax) ต่ำมากเพียง 2.9%",
      "มีรถชัตเติลบัสฟรีบริการรอบเมืองท่องเที่ยวหลัก"
    ],
    "cons": [
      "ตั้งอยู่บนที่สูง (High Altitude) ช่วงแรกอาจต้องปรับตัว",
      "หากไม่มีหอพักนายจ้าง ค่าเช่าส่วนบุคคลอาจสูง"
    ],
    "editorial_summary": "โคโลราโดเป็นจุดหมายยอดนิยมสำหรับผู้ที่ชอบอากาศเย็นและภูเขาสูง ค่าแรงขั้นต่ำปี 2026 ปรับเป็น $14.81/ชม. ภาษีซื้อรัฐต่ำมาก 2.9% และมีหอพักนายจ้างพร้อมรถชัตเติลบัสฟรีในหลายเมือง",
    "alumni_quote": "โคโลราโดเป็นจุดหมายยอดนิยมสำหรับผู้ที่ชอบอากาศเย็นและภูเขาสูง ค่าแรงขั้นต่ำปี 2026 ปรับเป็น $14.81/ชม. ภาษีซื้อรัฐต่ำมาก 2.9% และมีหอพักนายจ้างพร้อมรถชัตเติลบัสฟรีในหลายเมือง",
    "best_for": "สายรักภูเขา อากาศเย็นสบาย ปลอดภัยสูง ชอบเมืองน่ารักสไตล์ยุโรป",
    "source_info": {
      "dol_wage_2026": "$14.81",
      "tax_foundation_2026": "4.4% Flat, 2.9% Sales",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A-",
        "note": "ช่วง มี.ค.-เม.ย. อากาศเริ่มอุ่นขึ้น สวนสนุกในร่ม/เมืองเปิดปกติ สวนน้ำกลางแจ้งและบอร์ดวอล์กเปิดเต็มที่ปลาย พ.ค. (Memorial Day)"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วง High Season สูงสุด นักท่องเที่ยวหลายล้านคน สวนน้ำและชายหาดเปิด 100% โอกาสทำ OT และงานเสริมหนาแน่นที่สุด"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) หรือ ปลาย Spring",
      "badge": "summer"
    },
    "exact_state_tax_pct": 4.4,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 4.40% (Flat Rate)"
  },
  {
    "id": "massachusetts",
    "name": "Massachusetts",
    "code": "MA",
    "nickname": "Bay State",
    "tier": "Tier A",
    "overall_grade": "A",
    "overall_score": 92,
    "region": "New England",
    "vibe": "Cape Cod Beach & Luxury Island Resort",
    "statutory_min_wage": "$15.00/ชม. (DOL Statutory Rate 2026)",
    "market_wage_estimate": "ฐาน $15.50 - $18.50 / รวมทิปเฉลี่ย ~$19.50 - $27.00+/ชม.",
    "min_wage": "กม. $15.00 | ฐาน $15.5-$18.5 (รวมทิป ~$19.5-$27+)",
    "min_wage_num": 15.0,
    "state_income_tax": "5.0% (Flat Rate)",
    "tax_rate_num": 0.05,
    "state_sales_tax": "6.25% (เสื้อผ้าราคา <$175 ได้รับยกเว้นภาษี 0%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": true,
    "avg_housing_cost": "$120 - $185 / สัปดาห์",
    "housing_cost_num": 150,
    "housing_type": "แชร์บ้านพักตากอากาศ / หอพักรีสอร์ต",
    "commute_type": "ปั่นจักรยาน 100% / เดินเท้า / CCRTA Bus",
    "grades": {
      "safety": {
        "grade": "A+",
        "score": 98,
        "note": "Cape Cod, Martha's Vineyard และ Nantucket มีความปลอดภัยสูงมาก"
      },
      "scenery_friendliness": {
        "grade": "A+",
        "score": 96,
        "note": "บ้านไม้สไตล์ Shingle หลังคาสีเทา ดอกไฮเดรนเยีย หาดทรายขาว ลมทะเลสดชื่น"
      },
      "tourism_crowds": {
        "grade": "A+",
        "score": 96,
        "note": "เมืองตากอากาศระดับไฮเอนด์ คนแน่นตลอดฤดูร้อน"
      },
      "earning_job2_tax": {
        "grade": "A+",
        "score": 96,
        "note": "ค่าแรง $15.00 ทิประดับพรีเมียมสูง เสื้อผ้าปลอดภาษี 0% แต่ค่าครองชีพและสินค้าบนเกาะค่อนข้างสูง"
      },
      "housing_value": {
        "grade": "C+",
        "score": 68,
        "note": "ค่าเช่าบ้านพักตากอากาศค่อนข้างสูง ต้องหาแต่เนิ่นๆ"
      },
      "commute_convenience": {
        "grade": "A",
        "score": 92,
        "note": "มีทางจักรยานเลียบชายฝั่ง (Shining Sea Bikeway) และรถบัส CCRTA"
      },
      "alumni_rating": {
        "grade": "A+",
        "score": 95,
        "note": "บรรยากาศสวยงาม ทิปดี ปั่นจักรยานเลียบทะเล เสื้อผ้าปลอดภาษี"
      }
    },
    "hotspots": [
      "Cape Cod (Hyannis, Provincetown, Chatham, Falmouth)",
      "Martha's Vineyard",
      "Nantucket",
      "Salem",
      "Boston Suburbs"
    ],
    "pros": [
      "ค่าแรงขั้นต่ำ $15.00/ชม. และทิปจากลูกค้าระดับพรีเมียม",
      "เสื้อผ้าและเครื่องแต่งกายราคาต่ำกว่า $175 ได้รับการยกเว้นภาษีซื้อ (0% Sales Tax)",
      "ปั่นจักรยานเลียบชายฝั่งสะดวกและปลอดภัย",
      "ใกล้เมืองประวัติศาสตร์ Boston เดินทางสะดวก"
    ],
    "cons": [
      "ค่าที่พักค่อนข้างสูง (แนะนำให้เลือกงานที่มีที่พักรองรับ)"
    ],
    "editorial_summary": "Cape Cod และเกาะในแมสซาชูเซตส์เป็นแหล่งพักผ่อนระดับพรีเมียม ค่าแรงขั้นต่ำ $15.00/ชม. ทิปในร้านอาหารสูง ปั่นจักรยานเลียบทะเลสะดวก และเสื้อผ้าได้รับการยกเว้นภาษีซื้อ",
    "alumni_quote": "Cape Cod และเกาะในแมสซาชูเซตส์เป็นแหล่งพักผ่อนระดับพรีเมียม ค่าแรงขั้นต่ำ $15.00/ชม. ทิปในร้านอาหารสูง ปั่นจักรยานเลียบทะเลสะดวก และเสื้อผ้าได้รับการยกเว้นภาษีซื้อ",
    "best_for": "สายชอบเมืองตากอากาศผู้ดี บรรยากาศสวยหรู ทิปดี ปั่นจักรยานเลียบทะเล ช้อปปิ้งเสื้อผ้าปลอดภาษี",
    "source_info": {
      "dol_wage_2026": "$15.00",
      "tax_foundation_2026": "5.0% Flat, 6.25% Sales",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A-",
        "note": "ช่วง มี.ค.-เม.ย. อากาศเริ่มอุ่นขึ้น สวนสนุกในร่ม/เมืองเปิดปกติ สวนน้ำกลางแจ้งและบอร์ดวอล์กเปิดเต็มที่ปลาย พ.ค. (Memorial Day)"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วง High Season สูงสุด นักท่องเที่ยวหลายล้านคน สวนน้ำและชายหาดเปิด 100% โอกาสทำ OT และงานเสริมหนาแน่นที่สุด"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) หรือ ปลาย Spring",
      "badge": "summer"
    },
    "exact_state_tax_pct": 5.0,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 5.00% (Flat Rate)"
  },
  {
    "id": "michigan",
    "name": "Michigan",
    "code": "MI",
    "nickname": "Great Lakes State",
    "tier": "Tier A",
    "overall_grade": "A",
    "overall_score": 92,
    "region": "Midwest",
    "vibe": "Car-Free Island & Great Lakes",
    "statutory_min_wage": "$13.73/ชม. (Michigan Statutory Minimum Wage 2026)",
    "market_wage_estimate": "ฐาน $14.00 - $16.50 / รวมทิปเฉลี่ย ~$18.00 - $25.00+/ชม.",
    "min_wage": "กม. $13.73 | ฐาน $14-$16.5 (รวมทิป ~$18-$25+)",
    "min_wage_num": 13.73,
    "state_income_tax": "4.25% (Flat Rate)",
    "tax_rate_num": 0.0425,
    "state_sales_tax": "6.0%",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$70 - $115 / สัปดาห์",
    "housing_cost_num": 90,
    "housing_type": "หอพักพนักงานโรงแรม / บ้านเช่า",
    "commute_type": "จักรยาน 100% (เกาะ Mackinac ห้ามใช้รถยนต์) / เดินเท้า",
    "grades": {
      "safety": {
        "grade": "A+",
        "score": 98,
        "note": "Mackinac Island และ Traverse City มีความปลอดภัยสูงมาก"
      },
      "scenery_friendliness": {
        "grade": "A+",
        "score": 96,
        "note": "เกาะสวรรค์ไร้รถยนต์ ทะเลสาบน้ำใสสีฟ้าคราม รถม้า ดอกไม้บานสะพรั่ง"
      },
      "tourism_crowds": {
        "grade": "A",
        "score": 90,
        "note": "นักท่องเที่ยวหนาแน่นตลอดซัมเมอร์"
      },
      "earning_job2_tax": {
        "grade": "B+",
        "score": 84,
        "note": "ค่าแรงขั้นต่ำปรับเป็น $13.73 ภาษี 4.25% หอพักโรงแรมบนเกาะราคาประหยัด ค่าครองชีพสมเหตุสมผล"
      },
      "housing_value": {
        "grade": "A",
        "score": 92,
        "note": "โรงแรมบนเกาะอย่าง Grand Hotel มักมีหอพักพนักงานราคาประหยัด"
      },
      "commute_convenience": {
        "grade": "A+",
        "score": 98,
        "note": "ปั่นจักรยานและเดิน 100% ไร้มลพิษ ไร้รถยนต์ ปลอดภัย"
      },
      "alumni_rating": {
        "grade": "A",
        "score": 92,
        "note": "เกาะสวยคลาสสิก ปั่นจักรยานรับลมทะเลสาบ สังคมเพื่อนดี"
      }
    },
    "hotspots": [
      "Mackinac Island (Grand Hotel / Main St)",
      "Traverse City (Sleeping Bear Dunes)",
      "Pictured Rocks",
      "Frankenmuth"
    ],
    "pros": [
      "Mackinac Island เป็นเกาะประวัติศาสตร์ที่ห้ามใช้รถยนต์ (Car-Free Island) ปั่นจักรยาน 100%",
      "ค่าแรงขั้นต่ำปรับขึ้นเป็น $13.73/ชม. ในปี 2026",
      "โรงแรมและรีสอร์ตมักมีหอพักพนักงานราคาประหยัด",
      "ทัศนียภาพ Great Lakes สวยงาม อากาศสดชื่น"
    ],
    "cons": [
      "การเดินทางข้ามเกาะต้องพึ่งพาเรือเฟอร์รี่",
      "อากาศช่วงต้นซัมเมอร์ยังค่อนข้างเย็น"
    ],
    "editorial_summary": "มิชิแกนโดดเด่นด้วยเกาะ Mackinac Island ที่ห้ามใช้รถยนต์ ใช้การปั่นจักรยานและรถม้า ค่าแรงขั้นต่ำปรับเป็น $13.73/ชม. ในปี 2026 มีหอพักพนักงานพร้อม เหมาะสำหรับผู้ที่ชอบบรรยากาศคลาสสิกและทะเลสาบ",
    "alumni_quote": "มิชิแกนโดดเด่นด้วยเกาะ Mackinac Island ที่ห้ามใช้รถยนต์ ใช้การปั่นจักรยานและรถม้า ค่าแรงขั้นต่ำปรับเป็น $13.73/ชม. ในปี 2026 มีหอพักพนักงานพร้อม เหมาะสำหรับผู้ที่ชอบบรรยากาศคลาสสิกและทะเลสาบ",
    "best_for": "สายรักเกาะวินเทจ ชอบปั่นจักรยาน 100% ไร้ควันรถยนต์ และมีหอพักนายจ้างพร้อม",
    "source_info": {
      "dol_wage_2026": "$13.73",
      "tax_foundation_2026": "4.25% Flat",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A-",
        "note": "ช่วง มี.ค.-เม.ย. อากาศเริ่มอุ่นขึ้น สวนสนุกในร่ม/เมืองเปิดปกติ สวนน้ำกลางแจ้งและบอร์ดวอล์กเปิดเต็มที่ปลาย พ.ค. (Memorial Day)"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วง High Season สูงสุด นักท่องเที่ยวหลายล้านคน สวนน้ำและชายหาดเปิด 100% โอกาสทำ OT และงานเสริมหนาแน่นที่สุด"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) หรือ ปลาย Spring",
      "badge": "summer"
    },
    "exact_state_tax_pct": 4.25,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 4.25% (Flat Rate)"
  },
  {
    "id": "new_hampshire",
    "name": "New Hampshire",
    "code": "NH",
    "nickname": "Granite State",
    "tier": "Tier A",
    "overall_grade": "A",
    "overall_score": 92,
    "region": "New England",
    "vibe": "White Mountains, Lakes & Dual 0% Tax",
    "statutory_min_wage": "$7.25/ชม. (Federal Minimum Wage)",
    "market_wage_estimate": "ฐาน $14.50 - $18.00 / รวมทิปเฉลี่ย ~$18.00 - $25.50+/ชม.",
    "min_wage": "กม. $7.25 | ฐาน $14.5-$18 (รวมทิป ~$18-$25.5+)",
    "min_wage_num": 15.0,
    "state_income_tax": "0% (ไม่มีภาษีเงินได้จากการทำงาน)",
    "tax_rate_num": 0.0,
    "state_sales_tax": "0% (ไม่มีภาษีซื้อระดับรัฐ 0% Sales Tax)",
    "has_no_income_tax": true,
    "has_no_sales_tax": true,
    "has_clothing_tax_exemption": true,
    "avg_housing_cost": "$90 - $135 / สัปดาห์",
    "housing_cost_num": 110,
    "housing_type": "หอพักรีสอร์ต / เคบิน / บ้านเช่า",
    "commute_type": "เดินเท้า / ปั่นจักรยาน / รถรับส่งพนักงาน",
    "grades": {
      "safety": {
        "grade": "A+",
        "score": 98,
        "note": "รัฐที่มีสถิติความปลอดภัยติดอันดับ Top 3 ของประเทศอย่างต่อเนื่อง"
      },
      "scenery_friendliness": {
        "grade": "A+",
        "score": 96,
        "note": "เทือกเขา White Mountains ทะเลสาบ Winnipesaukee ธรรมชาติร่มรื่น"
      },
      "tourism_crowds": {
        "grade": "A-",
        "score": 88,
        "note": "นักท่องเที่ยวมาพักผ่อนและช้อปปิ้งปลอดภาษีหนาแน่น"
      },
      "earning_job2_tax": {
        "grade": "A+",
        "score": 98,
        "note": "สิทธิประโยชน์ 0% ทั้งภาษีเงินได้และภาษีซื้อ ค่าครองชีพสมเหตุสมผล ช้อปปิ้งเอาต์เล็ตปลอดภาษี"
      },
      "housing_value": {
        "grade": "A-",
        "score": 88,
        "note": "รีสอร์ตและโรงแรมมักมีหอพักพนักงานราคาประหยัด"
      },
      "commute_convenience": {
        "grade": "B",
        "score": 78,
        "note": "ในเมืองรีสอร์ตเดินเท้าหรือปั่นจักรยานสะดวก"
      },
      "alumni_rating": {
        "grade": "A",
        "score": 92,
        "note": "ปลอดภาษีทั้งสองด้าน ภูเขาสวย อากาศดี ปลอดภัยสูง"
      }
    },
    "hotspots": [
      "White Mountains (North Conway, Lincoln, Franconia)",
      "Lake Winnipesaukee (Weirs Beach)",
      "Hampton Beach",
      "Mount Washington"
    ],
    "pros": [
      "สิทธิประโยชน์ภาษีคู่: 0% State Earned Income Tax และ 0% State Sales Tax",
      "North Conway มี Settlers Green Outlets ช้อปปิ้งปลอดภาษีขนาดใหญ่",
      "ความปลอดภัยติด Top 3 ของประเทศ ธรรมชาติสวยงาม",
      "อากาศหน้าร้อนเย็นสบาย"
    ],
    "cons": [
      "หากไม่มีหอพักนายจ้าง การเดินทางระหว่างเมืองต้องพึ่งพารถยนต์"
    ],
    "editorial_summary": "นิวแฮมป์เชียร์เป็นหนึ่งในรัฐที่ปลอดภัยที่สุด มีจุดเด่นเรื่องปลอดภาษีคู่ (0% Income Tax + 0% Sales Tax) เทือกเขา White Mountains สวยงามและมีเอาต์เล็ตช้อปปิ้งปลอดภาษีขนาดใหญ่",
    "alumni_quote": "นิวแฮมป์เชียร์เป็นหนึ่งในรัฐที่ปลอดภัยที่สุด มีจุดเด่นเรื่องปลอดภาษีคู่ (0% Income Tax + 0% Sales Tax) เทือกเขา White Mountains สวยงามและมีเอาต์เล็ตช้อปปิ้งปลอดภาษีขนาดใหญ่",
    "best_for": "สายเน้นผลประโยชน์ภาษีสูงสุด (0% Income + 0% Sales) ชอบภูเขา ทะเลสาบ และความปลอดภัยสูง",
    "source_info": {
      "dol_wage_2026": "$7.25",
      "tax_foundation_2026": "0% Earned Income, 0% Sales",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B+",
        "note": "ช่วง มี.ค. - เม.ย. ยังมีหิมะและอากาศหนาวจัด อุทยาน/ลอดจ์บางแห่งเริ่มเปิดรับงานช่วง พ.ค. เหมาะสำหรับผู้ที่ไปปลายสปริง"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วงเวลาทอง (Golden Peak) ของรัฐนี้ อากาศเย็นสบาย (15-25°C) ธรรมชาติสวยที่สุด เรือสำราญและอุทยานเปิด 100%"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) แนะนำสูงสุด",
      "badge": "summer"
    },
    "exact_state_tax_pct": 0.0,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🎉 0% ปลอดภาษีเงินได้จากค่าจ้าง (ประหยัดได้ 100%)"
  },
  {
    "id": "south_dakota",
    "name": "South Dakota",
    "code": "SD",
    "nickname": "Mount Rushmore State",
    "tier": "Tier A",
    "overall_grade": "A",
    "overall_score": 92,
    "region": "Midwest",
    "vibe": "Monuments, Black Hills & 0% Income Tax",
    "statutory_min_wage": "$11.85/ชม. (South Dakota Statutory Minimum Wage 2026)",
    "market_wage_estimate": "ฐาน $13.00 - $16.00 / รวมทิปเฉลี่ย ~$17.00 - $24.50+/ชม.",
    "min_wage": "กม. $11.85 | ฐาน $13-$16 (รวมทิป ~$17-$24.5+)",
    "min_wage_num": 11.85,
    "state_income_tax": "0% (ไม่มีภาษีเงินได้ระดับรัฐ)",
    "tax_rate_num": 0.0,
    "state_sales_tax": "4.2% (+ภาษีท้องถิ่น รวม 6.0-6.5%)",
    "has_no_income_tax": true,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$65 - $100 / สัปดาห์",
    "housing_cost_num": 80,
    "housing_type": "หอพักพนักงานอุทยาน / ลอดจ์ / โมเทล",
    "commute_type": "เดินเท้า / ปั่นจักรยาน / รถรับส่งพนักงาน",
    "grades": {
      "safety": {
        "grade": "A+",
        "score": 98,
        "note": "เมือง Keystone และ Custer มีความปลอดภัยสูงมาก"
      },
      "scenery_friendliness": {
        "grade": "A",
        "score": 92,
        "note": "อนุสรณ์สถาน Mount Rushmore, Crazy Horse, ฝูงไบซันใน Custer State Park"
      },
      "tourism_crowds": {
        "grade": "A",
        "score": 90,
        "note": "นักท่องเที่ยวมาเยือน Mount Rushmore หนาแน่นตลอดซัมเมอร์"
      },
      "earning_job2_tax": {
        "grade": "A",
        "score": 94,
        "note": "0% State Income Tax ภาษีซื้อต่ำ 4.2% ค่าครองชีพและที่พักราคาประหยัด ช่วยเก็บเงินได้ดี"
      },
      "housing_value": {
        "grade": "A+",
        "score": 96,
        "note": "หอพักพนักงานของ Xanterra และรีสอร์ตราคาประหยัดมาก"
      },
      "commute_convenience": {
        "grade": "B+",
        "score": 84,
        "note": "ในเมืองตากอากาศเล็กเดินเท้าถึงกันได้สะดวก"
      },
      "alumni_rating": {
        "grade": "A",
        "score": 90,
        "note": "Mount Rushmore ยิ่งใหญ่ ไม่มีภาษีรัฐ หอพักถูก ปลอดภัย"
      }
    },
    "hotspots": [
      "Keystone (Mount Rushmore)",
      "Custer State Park",
      "Rapid City",
      "Deadwood",
      "Badlands NP"
    ],
    "pros": [
      "สิทธิประโยชน์ปลอดภาษีเงินได้ระดับรัฐ (0% State Income Tax)",
      "ภาษีซื้อระดับรัฐ (State Sales Tax) ต่ำเพียง 4.2%",
      "ที่พักพนักงานราคาประหยัดและมีความปลอดภัยสูง",
      "ได้ทำงานในพื้นที่แลนด์มาร์กระดับโลก Mount Rushmore"
    ],
    "cons": [
      "เมืองขนาดเล็กสไตล์ตะวันตก อยู่ห่างจากเมืองใหญ่",
      "ระบบขนส่งสาธารณะระหว่างเมืองมีจำกัด"
    ],
    "editorial_summary": "เซาท์ดาโคตามีอนุสรณ์สถานแห่งชาติ Mount Rushmore ปลอดภาษีเงินได้ระดับรัฐ (0% Income Tax) ภาษีซื้อต่ำ 4.2% และมีหอพักพนักงานราคาประหยัด เหมาะสำหรับผู้ที่ต้องการความสงบและความปลอดภัยสูง",
    "alumni_quote": "เซาท์ดาโคตามีอนุสรณ์สถานแห่งชาติ Mount Rushmore ปลอดภาษีเงินได้ระดับรัฐ (0% Income Tax) ภาษีซื้อต่ำ 4.2% และมีหอพักพนักงานราคาประหยัด เหมาะสำหรับผู้ที่ต้องการความสงบและความปลอดภัยสูง",
    "best_for": "สายชอบความสงบ ปลอดภัยสูง สิทธิประโยชน์ 0% State Income Tax ที่พักประหยัด และแลนด์มาร์กระดับโลก",
    "source_info": {
      "dol_wage_2026": "$11.85",
      "tax_foundation_2026": "0% Income, 4.2% Sales",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B+",
        "note": "ช่วง มี.ค. - เม.ย. ยังมีหิมะและอากาศหนาวจัด อุทยาน/ลอดจ์บางแห่งเริ่มเปิดรับงานช่วง พ.ค. เหมาะสำหรับผู้ที่ไปปลายสปริง"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วงเวลาทอง (Golden Peak) ของรัฐนี้ อากาศเย็นสบาย (15-25°C) ธรรมชาติสวยที่สุด เรือสำราญและอุทยานเปิด 100%"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) แนะนำสูงสุด",
      "badge": "summer"
    },
    "exact_state_tax_pct": 0.0,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🎉 0% ปลอดภาษีเงินได้รัฐ (ประหยัดได้ 100%)"
  },
  {
    "id": "florida",
    "name": "Florida",
    "code": "FL",
    "nickname": "Sunshine State",
    "tier": "Tier A",
    "overall_grade": "A",
    "overall_score": 91,
    "region": "South",
    "vibe": "Theme Park Capital & Tropical Beaches",
    "statutory_min_wage": "$14.00/ชม. (DOL Statutory Rate 2026 / ปรับเป็น $15.00 วันที่ 30 ก.ย. 2026)",
    "market_wage_estimate": "ฐาน $14.50 - $18.00 / รวมทิปเฉลี่ย ~$18.50 - $26.50+/ชม.",
    "min_wage": "กม. $14.00 | ฐาน $14.5-$18 (รวมทิป ~$18.5-$26.5+)",
    "min_wage_num": 14.5,
    "state_income_tax": "0% (ไม่มีภาษีเงินได้ระดับรัฐ)",
    "tax_rate_num": 0.0,
    "state_sales_tax": "6.0% (+ภาษีท้องถิ่น รวม 7.0-7.5%)",
    "has_no_income_tax": true,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$100 - $150 / สัปดาห์",
    "housing_cost_num": 125,
    "housing_type": "อพาร์ตเมนต์แชร์ / โมเทล / หอพักรีสอร์ต",
    "commute_type": "I-Ride Trolley / Lynx Bus / จักรยาน / เดินเท้า",
    "grades": {
      "safety": {
        "grade": "B+",
        "score": 84,
        "note": "โซนท่องเที่ยวรอบ Disney, Universal และ Key West มีระบบรักษาความปลอดภัยหนาแน่น"
      },
      "scenery_friendliness": {
        "grade": "A",
        "score": 92,
        "note": "ทะเลเขตร้อน ชายหาด สวนสนุกระดับโลก และบรรยากาศสดใส"
      },
      "tourism_crowds": {
        "grade": "A+",
        "score": 99,
        "note": "เมืองท่องเที่ยวระดับโลกที่มีนักท่องเที่ยวหลั่งไหลมาตลอดทั้งปี"
      },
      "earning_job2_tax": {
        "grade": "A+",
        "score": 97,
        "note": "0% State Income Tax ปลอดภาษีเงินได้ + อุปสงค์งานบริการและทิปสูง ค่าครองชีพปานกลาง อาหารหาง่าย"
      },
      "housing_value": {
        "grade": "B",
        "score": 80,
        "note": "มีอพาร์ตเมนต์สำหรับ J-1 และเด็กฝึกงานให้แชร์หลากหลาย"
      },
      "commute_convenience": {
        "grade": "B+",
        "score": 86,
        "note": "ออร์แลนโดมี I-Ride Trolley และ Lynx Bus ส่วน Key West ปั่นจักรยานสะดวก"
      },
      "alumni_rating": {
        "grade": "A+",
        "score": 95,
        "note": "สนุกสนาน ปลอดภาษีเงินได้รัฐ สวนสนุกระดับโลก ทิปดี"
      }
    },
    "hotspots": [
      "Orlando (International Drive / Disney / Universal)",
      "Key West (Duval St)",
      "Panama City Beach",
      "Destin",
      "Miami Beach"
    ],
    "pros": [
      "สิทธิประโยชน์ปลอดภาษีเงินได้ระดับรัฐ (0% State Income Tax)",
      "ค่าแรงขั้นต่ำปรับเป็น $14.00/ชม. (และแตะ $15 ในปลายปี 2026)",
      "อุปสงค์งานภาคบริการและร้านอาหารสูง รับทิปได้ดี",
      "สิทธิ์เที่ยวสวนสนุกระดับโลกหรือราคาพิเศษ"
    ],
    "cons": [
      "หน้าร้อนอากาศร้อนชื้นและมีฝนตกชุกช่วงบ่าย",
      "ออร์แลนโดเป็นเมืองกว้าง ต้องเลือกที่พักตามแนวรถประจำทาง"
    ],
    "editorial_summary": "ฟลอริดาเป็นศูนย์กลางการท่องเที่ยวระดับโลก ปลอดภาษีเงินได้ระดับรัฐ ค่าแรงขั้นต่ำปี 2026 ปรับเป็น $14/ชม. มีตำแหน่งงานภาคบริการหนาแน่นและทิปดี เหมาะสำหรับผู้ที่ชอบบรรยากาศคึกคักและสวนสนุก",
    "alumni_quote": "ฟลอริดาเป็นศูนย์กลางการท่องเที่ยวระดับโลก ปลอดภาษีเงินได้ระดับรัฐ ค่าแรงขั้นต่ำปี 2026 ปรับเป็น $14/ชม. มีตำแหน่งงานภาคบริการหนาแน่นและทิปดี เหมาะสำหรับผู้ที่ชอบบรรยากาศคึกคักและสวนสนุก",
    "best_for": "สายชอบความสนุกสนาน สวนสนุก รักทะเล ทิปดี และต้องการประโยชน์จาก 0% ภาษีเงินได้",
    "source_info": {
      "dol_wage_2026": "$14.00",
      "tax_foundation_2026": "0% Income, 6% Sales",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A+",
        "note": "สภาพอากาศอบอุ่น มีนักท่องเที่ยว Spring Break ตั้งแต่ มี.ค. สวนสนุกและร้านอาหารเปิดบริการเต็มที่ตั้งแต่ต้นซีซัน"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "นักท่องเที่ยวซัมเมอร์หนาแน่นมาก อากาศร้อนชื้นหรือแดดแรงช่วง ก.ค.-ส.ค. ชั่วโมงงานและทิปสูง"
      },
      "best_season": "Spring & Summer (ดีเยี่ยมทั้ง 2 ช่วง)",
      "badge": "both"
    },
    "exact_state_tax_pct": 0.0,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🎉 0% ปลอดภาษีเงินได้รัฐ (ประหยัดได้ 100%)"
  },
  {
    "id": "new_jersey",
    "name": "New Jersey",
    "code": "NJ",
    "nickname": "Garden State",
    "tier": "Tier A",
    "overall_grade": "A",
    "overall_score": 91,
    "region": "East Coast",
    "vibe": "Shore Boardwalk & Pier Amusement",
    "statutory_min_wage": "$15.92/ชม. (New Jersey Statutory Minimum Wage 2026)",
    "market_wage_estimate": "ฐาน $16.00 - $18.00 / รวมทิปเฉลี่ย ~$20.00 - $26.50+/ชม.",
    "min_wage": "กม. $15.92 | ฐาน $16-$18 (รวมทิป ~$20-$26.5+)",
    "min_wage_num": 15.92,
    "state_income_tax": "1.4% - 6.37% (ตามขั้นบันได)",
    "tax_rate_num": 0.013999999999999999,
    "state_sales_tax": "6.625% (เสื้อผ้าและรองเท้าปลอดภาษี 0%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": true,
    "avg_housing_cost": "$110 - $165 / สัปดาห์",
    "housing_cost_num": 135,
    "housing_type": "แชร์บ้านพักตากอากาศ / โมเทลริมหาด",
    "commute_type": "ปั่นจักรยาน 100% / เดินเท้า / NJ Transit Bus",
    "grades": {
      "safety": {
        "grade": "A-",
        "score": 88,
        "note": "Wildwood, Cape May และ Ocean City NJ มีตำรวจตรวจตราหนาแน่น"
      },
      "scenery_friendliness": {
        "grade": "A",
        "score": 90,
        "note": "บอร์ดวอล์กไม้ริมหาดยาวหลายไมล์ สวนสนุก Morey's Piers บ้านสไตล์วิกตอเรียน"
      },
      "tourism_crowds": {
        "grade": "A+",
        "score": 98,
        "note": "เมืองตากอากาศชายหาดยอดนิยม คนแน่นคึกคักตลอดซัมเมอร์"
      },
      "earning_job2_tax": {
        "grade": "A+",
        "score": 96,
        "note": "ค่าแรง $15.92/ชม. เสื้อผ้าปลอดภาษี 0% งานสวนสนุก Morey's Piers มั่นคง ค่าครองชีพปานกลาง"
      },
      "housing_value": {
        "grade": "B-",
        "score": 74,
        "note": "บ้านพัก J-1 มีเยอะ ควรแชร์หลายคนเพื่อความคุ้มค่า"
      },
      "commute_convenience": {
        "grade": "A",
        "score": 92,
        "note": "ปั่นจักรยานเลียบหาดสะดวก 100% มีเลนจักรยานตลอดแนว"
      },
      "alumni_rating": {
        "grade": "A",
        "score": 92,
        "note": "Morey's Piers สนุก ค่าแรง $15.92 ปั่นจักรยานเลียบหาด เสื้อผ้าปลอดภาษี"
      }
    },
    "hotspots": [
      "Wildwood (Morey's Piers / Boardwalk)",
      "Cape May",
      "Ocean City NJ",
      "Point Pleasant Beach"
    ],
    "pros": [
      "ค่าแรงขั้นต่ำสูงถึง $15.92/ชม. ในปี 2026",
      "เสื้อผ้าและรองเท้าได้รับการยกเว้นภาษีซื้อ 100% (0% Sales Tax on Clothing & Footwear)",
      "Morey's Piers สวนสนุกริมหาดขนาดใหญ่ ชั่วโมงงานหลักมั่นคง",
      "ปั่นจักรยานไปทำงานริมหาดสะดวก ปลอดภัย",
      "ใกล้ Philadelphia และ New York City เดินทางเที่ยวง่าย"
    ],
    "cons": [
      "เมืองคึกคักและคนแน่นมากตลอดซัมเมอร์",
      "ต้องดูแลล็อคจักรยานให้เรียบร้อย"
    ],
    "editorial_summary": "นิวเจอร์ซีย์และหาด Wildwood มีค่าแรงขั้นต่ำปี 2026 สูงถึง $15.92/ชม. สวนสนุก Morey's Piers มีชั่วโมงงานมั่นคง เสื้อผ้าและรองเท้าปลอดภาษีซื้อ ปั่นจักรยานเลียบหาดสะดวก และเดินทางเข้านครนิวยอร์กได้ง่าย",
    "alumni_quote": "นิวเจอร์ซีย์และหาด Wildwood มีค่าแรงขั้นต่ำปี 2026 สูงถึง $15.92/ชม. สวนสนุก Morey's Piers มีชั่วโมงงานมั่นคง เสื้อผ้าและรองเท้าปลอดภาษีซื้อ ปั่นจักรยานเลียบหาดสะดวก และเดินทางเข้านครนิวยอร์กได้ง่าย",
    "best_for": "สายชอบสวนสนุกริมหาด บอร์ดวอล์กคึกคัก ค่าแรงสูง $15.92 ปั่นจักรยานง่าย เสื้อผ้าปลอดภาษี และเที่ยว NYC ง่าย",
    "source_info": {
      "dol_wage_2026": "$15.92",
      "tax_foundation_2026": "1.4-6.37%, 0% Clothing Sales",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A-",
        "note": "ช่วง มี.ค.-เม.ย. อากาศเริ่มอุ่นขึ้น สวนสนุกในร่ม/เมืองเปิดปกติ สวนน้ำกลางแจ้งและบอร์ดวอล์กเปิดเต็มที่ปลาย พ.ค. (Memorial Day)"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วง High Season สูงสุด นักท่องเที่ยวหลายล้านคน สวนน้ำและชายหาดเปิด 100% โอกาสทำ OT และงานเสริมหนาแน่นที่สุด"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) หรือ ปลาย Spring",
      "badge": "summer"
    },
    "exact_state_tax_pct": 1.4,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 1.40% (ฐานขั้นแรก $0-$20,000 แค่ 1.4%)"
  },
  {
    "id": "new_york",
    "name": "New York",
    "code": "NY",
    "nickname": "Empire State",
    "tier": "Tier A",
    "overall_grade": "A",
    "overall_score": 91,
    "region": "East Coast",
    "vibe": "Adirondack Lake Resort & Upstate Nature",
    "statutory_min_wage": "$16.00 - $17.00/ชม. ($17.00 NYC / $16.00 Remainder of State)",
    "market_wage_estimate": "ฐาน $16.00 - $18.50 / รวมทิปเฉลี่ย ~$20.00 - $27.00+/ชม.",
    "min_wage": "กม. $17.00 | ฐาน $16-$18.5 (รวมทิป ~$20-$27+)",
    "min_wage_num": 16.0,
    "state_income_tax": "4.0% - 6.85% (ตามขั้นบันได)",
    "tax_rate_num": 0.042,
    "state_sales_tax": "4.0% (+ภาษีท้องถิ่น รวม 8.0-8.875%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$120 - $200 / สัปดาห์",
    "housing_cost_num": 155,
    "housing_type": "หอพักพนักงานรีสอร์ต / เคบิน / แชร์บ้าน",
    "commute_type": "เดินเท้า / ปั่นจักรยาน / GGFT Trolley / รถไฟ LIRR",
    "grades": {
      "safety": {
        "grade": "A",
        "score": 90,
        "note": "โซนรีสอร์ต Lake George, Hamptons และ Montauk มีความปลอดภัยสูง"
      },
      "scenery_friendliness": {
        "grade": "A+",
        "score": 96,
        "note": "ทะเลสาบ Lake George ล้อมรอบด้วยภูเขา Adirondack สวยงามสะกดตา"
      },
      "tourism_crowds": {
        "grade": "A+",
        "score": 96,
        "note": "เมืองตากอากาศหนาแน่นด้วยนักท่องเที่ยวจาก NYC และแคนาดา"
      },
      "earning_job2_tax": {
        "grade": "A+",
        "score": 96,
        "note": "ค่าแรงสูง $16-17/ชม. ทิปดี งานบริการหนาแน่น ค่าครองชีพโซนรีสอร์ตค่อนข้างสูงแต่มีรายได้ชดเชย"
      },
      "housing_value": {
        "grade": "B-",
        "score": 72,
        "note": "ค่าที่พักโซนรีสอร์ตค่อนข้างสูง (แนะนำให้เลือกงานที่มีหอพัก)"
      },
      "commute_convenience": {
        "grade": "A-",
        "score": 88,
        "note": "Lake George มีรถ Trolley วิ่งรับส่งทั่วเมือง และปั่นจักรยานสะดวก"
      },
      "alumni_rating": {
        "grade": "A",
        "score": 92,
        "note": "Lake George สวยงาม ค่าแรง $16-17 เดินทางเข้านครนิวยอร์กสะดวก"
      }
    },
    "hotspots": [
      "Lake George (Adirondacks / Six Flags Great Escape)",
      "The Hamptons & Montauk (Long Island)",
      "Niagara Falls",
      "Coney Island"
    ],
    "pros": [
      "ค่าแรงขั้นต่ำสูง $16.00 - $17.00/ชม. ในปี 2026",
      "Lake George เป็นเมืองรีสอร์ตริมทะเลสาบที่สวยงามและคึกคัก ปลอดภัยสูง",
      "เดินทางเข้านคร New York City (NYC) ได้สะดวกในวันหยุด",
      "มีอุปสงค์แรงงานบริการและร้านอาหารสูง"
    ],
    "cons": [
      "ค่าครองชีพและภาษีค่อนข้างสูง",
      "ค่าบ้านเช่าใน Long Island / Hamptons มีราคาสูง"
    ],
    "editorial_summary": "นิวยอร์กมีค่าแรงขั้นต่ำปี 2026 ปรับเป็น $16.00-17.00/ชม. เมืองตากอากาศริมทะเลสาบอย่าง Lake George มีทิวทัศน์ภูเขา Adirondack ที่สวยงาม ปลอดภัย และเดินทางเข้านครนิวยอร์กได้สะดวก",
    "alumni_quote": "นิวยอร์กมีค่าแรงขั้นต่ำปี 2026 ปรับเป็น $16.00-17.00/ชม. เมืองตากอากาศริมทะเลสาบอย่าง Lake George มีทิวทัศน์ภูเขา Adirondack ที่สวยงาม ปลอดภัย และเดินทางเข้านครนิวยอร์กได้สะดวก",
    "best_for": "สายอยากได้ค่าแรงสูง $16-17 ชอบธรรมชาติทะเลสาบ และอยากเดินทางเข้านครนิวยอร์กง่าย",
    "source_info": {
      "dol_wage_2026": "$16.00-17.00",
      "tax_foundation_2026": "4.0-6.85%",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A-",
        "note": "ช่วง มี.ค.-เม.ย. อากาศเริ่มอุ่นขึ้น สวนสนุกในร่ม/เมืองเปิดปกติ สวนน้ำกลางแจ้งและบอร์ดวอล์กเปิดเต็มที่ปลาย พ.ค. (Memorial Day)"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วง High Season สูงสุด นักท่องเที่ยวหลายล้านคน สวนน้ำและชายหาดเปิด 100% โอกาสทำ OT และงานเสริมหนาแน่นที่สุด"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) หรือ ปลาย Spring",
      "badge": "summer"
    },
    "exact_state_tax_pct": 4.2,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 4.20% (ตามขั้นบันได NY State)"
  },
  {
    "id": "pennsylvania",
    "name": "Pennsylvania",
    "code": "PA",
    "nickname": "Keystone State",
    "tier": "Tier A",
    "overall_grade": "A",
    "overall_score": 91,
    "region": "East Coast",
    "vibe": "Poconos Resort, Kalahari & Low Flat Tax",
    "statutory_min_wage": "$7.25/ชม. (Federal Minimum Wage)",
    "market_wage_estimate": "ฐาน $13.50 - $17.00 / รวมทิปเฉลี่ย ~$17.50 - $25.50+/ชม.",
    "min_wage": "กม. $7.25 | ฐาน $13.5-$17 (รวมทิป ~$17.5-$25.5+)",
    "min_wage_num": 14.5,
    "state_income_tax": "3.07% (Flat Rate ต่ำ + ภาษีท้องถิ่น EIT 1-2%)",
    "tax_rate_num": 0.030699999999999998,
    "state_sales_tax": "6.0% (เสื้อผ้าและรองเท้าปลอดภาษี 0%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": true,
    "avg_housing_cost": "$85 - $125 / สัปดาห์",
    "housing_cost_num": 105,
    "housing_type": "หอพักพนักงาน Kalahari / โมเทล / แชร์บ้าน",
    "commute_type": "รถรับส่งพนักงาน (Shuttle) / เดินเท้า / จักรยาน",
    "grades": {
      "safety": {
        "grade": "A",
        "score": 92,
        "note": "เทือกเขา Poconos และเมือง Hershey มีความปลอดภัยสูง"
      },
      "scenery_friendliness": {
        "grade": "A-",
        "score": 88,
        "note": "เทือกเขา Poconos ทะเลสาบ น้ำตก สวนน้ำในร่ม Kalahari ช็อกโกแลต Hershey"
      },
      "tourism_crowds": {
        "grade": "A",
        "score": 92,
        "note": "นักท่องเที่ยวจากนิวยอร์กและฟิลาเดลเฟียมาพักผ่อนตลอดปี"
      },
      "earning_job2_tax": {
        "grade": "A",
        "score": 94,
        "note": "ภาษีเงินได้คงที่ต่ำ 3.07% เสื้อผ้าปลอดภาษี 0% สวนน้ำ Kalahari งานมั่นคง ค่าครองชีพปานกลาง"
      },
      "housing_value": {
        "grade": "A-",
        "score": 88,
        "note": "Kalahari Resort Poconos มีหอพักพนักงานและรถรับส่งพร้อม"
      },
      "commute_convenience": {
        "grade": "B+",
        "score": 86,
        "note": "มีรถชัตเติลรับส่งพนักงานระหว่างหอพักกับรีสอร์ต"
      },
      "alumni_rating": {
        "grade": "A",
        "score": 92,
        "note": "Kalahari Poconos สะดวก ภาษีรัฐต่ำ เสื้อผ้าไม่เสียภาษี ใกล้นิวยอร์ก"
      }
    },
    "hotspots": [
      "Poconos (Kalahari Resort / Camelback)",
      "Hershey (Hersheypark)",
      "Erie (Waldameer Park)",
      "Lancaster"
    ],
    "pros": [
      "ภาษีเงินได้รัฐแบบคงที่ต่ำมากเพียง 3.07%",
      "เสื้อผ้าและรองเท้าได้รับการยกเว้นภาษีซื้อ 100% (0% Sales Tax on Apparel)",
      "Kalahari Resort Poconos สวนน้ำในร่มยักษ์ใหญ่ มีหอพักและรถรับส่งพร้อม",
      "ใกล้นคร New York City และ Philadelphia เดินทางเที่ยวง่าย"
    ],
    "cons": [
      "หากไม่มีรถรับส่งของนายจ้าง การเดินทางระหว่างเมืองต้องแชร์รถ"
    ],
    "editorial_summary": "เพนซิลเวเนียมีจุดเด่นเรื่องภาษีเงินได้รัฐแบบคงที่ต่ำ 3.07% เสื้อผ้าปลอดภาษีซื้อ สวนน้ำในร่ม Kalahari ในเทือกเขา Poconos มีหอพักและรถรับส่งพร้อม และอยู่ใกล้นครนิวยอร์ก",
    "alumni_quote": "เพนซิลเวเนียมีจุดเด่นเรื่องภาษีเงินได้รัฐแบบคงที่ต่ำ 3.07% เสื้อผ้าปลอดภาษีซื้อ สวนน้ำในร่ม Kalahari ในเทือกเขา Poconos มีหอพักและรถรับส่งพร้อม และอยู่ใกล้นครนิวยอร์ก",
    "best_for": "สายชอบทำงานรีสอร์ต/สวนน้ำ Kalahari ที่พักพร้อม ภาษีต่ำ เสื้อผ้าปลอดภาษี และเที่ยวนิวยอร์กง่าย",
    "source_info": {
      "dol_wage_2026": "$7.25",
      "tax_foundation_2026": "3.07% Flat, 0% Clothing Sales",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A-",
        "note": "ช่วง มี.ค.-เม.ย. อากาศเริ่มอุ่นขึ้น สวนสนุกในร่ม/เมืองเปิดปกติ สวนน้ำกลางแจ้งและบอร์ดวอล์กเปิดเต็มที่ปลาย พ.ค. (Memorial Day)"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วง High Season สูงสุด นักท่องเที่ยวหลายล้านคน สวนน้ำและชายหาดเปิด 100% โอกาสทำ OT และงานเสริมหนาแน่นที่สุด"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) หรือ ปลาย Spring",
      "badge": "summer"
    },
    "exact_state_tax_pct": 3.07,
    "exact_local_tax_pct": 1.5,
    "exact_tax_note": "🏛️ ภาษีรัฐ 3.07% (Flat Rate) + ภาษีท้องถิ่น EIT ~1.50%"
  },
  {
    "id": "virginia",
    "name": "Virginia",
    "code": "VA",
    "nickname": "Old Dominion State",
    "tier": "Tier A",
    "overall_grade": "A",
    "overall_score": 91,
    "region": "East Coast",
    "vibe": "Boardwalk Beach, History & Theme Park",
    "statutory_min_wage": "$12.77/ชม. (Virginia Statutory Minimum Wage 2026)",
    "market_wage_estimate": "ฐาน $13.50 - $16.50 / รวมทิปเฉลี่ย ~$17.50 - $25.00+/ชม.",
    "min_wage": "กม. $12.77 | ฐาน $13.5-$16.5 (รวมทิป ~$17.5-$25+)",
    "min_wage_num": 12.77,
    "state_income_tax": "2.0% - 5.75% (ตามขั้นบันได)",
    "tax_rate_num": 0.042,
    "state_sales_tax": "5.3% (+ภาษีท้องถิ่น รวม 6.0%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$100 - $145 / สัปดาห์",
    "housing_cost_num": 125,
    "housing_type": "แชร์บ้านพักตากอากาศ / โมเทลริมหาด",
    "commute_type": "ปั่นจักรยาน 100% (มีเลนจักรยานเลียบหาด) / The Wave Bus / เดินเท้า",
    "grades": {
      "safety": {
        "grade": "A-",
        "score": 88,
        "note": "Virginia Beach Oceanfront มีตำรวจสายตรวจและกล้องวงจรปิดหนาแน่น"
      },
      "scenery_friendliness": {
        "grade": "A",
        "score": 90,
        "note": "หาดทรายกว้าง บอร์ดวอล์กปูนกว้าง 3 ไมล์ รูปปั้นเนปจูน สวนสนุก Busch Gardens"
      },
      "tourism_crowds": {
        "grade": "A+",
        "score": 95,
        "note": "เมืองตากอากาศยอดนิยมตลอดซัมเมอร์"
      },
      "earning_job2_tax": {
        "grade": "A+",
        "score": 96,
        "note": "ค่าแรง $12.77 งานบริการบน Atlantic Ave หนาแน่น ปั่นจักรยานสะดวก ค่าครองชีพปานกลาง อาหารหาง่าย"
      },
      "housing_value": {
        "grade": "B",
        "score": 80,
        "note": "บ้านพัก J-1 ริมหาดมีให้เลือกหลากหลาย แชร์กับเพื่อนคุ้มค่า"
      },
      "commute_convenience": {
        "grade": "A",
        "score": 94,
        "note": "ทางจักรยานริมหาดกว้างและแยกจากทางเท้า ปั่นสะดวก มีรถบัส The Wave"
      },
      "alumni_rating": {
        "grade": "A",
        "score": 92,
        "note": "Virginia Beach ปั่นจักรยานเลียบหาดสะดวก มีงานบริการรองรับ ใกล้ DC"
      }
    },
    "hotspots": [
      "Virginia Beach (Oceanfront Boardwalk / Atlantic Ave)",
      "Williamsburg (Busch Gardens)",
      "Shenandoah NP"
    ],
    "pros": [
      "Virginia Beach มีเลนจักรยานริมหาดแยกจากทางเท้า ปั่นจักรยานไปทำงานปลอดภัยและสะดวกมาก",
      "อุปสงค์แรงงานภาคบริการและร้านอาหารบนถนน Atlantic Avenue สูง",
      "Busch Gardens Williamsburg สวนสนุกธีมยุโรปที่สวยงาม",
      "ใกล้ Washington D.C. เดินทางไปเที่ยวสะดวก"
    ],
    "cons": [
      "ต้องดูแลล็อคจักรยานให้ดีในจุดพลุกพล่าน",
      "แดดหน้าร้อนแรง"
    ],
    "editorial_summary": "เวอร์จิเนียมีเมืองตากอากาศชายหาด Virginia Beach ที่มีเลนจักรยานริมหาดที่ดีเยี่ยม อุปสงค์งานบริการหนาแน่น ค่าแรงขั้นต่ำปรับเป็น $12.77/ชม. ในปี 2026 และอยู่ใกล้วอชิงตัน ดี.ซี.",
    "alumni_quote": "เวอร์จิเนียมีเมืองตากอากาศชายหาด Virginia Beach ที่มีเลนจักรยานริมหาดที่ดีเยี่ยม อุปสงค์งานบริการหนาแน่น ค่าแรงขั้นต่ำปรับเป็น $12.77/ชม. ในปี 2026 และอยู่ใกล้วอชิงตัน ดี.ซี.",
    "best_for": "สายชอบชายหาด ปั่นจักรยานเลียบหาดสะดวก มีงานบริการหลากหลาย และอยากเที่ยววอชิงตัน ดี.ซี. ง่าย",
    "source_info": {
      "dol_wage_2026": "$12.77",
      "tax_foundation_2026": "2.0-5.75%, 5.3% Sales",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A-",
        "note": "ช่วง มี.ค.-เม.ย. อากาศเริ่มอุ่นขึ้น สวนสนุกในร่ม/เมืองเปิดปกติ สวนน้ำกลางแจ้งและบอร์ดวอล์กเปิดเต็มที่ปลาย พ.ค. (Memorial Day)"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วง High Season สูงสุด นักท่องเที่ยวหลายล้านคน สวนน้ำและชายหาดเปิด 100% โอกาสทำ OT และงานเสริมหนาแน่นที่สุด"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) หรือ ปลาย Spring",
      "badge": "summer"
    },
    "exact_state_tax_pct": 4.2,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: ~4.20% (ตามขั้นบันได)"
  },
  {
    "id": "washington",
    "name": "Washington",
    "code": "WA",
    "nickname": "Evergreen State",
    "tier": "Tier A",
    "overall_grade": "A",
    "overall_score": 91,
    "region": "West Coast",
    "vibe": "Bavarian Village, Cascades & Highest Wage",
    "statutory_min_wage": "$17.13/ชม. (Washington Statewide Statutory Wage 2026)",
    "market_wage_estimate": "ฐาน $17.13 - $19.50 / รวมทิปเฉลี่ย ~$21.13 - $28.00+/ชม.",
    "min_wage": "กม. $17.13 | ฐาน $17.13-$19.5 (รวมทิป ~$21.13-$28+)",
    "min_wage_num": 17.13,
    "state_income_tax": "0% (ไม่มีภาษีเงินได้จากการทำงาน)",
    "tax_rate_num": 0.0,
    "state_sales_tax": "6.5% (+ภาษีท้องถิ่น รวม 8.5-10.5%)",
    "has_no_income_tax": true,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$130 - $180 / สัปดาห์",
    "housing_cost_num": 155,
    "housing_type": "แชร์บ้านเช่า / หอพักรีสอร์ต / เคบิน",
    "commute_type": "เดินเท้า / ปั่นจักรยาน / Link Transit (รถเมล์ฟรีใน Chelan County)",
    "grades": {
      "safety": {
        "grade": "A+",
        "score": 96,
        "note": "หมู่บ้านบาวาเรียน Leavenworth มีความปลอดภัยสูงมาก"
      },
      "scenery_friendliness": {
        "grade": "A+",
        "score": 98,
        "note": "หมู่บ้านสไตล์เยอรมันท่ามกลางเทือกเขา Cascade ภูเขาไฟ Rainier ป่าฝน Olympic"
      },
      "tourism_crowds": {
        "grade": "A",
        "score": 92,
        "note": "นักท่องเที่ยวมาสัมผัสบรรยากาศยุโรปหนาแน่น"
      },
      "earning_job2_tax": {
        "grade": "A+",
        "score": 98,
        "note": "ค่าแรงขั้นต่ำสูงสุดในสหรัฐฯ $17.13/ชม. + 0% State Income Tax ค่าครองชีพค่อนข้างสูงแต่ชดเชยด้วยค่าแรง"
      },
      "housing_value": {
        "grade": "C+",
        "score": 68,
        "note": "ค่าที่พักค่อนข้างสูงตามมาตรฐานเวสต์โคสต์"
      },
      "commute_convenience": {
        "grade": "A-",
        "score": 88,
        "note": "Leavenworth เดินเท้าถึงกันได้หมด และมี Link Transit รถบัสฟรีในเคาน์ตี"
      },
      "alumni_rating": {
        "grade": "A-",
        "score": 88,
        "note": "ค่าแรง $17.13 สูงที่สุด ไม่มีภาษีเงินได้รัฐ เมืองสวยเหมือนเยอรมนี"
      }
    },
    "hotspots": [
      "Leavenworth (Bavarian Village)",
      "San Juan Islands",
      "Mount Rainier NP",
      "Olympic NP",
      "Lake Chelan"
    ],
    "pros": [
      "ค่าแรงขั้นต่ำต่อชั่วโมงสูงที่สุดในสหรัฐอเมริกา ($17.13/ชม.) ในปี 2026",
      "ไม่มีภาษีเงินได้รัฐจากการทำงาน (0% State Earned Income Tax)",
      "หมู่บ้าน Leavenworth สวยงามสไตล์บาวาเรีย ประเทศเยอรมนี",
      "Link Transit รถบัสสาธารณะบริการฟรีในพื้นที่ Chelan County"
    ],
    "cons": [
      "ค่าที่พักและค่าครองชีพค่อนข้างสูง",
      "ต้องเตรียมการเรื่องที่พักล่วงหน้า"
    ],
    "editorial_summary": "วอชิงตันมีอัตราค่าแรงขั้นต่ำปี 2026 สูงที่สุดในสหรัฐฯ ($17.13/ชม.) และปลอดภาษีเงินได้รัฐจากการทำงาน (0% Earned Income Tax) เมืองตากอากาศ Leavenworth มีสถาปัตยกรรมสไตล์เยอรมันและมีรถบัสฟรีในพื้นที่",
    "alumni_quote": "วอชิงตันมีอัตราค่าแรงขั้นต่ำปี 2026 สูงที่สุดในสหรัฐฯ ($17.13/ชม.) และปลอดภาษีเงินได้รัฐจากการทำงาน (0% Earned Income Tax) เมืองตากอากาศ Leavenworth มีสถาปัตยกรรมสไตล์เยอรมันและมีรถบัสฟรีในพื้นที่",
    "best_for": "สายเน้นค่าแรงต่อชั่วโมงสูงที่สุดในประเทศ ($17.13+) 0% ภาษีเงินได้ และชอบเมืองสไตล์ยุโรป",
    "source_info": {
      "dol_wage_2026": "$17.13",
      "tax_foundation_2026": "0% Earned Income",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B+",
        "note": "ช่วง มี.ค. - เม.ย. ยังมีหิมะและอากาศหนาวจัด อุทยาน/ลอดจ์บางแห่งเริ่มเปิดรับงานช่วง พ.ค. เหมาะสำหรับผู้ที่ไปปลายสปริง"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วงเวลาทอง (Golden Peak) ของรัฐนี้ อากาศเย็นสบาย (15-25°C) ธรรมชาติสวยที่สุด เรือสำราญและอุทยานเปิด 100%"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) แนะนำสูงสุด",
      "badge": "summer"
    },
    "exact_state_tax_pct": 0.0,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🎉 0% ปลอดภาษีเงินได้จากค่าจ้าง (ประหยัดได้ 100%)"
  },
  {
    "id": "arizona",
    "name": "Arizona",
    "code": "AZ",
    "nickname": "Grand Canyon State",
    "tier": "Tier A",
    "overall_grade": "A",
    "overall_score": 90,
    "region": "Mountain West",
    "vibe": "Canyons & Red Rock Desert",
    "statutory_min_wage": "$15.15/ชม. (Arizona Statutory Minimum Wage 2026)",
    "market_wage_estimate": "ฐาน $15.15 - $17.50 / รวมทิปเฉลี่ย ~$19.15 - $26.00+/ชม.",
    "min_wage": "กม. $15.15 | ฐาน $15.15-$17.5 (รวมทิป ~$19.15-$26+)",
    "min_wage_num": 15.15,
    "state_income_tax": "2.5% (อัตราคงที่ Flat Rate ต่ำ)",
    "tax_rate_num": 0.025,
    "state_sales_tax": "5.6% (+ภาษีท้องถิ่น รวม 8.0-9.5%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$70 - $110 / สัปดาห์",
    "housing_cost_num": 90,
    "housing_type": "หอพักพนักงานอุทยาน / บ้านเช่า",
    "commute_type": "รถบัสอุทยานฟรี / เดินเท้า / ปั่นจักรยาน",
    "grades": {
      "safety": {
        "grade": "A+",
        "score": 96,
        "note": "ในพื้นที่อุทยาน Grand Canyon และเมืองท่องเที่ยวมีความปลอดภัยสูง"
      },
      "scenery_friendliness": {
        "grade": "A+",
        "score": 96,
        "note": "ทิวทัศน์ระดับโลก Grand Canyon, หินแดง Sedona, Antelope Canyon"
      },
      "tourism_crowds": {
        "grade": "A",
        "score": 90,
        "note": "นักท่องเที่ยวจากทั่วโลกหลายล้านคนเดินทางมาตลอดซัมเมอร์"
      },
      "earning_job2_tax": {
        "grade": "B+",
        "score": 84,
        "note": "ค่าแรงขั้นต่ำ $15.15+ ภาษีรัฐคงที่ต่ำ 2.5% ค่าครองชีพในเมืองอุทยานมีหอพักราคาประหยัดรองรับ"
      },
      "housing_value": {
        "grade": "A",
        "score": 92,
        "note": "ที่พักนายจ้างอุทยาน (Xanterra / Delaware North) ราคาประหยัด"
      },
      "commute_convenience": {
        "grade": "B+",
        "score": 86,
        "note": "มีรถชัตเติลบัสบริการฟรีภายในอุทยาน Grand Canyon"
      },
      "alumni_rating": {
        "grade": "A-",
        "score": 88,
        "note": "วิวสวยสะกดใจทุกวัน หอพักราคาประหยัด ปลอดภัย อากาศกลางวันค่อนข้างร้อน"
      }
    },
    "hotspots": [
      "Grand Canyon South Rim (Tusayan / Grand Canyon Village)",
      "Page (Lake Powell / Antelope Canyon)",
      "Sedona"
    ],
    "pros": [
      "ได้ทำงานในพื้นที่แลนด์มาร์กระดับโลก แกรนด์แคนยอน",
      "ค่าแรงขั้นต่ำปรับขึ้นเป็น $15.15/ชม. และภาษีเงินได้รัฐคงที่ต่ำ 2.5%",
      "ที่พักนายจ้างราคาประหยัด พร้อมรถชัตเติลบัสฟรีในอุทยาน"
    ],
    "cons": [
      "อากาศกลางวันหน้าร้อนค่อนข้างร้อนและแห้ง (35-40 °C)",
      "ห่างไกลจากห้างสรรพสินค้าใหญ่ สัญญาณมือถือบางจุดจำกัด"
    ],
    "editorial_summary": "แกรนด์แคนยอนและแอริโซนาตอนเหนือให้ประสบการณ์ธรรมชาติที่ตระการตา ค่าแรงขั้นต่ำปี 2026 ปรับเป็น $15.15/ชม. และภาษีรัฐต่ำ 2.5% มีหอพักนายจ้างและรถชัตเติลบัสฟรี ช่วยลดภาระค่าเดินทาง",
    "alumni_quote": "แกรนด์แคนยอนและแอริโซนาตอนเหนือให้ประสบการณ์ธรรมชาติที่ตระการตา ค่าแรงขั้นต่ำปี 2026 ปรับเป็น $15.15/ชม. และภาษีรัฐต่ำ 2.5% มีหอพักนายจ้างและรถชัตเติลบัสฟรี ช่วยลดภาระค่าเดินทาง",
    "best_for": "สายชอบธรรมชาติอลังการ ถ่ายรูป เดินป่า และต้องการที่พักนายจ้างพร้อมรถรับส่ง",
    "source_info": {
      "dol_wage_2026": "$15.15",
      "tax_foundation_2026": "2.5% Flat",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A+",
        "note": "สภาพอากาศอบอุ่น มีนักท่องเที่ยว Spring Break ตั้งแต่ มี.ค. สวนสนุกและร้านอาหารเปิดบริการเต็มที่ตั้งแต่ต้นซีซัน"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A",
        "note": "นักท่องเที่ยวซัมเมอร์หนาแน่นมาก อากาศร้อนชื้นหรือแดดแรงช่วง ก.ค.-ส.ค. ชั่วโมงงานและทิปสูง"
      },
      "best_season": "Spring & Summer (ดีเยี่ยมทั้ง 2 ช่วง)",
      "badge": "both"
    },
    "exact_state_tax_pct": 2.5,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 2.50% (Flat Rate)"
  },
  {
    "id": "delaware",
    "name": "Delaware",
    "code": "DE",
    "nickname": "First State",
    "tier": "Tier A",
    "overall_grade": "A",
    "overall_score": 90,
    "region": "East Coast",
    "vibe": "Tax-Free Coastal Resort",
    "statutory_min_wage": "$15.00/ชม. (DOL Statutory Rate 2026)",
    "market_wage_estimate": "ฐาน $15.00 - $17.50 / รวมทิปเฉลี่ย ~$19.00 - $26.00+/ชม.",
    "min_wage": "กม. $15.00 | ฐาน $15-$17.5 (รวมทิป ~$19-$26+)",
    "min_wage_num": 15.0,
    "state_income_tax": "2.2% - 5.5% (ตามขั้นบันได)",
    "tax_rate_num": 0.032,
    "state_sales_tax": "0% (ไม่มีภาษีซื้อระดับรัฐ 0% Sales Tax)",
    "has_no_income_tax": false,
    "has_no_sales_tax": true,
    "has_clothing_tax_exemption": true,
    "avg_housing_cost": "$100 - $150 / สัปดาห์",
    "housing_cost_num": 125,
    "housing_type": "แชร์บ้านเช่า J-1 / โมเทล",
    "commute_type": "DART First State Bus / ปั่นจักรยาน / เดินเท้า",
    "grades": {
      "safety": {
        "grade": "A",
        "score": 92,
        "note": "Rehoboth Beach และ Bethany Beach มีความปลอดภัยสูง บรรยากาศครอบครัว"
      },
      "scenery_friendliness": {
        "grade": "A",
        "score": 90,
        "note": "ชายหาดสวยงาม บอร์ดวอล์กไม้คลาสสิก เมืองสะอาด"
      },
      "tourism_crowds": {
        "grade": "A",
        "score": 92,
        "note": "นักท่องเที่ยวมาพักผ่อนและช้อปปิ้งปลอดภาษีหนาแน่น"
      },
      "earning_job2_tax": {
        "grade": "A",
        "score": 94,
        "note": "สิทธิประโยชน์ 0% Sales Tax ช้อปปิ้งปลอดภาษี + ค่าแรง $15.00 + ค่าครองชีพปานกลาง งานร้านอาหารเยอะ"
      },
      "housing_value": {
        "grade": "B",
        "score": 78,
        "note": "ค่าที่พักปานกลาง แชร์บ้านกับเพื่อนร่วมโครงการ"
      },
      "commute_convenience": {
        "grade": "A-",
        "score": 88,
        "note": "มีรถบัส DART Beach Bus เลียบหาด และปั่นจักรยานสะดวก"
      },
      "alumni_rating": {
        "grade": "A",
        "score": 90,
        "note": "ช้อปปิ้งปลอดภาษี ชายหาดสวย ปลอดภัย การเดินทางสะดวก"
      }
    },
    "hotspots": [
      "Rehoboth Beach (Boardwalk & Outlets)",
      "Bethany Beach",
      "Dewey Beach",
      "Lewes"
    ],
    "pros": [
      "สิทธิประโยชน์ 0% State Sales Tax ช้อปปิ้งสินค้าทุกชนิดไม่มีภาษีซื้อ",
      "ค่าแรงขั้นต่ำ $15.00/ชม. ในปี 2026",
      "เมืองชายหาดสะอาด ปลอดภัย เดินทางสะดวกด้วย Beach Bus",
      "มีห้าง Tanger Outlets ขนาดใหญ่"
    ],
    "cons": [
      "ภาษีเงินได้รัฐระดับปานกลาง",
      "ที่พัก J-1 ต้องวางแผนจองล่วงหน้า"
    ],
    "editorial_summary": "เดลาแวร์เป็นรัฐชายหาดฝั่งตะวันออกที่โดดเด่นเรื่อง 0% Sales Tax ช้อปปิ้งไม่มีภาษี ค่าแรงขั้นต่ำปรับเป็น $15.00/ชม. ชายหาด Rehoboth ปลอดภัยและเดินทางสะดวกด้วยระบบรถบัส DART",
    "alumni_quote": "เดลาแวร์เป็นรัฐชายหาดฝั่งตะวันออกที่โดดเด่นเรื่อง 0% Sales Tax ช้อปปิ้งไม่มีภาษี ค่าแรงขั้นต่ำปรับเป็น $15.00/ชม. ชายหาด Rehoboth ปลอดภัยและเดินทางสะดวกด้วยระบบรถบัส DART",
    "best_for": "สายชอบชายหาดฝั่งตะวันออก ชอบช้อปปิ้งปลอดภาษี 0% และเดินทางสะดวก",
    "source_info": {
      "dol_wage_2026": "$15.00",
      "tax_foundation_2026": "2.2-5.5% Income, 0% Sales",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A-",
        "note": "ช่วง มี.ค.-เม.ย. อากาศเริ่มอุ่นขึ้น สวนสนุกในร่ม/เมืองเปิดปกติ สวนน้ำกลางแจ้งและบอร์ดวอล์กเปิดเต็มที่ปลาย พ.ค. (Memorial Day)"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วง High Season สูงสุด นักท่องเที่ยวหลายล้านคน สวนน้ำและชายหาดเปิด 100% โอกาสทำ OT และงานเสริมหนาแน่นที่สุด"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) หรือ ปลาย Spring",
      "badge": "summer"
    },
    "exact_state_tax_pct": 3.2,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: ~3.20% (ตามขั้นบันได)"
  },
  {
    "id": "rhode_island",
    "name": "Rhode Island",
    "code": "RI",
    "nickname": "Ocean State",
    "tier": "Tier A",
    "overall_grade": "A",
    "overall_score": 90,
    "region": "New England",
    "vibe": "Sailing Capital, Mansions & Coastal Island",
    "statutory_min_wage": "$16.00/ชม. (Rhode Island Statutory Minimum Wage 2026)",
    "market_wage_estimate": "ฐาน $16.00 - $18.50 / รวมทิปเฉลี่ย ~$20.00 - $27.00+/ชม.",
    "min_wage": "กม. $16.00 | ฐาน $16-$18.5 (รวมทิป ~$20-$27+)",
    "min_wage_num": 16.0,
    "state_income_tax": "3.75% - 5.99% (ตามขั้นบันได)",
    "tax_rate_num": 0.0375,
    "state_sales_tax": "7.0% (เสื้อผ้าราคา <$175 ได้รับยกเว้นภาษี 0%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": true,
    "avg_housing_cost": "$130 - $190 / สัปดาห์",
    "housing_cost_num": 160,
    "housing_type": "แชร์บ้านพักตากอากาศ / โมเทล",
    "commute_type": "ปั่นจักรยาน 100% / เดินเท้า / RIPTA Bus",
    "grades": {
      "safety": {
        "grade": "A+",
        "score": 96,
        "note": "Newport และ Block Island มีความปลอดภัยสูงมาก บรรยากาศเมืองผู้ดี"
      },
      "scenery_friendliness": {
        "grade": "A+",
        "score": 96,
        "note": "คฤหาสน์ The Breakers ริมหน้าผา Cliff Walk ท่าเรือใบ ชายหาดสวยงาม"
      },
      "tourism_crowds": {
        "grade": "A",
        "score": 92,
        "note": "นักท่องเที่ยวระดับพรีเมียมและนักแล่นเรือใบมาเยือนหนาแน่น"
      },
      "earning_job2_tax": {
        "grade": "A",
        "score": 94,
        "note": "ค่าแรง $16.00 ทิปร้านอาหาร/บาร์ริมอ่าวสูง เสื้อผ้าปลอดภาษี 0% ค่าครองชีพโซนตากอากาศค่อนข้างสูง"
      },
      "housing_value": {
        "grade": "C+",
        "score": 68,
        "note": "ค่าที่พักค่อนข้างสูงตามมาตรฐานนิวอิงแลนด์"
      },
      "commute_convenience": {
        "grade": "A",
        "score": 92,
        "note": "Newport และ Block Island ปั่นจักรยานสะดวก 100% มีรถบัส RIPTA"
      },
      "alumni_rating": {
        "grade": "A",
        "score": 90,
        "note": "เมืองสวยคลาสสิก ค่าแรง $16 ทิปดี ปั่นจักรยานเลียบทะเล Cliff Walk สวยงาม"
      }
    },
    "hotspots": [
      "Newport (Ocean Drive / Thames St / Cliff Walk)",
      "Block Island",
      "Narragansett Pier",
      "Watch Hill"
    ],
    "pros": [
      "ค่าแรงขั้นต่ำปรับขึ้นเป็น $16.00/ชม. ในปี 2026",
      "เมือง Newport และ Block Island สวยงาม คลาสสิก",
      "ทิปในร้านอาหารและบาร์ริมท่าเรือใบสูง",
      "เสื้อผ้าราคาต่ำกว่า $175 ได้รับการยกเว้นภาษีซื้อ (0% Sales Tax)"
    ],
    "cons": [
      "ค่าที่พักค่อนข้างสูง (ควรเลือกงานที่มีที่พักรองรับ)"
    ],
    "editorial_summary": "โรดไอแลนด์ปรับค่าแรงขั้นต่ำเป็น $16.00/ชม. ในปี 2026 เมืองตากอากาศ Newport และเกาะ Block Island สวยงามหรูหรา ทิปในร้านอาหารสูง ปั่นจักรยานเลียบทะเลสะดวก และเสื้อผ้าได้รับการยกเว้นภาษีซื้อ",
    "alumni_quote": "โรดไอแลนด์ปรับค่าแรงขั้นต่ำเป็น $16.00/ชม. ในปี 2026 เมืองตากอากาศ Newport และเกาะ Block Island สวยงามหรูหรา ทิปในร้านอาหารสูง ปั่นจักรยานเลียบทะเลสะดวก และเสื้อผ้าได้รับการยกเว้นภาษีซื้อ",
    "best_for": "สายชอบเมืองตากอากาศหรูหรา เรือใบ ทิปดี ค่าแรง $16 ปั่นจักรยานริมทะเล",
    "source_info": {
      "dol_wage_2026": "$16.00",
      "tax_foundation_2026": "3.75-5.99%, 7% Sales",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A-",
        "note": "ช่วง มี.ค.-เม.ย. อากาศเริ่มอุ่นขึ้น สวนสนุกในร่ม/เมืองเปิดปกติ สวนน้ำกลางแจ้งและบอร์ดวอล์กเปิดเต็มที่ปลาย พ.ค. (Memorial Day)"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วง High Season สูงสุด นักท่องเที่ยวหลายล้านคน สวนน้ำและชายหาดเปิด 100% โอกาสทำ OT และงานเสริมหนาแน่นที่สุด"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) หรือ ปลาย Spring",
      "badge": "summer"
    },
    "exact_state_tax_pct": 3.75,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 3.75% (ฐานขั้นแรก $0-$73,450)"
  },
  {
    "id": "nevada",
    "name": "Nevada",
    "code": "NV",
    "nickname": "Silver State",
    "tier": "Tier A",
    "overall_grade": "A",
    "overall_score": 89,
    "region": "Mountain West",
    "vibe": "Lake Tahoe Resort & 0% Income Tax",
    "statutory_min_wage": "$12.00/ชม. (DOL Statutory Rate 2026)",
    "market_wage_estimate": "ฐาน $13.50 - $16.50 / รวมทิปเฉลี่ย ~$17.50 - $25.00+/ชม.",
    "min_wage": "กม. $12.00 | ฐาน $13.5-$16.5 (รวมทิป ~$17.5-$25+)",
    "min_wage_num": 13.5,
    "state_income_tax": "0% (ไม่มีภาษีเงินได้ระดับรัฐ)",
    "tax_rate_num": 0.0,
    "state_sales_tax": "6.85% (+ภาษีท้องถิ่น รวม 8.2-8.38%)",
    "has_no_income_tax": true,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$120 - $180 / สัปดาห์",
    "housing_cost_num": 150,
    "housing_type": "หอพักรีสอร์ต / แชร์อพาร์ตเมนต์",
    "commute_type": "TART Bus (ฟรีรอบ Lake Tahoe) / เดินเท้า / จักรยาน",
    "grades": {
      "safety": {
        "grade": "A",
        "score": 90,
        "note": "โซน Lake Tahoe ฝั่งเนวาดา (Incline Village / Stateline) มีความปลอดภัยสูง"
      },
      "scenery_friendliness": {
        "grade": "A+",
        "score": 96,
        "note": "หาด Sand Harbor น้ำใสราวกระจก ภูเขาหิมะ คาสิโนรีสอร์ตหรูหรา"
      },
      "tourism_crowds": {
        "grade": "A+",
        "score": 95,
        "note": "นักท่องเที่ยวหนาแน่นตลอดซัมเมอร์"
      },
      "earning_job2_tax": {
        "grade": "A",
        "score": 92,
        "note": "0% State Income Tax ปลอดภาษีเงินได้ ทิปโรงแรมคาสิโนดี ค่าครองชีพโซน Lake Tahoe ปานกลาง-สูง"
      },
      "housing_value": {
        "grade": "C+",
        "score": 68,
        "note": "ค่าที่พักรอบ Lake Tahoe ค่อนข้างสูง"
      },
      "commute_convenience": {
        "grade": "A-",
        "score": 88,
        "note": "มีรถบัส TART บริการฟรีรอบทะเลสาบ และมีเลนจักรยาน"
      },
      "alumni_rating": {
        "grade": "A-",
        "score": 88,
        "note": "ปลอดภาษีเงินได้รัฐ ทะเลสาบสวยงาม รถบัสฟรี ทิปดี"
      }
    },
    "hotspots": [
      "Lake Tahoe (Stateline, Incline Village, Zephyr Cove)",
      "Reno"
    ],
    "pros": [
      "สิทธิประโยชน์ปลอดภาษีเงินได้ระดับรัฐ (0% State Income Tax)",
      "Lake Tahoe ฝั่งเนวาดามีหาด Sand Harbor ที่สวยงามมาก",
      "มีรถบัส TART บริการฟรีรอบทะเลสาบ",
      "งานโรงแรมและรีสอร์ตทิปดี"
    ],
    "cons": [
      "ค่าที่พักรอบทะเลสาบค่อนข้างสูง",
      "อากาศกลางวันแห้งและแดดแรง"
    ],
    "editorial_summary": "เนวาดาโดดเด่นด้วยพื้นที่ Lake Tahoe ฝั่งตะวันออก มีหาด Sand Harbor ที่สวยงาม ปลอดภาษีเงินได้ระดับรัฐ (0% Income Tax) และมีรถบัส TART ฟรีรอบทะเลสาบ ช่วยประหยัดค่าเดินทาง",
    "alumni_quote": "เนวาดาโดดเด่นด้วยพื้นที่ Lake Tahoe ฝั่งตะวันออก มีหาด Sand Harbor ที่สวยงาม ปลอดภาษีเงินได้ระดับรัฐ (0% Income Tax) และมีรถบัส TART ฟรีรอบทะเลสาบ ช่วยประหยัดค่าเดินทาง",
    "best_for": "สายชอบ Lake Tahoe อยากได้สิทธิประโยชน์ 0% State Income Tax รถบัสฟรี และทิปดี",
    "source_info": {
      "dol_wage_2026": "$12.00",
      "tax_foundation_2026": "0% Income, 6.85% State Sales",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A",
        "note": "สภาพอากาศอบอุ่น มีนักท่องเที่ยว Spring Break ตั้งแต่ มี.ค. สวนสนุกและร้านอาหารเปิดบริการเต็มที่ตั้งแต่ต้นซีซัน"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A",
        "note": "นักท่องเที่ยวซัมเมอร์หนาแน่นมาก อากาศร้อนชื้นหรือแดดแรงช่วง ก.ค.-ส.ค. ชั่วโมงงานและทิปสูง"
      },
      "best_season": "Spring & Summer (ดีเยี่ยมทั้ง 2 ช่วง)",
      "badge": "both"
    },
    "exact_state_tax_pct": 0.0,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🎉 0% ปลอดภาษีเงินได้รัฐ (ประหยัดได้ 100%)"
  },
  {
    "id": "california",
    "name": "California",
    "code": "CA",
    "nickname": "Golden State",
    "tier": "Tier A",
    "overall_grade": "A",
    "overall_score": 88,
    "region": "West Coast",
    "vibe": "Lake Tahoe & Coastal Scenery",
    "statutory_min_wage": "$16.90/ชม. (California Statutory Minimum Wage 2026)",
    "market_wage_estimate": "ฐาน $16.50 - $18.50 / รวมทิปเฉลี่ย ~$20.50 - $27.00+/ชม.",
    "min_wage": "กม. $16.00 | ฐาน $16.5-$18.5 (รวมทิป ~$20.5-$27+)",
    "min_wage_num": 16.9,
    "state_income_tax": "1.0% - 9.3% (ตามขั้นบันได)",
    "tax_rate_num": 0.015,
    "state_sales_tax": "7.25% (+ภาษีท้องถิ่น รวม 8.5-10.25%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$140 - $220 / สัปดาห์",
    "housing_cost_num": 180,
    "housing_type": "แชร์บ้านเช่า / หอพักรีสอร์ต / เคบิน",
    "commute_type": "TART Bus (ฟรีรอบ Lake Tahoe) / จักรยาน / เดินเท้า",
    "grades": {
      "safety": {
        "grade": "A",
        "score": 90,
        "note": "โซนรีสอร์ต Lake Tahoe, Monterey และ Mammoth มีความปลอดภัยสูง"
      },
      "scenery_friendliness": {
        "grade": "A+",
        "score": 96,
        "note": "ทะเลสาบน้ำใส ทิวสน เทือกเขา Sierra Nevada สวยงามระดับแถวหน้า"
      },
      "tourism_crowds": {
        "grade": "A+",
        "score": 95,
        "note": "นักท่องเที่ยวทั้งในและต่างประเทศหนาแน่นตลอดซัมเมอร์"
      },
      "earning_job2_tax": {
        "grade": "A",
        "score": 90,
        "note": "ค่าแรงขั้นต่ำสูง $16.00+ ทิปดี มีงานหลากหลาย แต่ค่าครองชีพ ค่าอาหาร และภาษีรัฐค่อนข้างสูง"
      },
      "housing_value": {
        "grade": "C+",
        "score": 68,
        "note": "ค่าเช่าบ้านและค่าครองชีพสูงตามมาตรฐานแคลิฟอร์เนีย"
      },
      "commute_convenience": {
        "grade": "A-",
        "score": 88,
        "note": "Lake Tahoe มีระบบรถบัส TART บริการฟรีรอบทะเลสาบ"
      },
      "alumni_rating": {
        "grade": "A",
        "score": 90,
        "note": "ทิวทัศน์สวยงาม ค่าแรงพื้นฐานสูง มีรถบัสฟรี แม้ค่าที่พักจะค่อนข้างสูง"
      }
    },
    "hotspots": [
      "Lake Tahoe (South Lake Tahoe, Tahoe City, Olympic Valley, Truckee)",
      "Mammoth Lakes",
      "Monterey / Carmel",
      "San Diego"
    ],
    "pros": [
      "ค่าแรงขั้นต่ำสูง $16.00/ชม. ขึ้นไป",
      "Lake Tahoe มีรถบัส TART บริการฟรีตลอดสายพร้อมที่ติดจักรยาน",
      "ธรรมชาติทะเลสาบและภูเขาสวยงาม กิจกรรมกลางแจ้งครบครัน",
      "มีตำแหน่งงานบริการและร้านอาหารหลากหลาย"
    ],
    "cons": [
      "ค่าครองชีพ ภาษีซื้อ และค่าเช่าที่พักค่อนข้างสูง",
      "ต้องเตรียมการเรื่องที่พักล่วงหน้า"
    ],
    "editorial_summary": "แคลิฟอร์เนียโดดเด่นเรื่องค่าแรงขั้นต่ำที่สูง ($16+) และธรรมชาติระดับโลกอย่าง Lake Tahoe ซึ่งมีรถบัสฟรีช่วยประหยัดค่าเดินทาง แม้ค่าครองชีพและค่าที่พักจะสูง แต่ภาพรวมยังคงเป็นตัวเลือกยอดนิยม",
    "alumni_quote": "แคลิฟอร์เนียโดดเด่นเรื่องค่าแรงขั้นต่ำที่สูง ($16+) และธรรมชาติระดับโลกอย่าง Lake Tahoe ซึ่งมีรถบัสฟรีช่วยประหยัดค่าเดินทาง แม้ค่าครองชีพและค่าที่พักจะสูง แต่ภาพรวมยังคงเป็นตัวเลือกยอดนิยม",
    "best_for": "สายชอบธรรมชาติระดับพรีเมียม ค่าแรงต่อชั่วโมงสูง และเดินทางสะดวกด้วยรถบัสฟรี",
    "source_info": {
      "dol_wage_2026": "$16.00",
      "tax_foundation_2026": "1.0-9.3%",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A",
        "note": "สภาพอากาศอบอุ่น มีนักท่องเที่ยว Spring Break ตั้งแต่ มี.ค. สวนสนุกและร้านอาหารเปิดบริการเต็มที่ตั้งแต่ต้นซีซัน"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A",
        "note": "นักท่องเที่ยวซัมเมอร์หนาแน่นมาก อากาศร้อนชื้นหรือแดดแรงช่วง ก.ค.-ส.ค. ชั่วโมงงานและทิปสูง"
      },
      "best_season": "Spring & Summer (ดีเยี่ยมทั้ง 2 ช่วง)",
      "badge": "both"
    },
    "exact_state_tax_pct": 1.5,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: ~1.50% (ฐานขั้นแรก $0-$10,412 แค่ 1.0%)"
  },
  {
    "id": "missouri",
    "name": "Missouri",
    "code": "MO",
    "nickname": "Show-Me State",
    "tier": "Tier A",
    "overall_grade": "A",
    "overall_score": 88,
    "region": "Midwest",
    "vibe": "Ozark Theme Park & Low Cost Living",
    "statutory_min_wage": "$15.00/ชม. (Missouri Statutory Minimum Wage 2026)",
    "market_wage_estimate": "ฐาน $15.00 - $16.50 / รวมทิปเฉลี่ย ~$19.00 - $25.00+/ชม.",
    "min_wage": "กม. $15.00 | ฐาน $15-$16.5 (รวมทิป ~$19-$25+)",
    "min_wage_num": 15.0,
    "state_income_tax": "2.0% - 4.7% (ตามขั้นบันได)",
    "tax_rate_num": 0.035,
    "state_sales_tax": "4.225% (+ภาษีท้องถิ่น รวม 7.5-8.5%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$75 - $115 / สัปดาห์",
    "housing_cost_num": 95,
    "housing_type": "หอพักพนักงาน / โมเทล / เคบิน",
    "commute_type": "รถรับส่งพนักงาน / เดินเท้า / จักรยาน",
    "grades": {
      "safety": {
        "grade": "A",
        "score": 92,
        "note": "เมืองท่องเที่ยว Branson มีความปลอดภัยสูง บรรยากาศครอบครัว"
      },
      "scenery_friendliness": {
        "grade": "A-",
        "score": 88,
        "note": "ภูเขา Ozark ทะเลสาบ Table Rock Lake สวนสนุกงานฝีมือศตวรรษที่ 19"
      },
      "tourism_crowds": {
        "grade": "A",
        "score": 90,
        "note": "Branson มีนักท่องเที่ยวหลายล้านคนต่อปี"
      },
      "earning_job2_tax": {
        "grade": "A-",
        "score": 88,
        "note": "ค่าแรงขั้นต่ำปรับเป็น $15.00 ในปี 2026 ค่าครองชีพและอาหารราคาถูกมาก ช่วยให้เก็บเงินได้เป็นสัดส่วนสูง"
      },
      "housing_value": {
        "grade": "A",
        "score": 92,
        "note": "ค่าเช่าที่พักและค่าครองชีพย่อมเยา หอพัก Silver Dollar City คุณภาพดี"
      },
      "commute_convenience": {
        "grade": "B",
        "score": 78,
        "note": "มีรถรับส่งพนักงานของสวนสนุก"
      },
      "alumni_rating": {
        "grade": "A-",
        "score": 88,
        "note": "Silver Dollar City เป็นสวนสนุกที่ดูแลเด็ก J-1 อย่างอบอุ่น ค่าแรง $15"
      }
    },
    "hotspots": [
      "Branson (Silver Dollar City / White Water)",
      "Lake of the Ozarks",
      "Kansas City (Worlds of Fun)"
    ],
    "pros": [
      "ค่าแรงขั้นต่ำปรับขึ้นเป็น $15.00/ชม. ในปี 2026 (Proposition A)",
      "Silver Dollar City ได้รับรางวัลสวนสนุกยอดเยี่ยม ดูแลพนักงานดี",
      "ค่าครองชีพและค่าที่พักราคาประหยัด ความปลอดภัยสูง"
    ],
    "cons": [
      "อากาศหน้าร้อนค่อนข้างอบอ้าว",
      "อยู่นอกเมืองใหญ่ เหมาะกับผู้ที่ชอบสไตล์คันทรี"
    ],
    "editorial_summary": "มิสซูรีมีค่าแรงขั้นต่ำปรับขึ้นเป็น $15.00/ชม. ในปี 2026 สวนสนุก Silver Dollar City ในเมือง Branson โดดเด่นเรื่องการดูแลพนักงาน ค่าครองชีพและที่พักราคาประหยัด มีความปลอดภัยสูง",
    "alumni_quote": "มิสซูรีมีค่าแรงขั้นต่ำปรับขึ้นเป็น $15.00/ชม. ในปี 2026 สวนสนุก Silver Dollar City ในเมือง Branson โดดเด่นเรื่องการดูแลพนักงาน ค่าครองชีพและที่พักราคาประหยัด มีความปลอดภัยสูง",
    "best_for": "สายชอบทำงานสวนสนุกคุณภาพ ดูแลอบอุ่น ค่าครองชีพถูก ค่าแรง $15 และปลอดภัย",
    "source_info": {
      "dol_wage_2026": "$15.00",
      "tax_foundation_2026": "2.0-4.7%",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A-",
        "note": "ช่วง มี.ค.-เม.ย. อากาศเริ่มอุ่นขึ้น สวนสนุกในร่ม/เมืองเปิดปกติ สวนน้ำกลางแจ้งและบอร์ดวอล์กเปิดเต็มที่ปลาย พ.ค. (Memorial Day)"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วง High Season สูงสุด นักท่องเที่ยวหลายล้านคน สวนน้ำและชายหาดเปิด 100% โอกาสทำ OT และงานเสริมหนาแน่นที่สุด"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) หรือ ปลาย Spring",
      "badge": "summer"
    },
    "exact_state_tax_pct": 3.5,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: ~3.50% (ตามขั้นบันได)"
  },
  {
    "id": "texas",
    "name": "Texas",
    "code": "TX",
    "nickname": "Lone Star State",
    "tier": "Tier A",
    "overall_grade": "B+",
    "overall_score": 87,
    "region": "South",
    "vibe": "Waterpark Capital & 0% Income Tax",
    "statutory_min_wage": "$7.25/ชม. (Federal Minimum Wage)",
    "market_wage_estimate": "ฐาน $13.50 - $16.50 / รวมทิปเฉลี่ย ~$17.50 - $25.00+/ชม.",
    "min_wage": "กม. $7.25 | ฐาน $13.5-$16.5 (รวมทิป ~$17.5-$25+)",
    "min_wage_num": 14.0,
    "state_income_tax": "0% (ไม่มีภาษีเงินได้ระดับรัฐ)",
    "tax_rate_num": 0.0,
    "state_sales_tax": "6.25% (+ภาษีท้องถิ่น รวม 8.0-8.25%)",
    "has_no_income_tax": true,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$90 - $130 / สัปดาห์",
    "housing_cost_num": 110,
    "housing_type": "หอพักพนักงานรีสอร์ต / แชร์อพาร์ตเมนต์",
    "commute_type": "ปั่นจักรยาน / รถรับส่ง / ต้องพึ่งรถในเมืองใหญ่",
    "grades": {
      "safety": {
        "grade": "B+",
        "score": 82,
        "note": "New Braunfels และเกาะ Galveston มีความปลอดภัยระดับมาตรฐานเมืองท่องเที่ยว"
      },
      "scenery_friendliness": {
        "grade": "A-",
        "score": 88,
        "note": "แม่น้ำ Comal River สวนน้ำ Schlitterbahn ริมแม่น้ำ วัฒนธรรมเท็กซัส"
      },
      "tourism_crowds": {
        "grade": "A",
        "score": 92,
        "note": "นักท่องเที่ยวมาเล่นสวนน้ำและเที่ยวชายหาดหนาแน่น"
      },
      "earning_job2_tax": {
        "grade": "A",
        "score": 94,
        "note": "0% State Income Tax ปลอดภาษีเงินได้ สวนน้ำ Schlitterbahn งานมั่นคง ค่าครองชีพและอาหารราคาถูก"
      },
      "housing_value": {
        "grade": "A-",
        "score": 88,
        "note": "ค่าครองชีพและค่าที่พักราคาประหยัดสไตล์เท็กซัส"
      },
      "commute_convenience": {
        "grade": "B-",
        "score": 72,
        "note": "ในเมือง New Braunfels ปั่นจักรยานได้ แต่ในเมืองใหญ่ต้องมีรถยนต์"
      },
      "alumni_rating": {
        "grade": "A-",
        "score": 86,
        "note": "Schlitterbahn สนุกสนาน ปลอดภาษีเงินได้รัฐ อาหารอร่อย"
      }
    },
    "hotspots": [
      "New Braunfels (Schlitterbahn Waterpark)",
      "Galveston Island",
      "San Antonio (River Walk)",
      "Corpus Christi"
    ],
    "pros": [
      "สิทธิประโยชน์ปลอดภาษีเงินได้ระดับรัฐ (0% State Income Tax)",
      "Schlitterbahn สวนน้ำริมแม่น้ำธรรมชาติขนาดใหญ่",
      "ค่าครองชีพและที่พักราคาประหยัด",
      "อาหารสไตล์ Tex-Mex และบาร์บีคิวมีชื่อเสียง"
    ],
    "cons": [
      "หน้าร้อนอากาศค่อนข้างร้อนจัด (35-38 °C)",
      "เมืองใหญ่ต้องใช้รถยนต์ในการเดินทาง"
    ],
    "editorial_summary": "เท็กซัสมีสวนน้ำที่มีชื่อเสียงอย่าง Schlitterbahn ใน New Braunfels ปลอดภาษีเงินได้ระดับรัฐ (0% Income Tax) ค่าครองชีพและที่พักย่อมเยา เหมาะสำหรับผู้ที่ชอบสวนน้ำและบรรยากาศทางใต้",
    "alumni_quote": "เท็กซัสมีสวนน้ำที่มีชื่อเสียงอย่าง Schlitterbahn ใน New Braunfels ปลอดภาษีเงินได้ระดับรัฐ (0% Income Tax) ค่าครองชีพและที่พักย่อมเยา เหมาะสำหรับผู้ที่ชอบสวนน้ำและบรรยากาศทางใต้",
    "best_for": "สายรักสวนน้ำ อยากได้สิทธิประโยชน์ 0% State Income Tax และชอบอาหารเท็กซัส",
    "source_info": {
      "dol_wage_2026": "$7.25",
      "tax_foundation_2026": "0% Income, 6.25% State Sales",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A",
        "note": "สภาพอากาศอบอุ่น มีนักท่องเที่ยว Spring Break ตั้งแต่ มี.ค. สวนสนุกและร้านอาหารเปิดบริการเต็มที่ตั้งแต่ต้นซีซัน"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A",
        "note": "นักท่องเที่ยวซัมเมอร์หนาแน่นมาก อากาศร้อนชื้นหรือแดดแรงช่วง ก.ค.-ส.ค. ชั่วโมงงานและทิปสูง"
      },
      "best_season": "Spring & Summer (ดีเยี่ยมทั้ง 2 ช่วง)",
      "badge": "both"
    },
    "exact_state_tax_pct": 0.0,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🎉 0% ปลอดภาษีเงินได้รัฐ (ประหยัดได้ 100%)"
  },
  {
    "id": "oregon",
    "name": "Oregon",
    "code": "OR",
    "nickname": "Beaver State",
    "tier": "Tier A",
    "overall_grade": "B+",
    "overall_score": 86,
    "region": "West Coast",
    "vibe": "Pacific Coast Nature & 0% Sales Tax",
    "statutory_min_wage": "$14.55 - $16.80/ชม. ($15.55 Standard / $16.80 Metro / $14.55 Non-Urban)",
    "market_wage_estimate": "ฐาน $15.55 - $18.00 / รวมทิปเฉลี่ย ~$19.05 - $25.50+/ชม.",
    "min_wage": "กม. $15.55 | ฐาน $15.55-$18 (รวมทิป ~$19.05-$25.5+)",
    "min_wage_num": 15.55,
    "state_income_tax": "4.75% - 9.9% (ตามขั้นบันได)",
    "tax_rate_num": 0.057999999999999996,
    "state_sales_tax": "0% (ไม่มีภาษีซื้อระดับรัฐ 0% Sales Tax)",
    "has_no_income_tax": false,
    "has_no_sales_tax": true,
    "has_clothing_tax_exemption": true,
    "avg_housing_cost": "$120 - $170 / สัปดาห์",
    "housing_cost_num": 140,
    "housing_type": "แชร์บ้านเช่า / หอพักรีสอร์ต / เคบิน",
    "commute_type": "ปั่นจักรยาน / เดินเท้า",
    "grades": {
      "safety": {
        "grade": "A",
        "score": 92,
        "note": "เมืองชายหาด Cannon Beach และ Sunriver มีความปลอดภัยสูง"
      },
      "scenery_friendliness": {
        "grade": "A+",
        "score": 98,
        "note": "โขดหิน Haystack Rock ป่าสนริมทะเล คลื่นแปซิฟิก ภูเขาไฟ Mount Hood สวยอลังการ"
      },
      "tourism_crowds": {
        "grade": "A-",
        "score": 88,
        "note": "นักท่องเที่ยวสายธรรมชาติมาพักผ่อนและช้อปปิ้งปลอดภาษี"
      },
      "earning_job2_tax": {
        "grade": "A-",
        "score": 88,
        "note": "0% Sales Tax ช้อปปิ้งปลอดภาษี + ค่าแรง $15.55+ ค่าอาหารและกาแฟคุณภาพสูง ภาษีเงินได้ค่อนข้างสูง"
      },
      "housing_value": {
        "grade": "B-",
        "score": 72,
        "note": "ค่าที่พักแถบชายฝั่งค่อนข้างสูง"
      },
      "commute_convenience": {
        "grade": "B",
        "score": 78,
        "note": "ในเมืองตากอากาศเล็กๆ ปั่นจักรยานได้สะดวก"
      },
      "alumni_rating": {
        "grade": "A-",
        "score": 88,
        "note": "ธรรมชาติสวยงาม ช้อปปิ้งปลอดภาษี อาหารและกาแฟคุณภาพสูง"
      }
    },
    "hotspots": [
      "Cannon Beach (Haystack Rock)",
      "Seaside",
      "Sunriver Resort (Bend)",
      "Mount Hood"
    ],
    "pros": [
      "สิทธิประโยชน์ปลอดภาษีซื้อระดับรัฐ (0% State Sales Tax) ช้อปปิ้งสินค้าไอทีและเสื้อผ้าไม่มีภาษี",
      "ทัศนียภาพชายฝั่งแปซิฟิกและป่าสนสวยงามระดับสากล",
      "ค่าแรงขั้นต่ำ $14.55 - $16.80/ชม. ในปี 2026",
      "วัฒนธรรมอาหารและกาแฟคุณภาพสูง"
    ],
    "cons": [
      "ภาษีเงินได้รัฐค่อนข้างสูง (4.75% - 9.9%)",
      "น้ำทะเลแปซิฟิกเย็นตลอดทั้งปี"
    ],
    "editorial_summary": "ออริกอนโดดเด่นด้วยทิวทัศน์ชายฝั่งแปซิฟิกอันงดงามอย่าง Cannon Beach สิทธิประโยชน์ 0% Sales Tax ช้อปปิ้งไม่มีภาษี และค่าแรงขั้นต่ำ $15.55/ชม. แม้ภาษีเงินได้รัฐจะค่อนข้างสูง",
    "alumni_quote": "ออริกอนโดดเด่นด้วยทิวทัศน์ชายฝั่งแปซิฟิกอันงดงามอย่าง Cannon Beach สิทธิประโยชน์ 0% Sales Tax ช้อปปิ้งไม่มีภาษี และค่าแรงขั้นต่ำ $15.55/ชม. แม้ภาษีเงินได้รัฐจะค่อนข้างสูง",
    "best_for": "สายรักธรรมชาติ ป่าสน ทะเลแปซิฟิก ช้อปปิ้งปลอดภาษี 0% และกาแฟรสเลิศ",
    "source_info": {
      "dol_wage_2026": "$14.55-16.80",
      "tax_foundation_2026": "4.75-9.9% Income, 0% Sales",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B-",
        "note": "งานบริการตามฤดูกาลช่วง มี.ค.-เม.ย. มีจำกัด"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "B",
        "note": "มีงานบริการช่วงซัมเมอร์ระดับปานกลาง"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.)",
      "badge": "summer"
    },
    "exact_state_tax_pct": 5.8,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: ~5.80% (ตามขั้นบันได)"
  },
  {
    "id": "vermont",
    "name": "Vermont",
    "code": "VT",
    "nickname": "Green Mountain State",
    "tier": "Tier A",
    "overall_grade": "B+",
    "overall_score": 86,
    "region": "New England",
    "vibe": "Green Mountains, Craft Ice Cream & Tranquility",
    "statutory_min_wage": "$14.42/ชม. (Vermont Statutory Minimum Wage 2026)",
    "market_wage_estimate": "ฐาน $14.50 - $17.50 / รวมทิปเฉลี่ย ~$18.00 - $25.00+/ชม.",
    "min_wage": "กม. $14.42 | ฐาน $14.5-$17.5 (รวมทิป ~$18-$25+)",
    "min_wage_num": 14.42,
    "state_income_tax": "3.35% - 8.75% (ตามขั้นบันได)",
    "tax_rate_num": 0.0335,
    "state_sales_tax": "6.0%",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$110 - $160 / สัปดาห์",
    "housing_cost_num": 135,
    "housing_type": "หอพักพนักงานรีสอร์ต / เคบิน / แชร์บ้าน",
    "commute_type": "เดินเท้า / ปั่นจักรยาน / Mountain Road Shuttle",
    "grades": {
      "safety": {
        "grade": "A+",
        "score": 99,
        "note": "สถิติความปลอดภัยติดอันดับ Top 3 ของประเทศอย่างต่อเนื่อง"
      },
      "scenery_friendliness": {
        "grade": "A+",
        "score": 96,
        "note": "เทือกเขาเขียวขจี ฟาร์มโคนม โรงงานไอศกรีม Ben & Jerry's ลำธารใสบริสุทธิ์"
      },
      "tourism_crowds": {
        "grade": "B+",
        "score": 80,
        "note": "นักท่องเที่ยวสายธรรมชาติและครอบครัว"
      },
      "earning_job2_tax": {
        "grade": "B+",
        "score": 82,
        "note": "ค่าแรงขั้นต่ำ $14.42 ธรรมชาติบริสุทธิ์ ค่าครองชีพปานกลาง งานบริการมีเฉพาะในเมืองรีสอร์ต"
      },
      "housing_value": {
        "grade": "B",
        "score": 78,
        "note": "รีสอร์ตอย่าง Stowe มักมีหอพักพนักงานให้"
      },
      "commute_convenience": {
        "grade": "B+",
        "score": 84,
        "note": "Stowe มีรถชัตเติลบัสรับส่งบนเส้นทาง Mountain Road"
      },
      "alumni_rating": {
        "grade": "A-",
        "score": 88,
        "note": "อากาศเย็นสบาย ธรรมชาติสวย ปลอดภัยสูง"
      }
    },
    "hotspots": [
      "Stowe Mountain Resort",
      "Burlington (Lake Champlain)",
      "Killington",
      "Waterbury (Ben & Jerry's)"
    ],
    "pros": [
      "ความปลอดภัยติดอันดับ Top 3 ของสหรัฐอเมริกา ชุมชนสงบ",
      "ธรรมชาติและอากาศบริสุทธิ์เขียวขจีตลอดซัมเมอร์",
      "โรงงานไอศกรีม Ben & Jerry's และชีสฟาร์มชื่อดัง",
      "ค่าแรงขั้นต่ำ $14.42/ชม. ในปี 2026"
    ],
    "cons": [
      "ภาษีเงินได้รัฐค่อนข้างสูง",
      "เมืองค่อนข้างสงบ ร้านค้าปิดเร็ว"
    ],
    "editorial_summary": "เวอร์มอนต์มีความปลอดภัยติดอันดับต้นๆ ของประเทศ มีธรรมชาติเทือกเขาเขียวขจีและอากาศเย็นสบาย ค่าแรงขั้นต่ำปี 2026 ปรับเป็น $14.42/ชม. เหมาะสำหรับผู้ที่ชอบบรรยากาศธรรมชาติและความสงบ",
    "alumni_quote": "เวอร์มอนต์มีความปลอดภัยติดอันดับต้นๆ ของประเทศ มีธรรมชาติเทือกเขาเขียวขจีและอากาศเย็นสบาย ค่าแรงขั้นต่ำปี 2026 ปรับเป็น $14.42/ชม. เหมาะสำหรับผู้ที่ชอบบรรยากาศธรรมชาติและความสงบ",
    "best_for": "สายรักความสงบ ธรรมชาติบริสุทธิ์ อากาศเย็นสบาย ปลอดภัยสูง",
    "source_info": {
      "dol_wage_2026": "$14.42",
      "tax_foundation_2026": "3.35-8.75%",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B+",
        "note": "ช่วง มี.ค. - เม.ย. ยังมีหิมะและอากาศหนาวจัด อุทยาน/ลอดจ์บางแห่งเริ่มเปิดรับงานช่วง พ.ค. เหมาะสำหรับผู้ที่ไปปลายสปริง"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วงเวลาทอง (Golden Peak) ของรัฐนี้ อากาศเย็นสบาย (15-25°C) ธรรมชาติสวยที่สุด เรือสำราญและอุทยานเปิด 100%"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) แนะนำสูงสุด",
      "badge": "summer"
    },
    "exact_state_tax_pct": 3.35,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 3.35% (ฐานขั้นแรก $0-$44,650)"
  },
  {
    "id": "idaho",
    "name": "Idaho",
    "code": "ID",
    "nickname": "Gem State",
    "tier": "Tier B",
    "overall_grade": "B",
    "overall_score": 82,
    "region": "Mountain West",
    "vibe": "Mountain Resort & River Recreation",
    "statutory_min_wage": "$7.25/ชม. (Federal Minimum Wage)",
    "market_wage_estimate": "ฐาน $13.50 - $16.50 / รวมทิปเฉลี่ย ~$16.50 - $22.50+/ชม.",
    "min_wage": "กม. $7.25 | ฐาน $13.5-$16.5 (รวมทิป ~$16.5-$22.5+)",
    "min_wage_num": 13.5,
    "state_income_tax": "5.695% (Flat Rate อัปเดต 2026)",
    "tax_rate_num": 0.05695,
    "state_sales_tax": "6.0%",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$85 - $130 / สัปดาห์",
    "housing_cost_num": 105,
    "housing_type": "หอพักรีสอร์ต / เคบิน",
    "commute_type": "Mountain Rides Bus (ฟรีใน Sun Valley) / เดินเท้า / จักรยาน",
    "grades": {
      "safety": {
        "grade": "A+",
        "score": 96,
        "note": "เมืองตากอากาศ Sun Valley และ Coeur d'Alene มีความปลอดภัยสูงมาก"
      },
      "scenery_friendliness": {
        "grade": "A",
        "score": 92,
        "note": "แม่น้ำ ทะเลสาบ เทือกเขา Sawtooth สวยงามสงบ"
      },
      "tourism_crowds": {
        "grade": "B",
        "score": 76,
        "note": "นักท่องเที่ยวระดับครอบครัวและกลุ่มพักผ่อน"
      },
      "earning_job2_tax": {
        "grade": "B",
        "score": 74,
        "note": "ค่าแรงปานกลาง ภาษี 5.7% ค่าครองชีพปานกลาง งานเสริมมีพอสมควรในเมืองรีสอร์ต"
      },
      "housing_value": {
        "grade": "B",
        "score": 80,
        "note": "รีสอร์ตมักมีหอพักพนักงานราคาเหมาะสม"
      },
      "commute_convenience": {
        "grade": "B+",
        "score": 84,
        "note": "Sun Valley มีระบบรถบัส Mountain Rides วิ่งบริการฟรี"
      },
      "alumni_rating": {
        "grade": "B",
        "score": 78,
        "note": "สงบ ธรรมชาติสวยงาม ผู้คนมีไมตรีจิต อากาศดี"
      }
    },
    "hotspots": [
      "Sun Valley / Ketchum (Sun Valley Resort)",
      "Coeur d'Alene Resort",
      "Island Park"
    ],
    "pros": [
      "ความปลอดภัยสูง ธรรมชาติป่าเขางดงาม",
      "Sun Valley มีรถบัสสาธารณะฟรีบริการตลอดสาย",
      "รีสอร์ตมีระบบดูแลนักศึกษาที่ดี"
    ],
    "cons": [
      "ภาษีเงินได้รัฐแบบคงที่ประมาณ 5.7%",
      "เมืองค่อนข้างสงบ ร้านค้าปิดเร็ว"
    ],
    "editorial_summary": "ไอดาโฮมีเมืองตากอากาศที่มีชื่อเสียงอย่าง Sun Valley ซึ่งมีธรรมชาติภูเขาที่สวยงาม ความปลอดภัยสูง และมีรถบัสบริการฟรี เหมาะสำหรับผู้ที่ชอบบรรยากาศสงบและกิจกรรมกลางแจ้ง",
    "alumni_quote": "ไอดาโฮมีเมืองตากอากาศที่มีชื่อเสียงอย่าง Sun Valley ซึ่งมีธรรมชาติภูเขาที่สวยงาม ความปลอดภัยสูง และมีรถบัสบริการฟรี เหมาะสำหรับผู้ที่ชอบบรรยากาศสงบและกิจกรรมกลางแจ้ง",
    "best_for": "สายชอบความสงบ ปลอดภัย ธรรมชาติภูเขา และมีรถบัสฟรี",
    "source_info": {
      "dol_wage_2026": "$7.25",
      "tax_foundation_2026": "5.695% Flat",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B+",
        "note": "ช่วง มี.ค. - เม.ย. ยังมีหิมะและอากาศหนาวจัด อุทยาน/ลอดจ์บางแห่งเริ่มเปิดรับงานช่วง พ.ค. เหมาะสำหรับผู้ที่ไปปลายสปริง"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วงเวลาทอง (Golden Peak) ของรัฐนี้ อากาศเย็นสบาย (15-25°C) ธรรมชาติสวยที่สุด เรือสำราญและอุทยานเปิด 100%"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) แนะนำสูงสุด",
      "badge": "summer"
    },
    "exact_state_tax_pct": 5.695,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 5.695% (Flat Rate)"
  },
  {
    "id": "minnesota",
    "name": "Minnesota",
    "code": "MN",
    "nickname": "Land of 10,000 Lakes",
    "tier": "Tier B",
    "overall_grade": "B",
    "overall_score": 82,
    "region": "Midwest",
    "vibe": "Lakes, Mall of America & No Clothing Tax",
    "statutory_min_wage": "$11.41/ชม. (Minnesota Large Employer Wage 2026)",
    "market_wage_estimate": "ฐาน $13.00 - $16.00 / รวมทิปเฉลี่ย ~$16.50 - $23.50+/ชม.",
    "min_wage": "กม. $11.41 | ฐาน $13-$16 (รวมทิป ~$16.5-$23.5+)",
    "min_wage_num": 11.41,
    "state_income_tax": "5.35% - 9.85% (ตามขั้นบันได)",
    "tax_rate_num": 0.0535,
    "state_sales_tax": "6.875% (เสื้อผ้าและเครื่องแต่งกายปลอดภาษี 0%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": true,
    "avg_housing_cost": "$90 - $135 / สัปดาห์",
    "housing_cost_num": 110,
    "housing_type": "หอพักพนักงาน / อพาร์ตเมนต์แชร์",
    "commute_type": "Metro Transit / เดินเท้า / ปั่นจักรยาน",
    "grades": {
      "safety": {
        "grade": "A-",
        "score": 88,
        "note": "Duluth และพื้นที่ชานเมืองมีความปลอดภัยดี ผู้คนมีอัธยาศัยไมตรี (Minnesota Nice)"
      },
      "scenery_friendliness": {
        "grade": "A-",
        "score": 88,
        "note": "ทะเลสาบ Superior กว้างใหญ่เหมือนทะเล ทะเลสาบหมื่นแห่ง ป่าสน"
      },
      "tourism_crowds": {
        "grade": "B+",
        "score": 82,
        "note": "Mall of America และ Valleyfair มีผู้มาเยือนหนาแน่นตลอด"
      },
      "earning_job2_tax": {
        "grade": "B",
        "score": 78,
        "note": "ช้อปปิ้งเสื้อผ้าปลอดภาษี 0% ค่าครองชีพปานกลาง ค่าแรงและงานบริการมั่นคงในห้าง/สวนสนุก"
      },
      "housing_value": {
        "grade": "B",
        "score": 80,
        "note": "ค่าครองชีพปานกลาง"
      },
      "commute_convenience": {
        "grade": "B+",
        "score": 84,
        "note": "มีระบบรถบัสและรถไฟฟ้ารางเบาในเขตเมือง"
      },
      "alumni_rating": {
        "grade": "B+",
        "score": 82,
        "note": "ผู้คนใจดี ช้อปปิ้ง Mall of America สะดวก เสื้อผ้าไม่เสียภาษี"
      }
    },
    "hotspots": [
      "Duluth (Canal Park / Lake Superior)",
      "Mall of America (Bloomington)",
      "Shakopee (Valleyfair)",
      "Brainerd Lakes"
    ],
    "pros": [
      "เสื้อผ้าและรองเท้าได้รับการยกเว้นภาษีซื้อ 100% (0% Sales Tax on Apparel)",
      "ห้าง Mall of America ขนาดใหญ่ที่สุดในสหรัฐฯ มีสวนสนุกในร่ม",
      "Valleyfair สวนสนุกขนาดใหญ่มีหอพักพนักงานรองรับ",
      "Duluth เมืองท่าริมทะเลสาบ Superior อากาศเย็นสบาย"
    ],
    "cons": [
      "ภาษีเงินได้รัฐค่อนข้างสูง"
    ],
    "editorial_summary": "มินนิโซตามีจุดเด่นเรื่อง 0% Sales Tax สำหรับเสื้อผ้าและเครื่องแต่งกาย มีห้าง Mall of America และสวนสนุก Valleyfair ผู้คนมีอัธยาศัยไมตรี เหมาะสำหรับผู้ที่ชอบช้อปปิ้งและบรรยากาศมิดเวสต์",
    "alumni_quote": "มินนิโซตามีจุดเด่นเรื่อง 0% Sales Tax สำหรับเสื้อผ้าและเครื่องแต่งกาย มีห้าง Mall of America และสวนสนุก Valleyfair ผู้คนมีอัธยาศัยไมตรี เหมาะสำหรับผู้ที่ชอบช้อปปิ้งและบรรยากาศมิดเวสต์",
    "best_for": "สายชอบช้อปปิ้งเสื้อผ้าปลอดภาษี ผู้คนเป็นมิตร และทำงานสวนสนุก/ทะเลสาบ",
    "source_info": {
      "dol_wage_2026": "$11.41",
      "tax_foundation_2026": "5.35-9.85%, 0% Clothing Sales",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A-",
        "note": "ช่วง มี.ค.-เม.ย. อากาศเริ่มอุ่นขึ้น สวนสนุกในร่ม/เมืองเปิดปกติ สวนน้ำกลางแจ้งและบอร์ดวอล์กเปิดเต็มที่ปลาย พ.ค. (Memorial Day)"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วง High Season สูงสุด นักท่องเที่ยวหลายล้านคน สวนน้ำและชายหาดเปิด 100% โอกาสทำ OT และงานเสริมหนาแน่นที่สุด"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) หรือ ปลาย Spring",
      "badge": "summer"
    },
    "exact_state_tax_pct": 5.35,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 5.35% (ฐานขั้นแรก $0-$30,070)"
  },
  {
    "id": "north_dakota",
    "name": "North Dakota",
    "code": "ND",
    "nickname": "Peace Garden State",
    "tier": "Tier B",
    "overall_grade": "B",
    "overall_score": 82,
    "region": "Midwest",
    "vibe": "Cowboy Heritage & Low-Cost Living",
    "statutory_min_wage": "$7.25/ชม. (Federal Minimum Wage)",
    "market_wage_estimate": "ฐาน $13.50 - $16.00 / รวมทิปเฉลี่ย ~$16.50 - $22.00+/ชม.",
    "min_wage": "กม. $7.25 | ฐาน $13.5-$16 (รวมทิป ~$16.5-$22+)",
    "min_wage_num": 13.5,
    "state_income_tax": "1.95% - 2.5% (อัตราต่ำมาก)",
    "tax_rate_num": 0.0195,
    "state_sales_tax": "5.0% (+ภาษีท้องถิ่น รวม 6.5-8.5%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$60 - $90 / สัปดาห์ (พร้อมอาหาร)",
    "housing_cost_num": 75,
    "housing_type": "หอพักพนักงาน Medora / แคมป์",
    "commute_type": "เดินเท้า 100%",
    "grades": {
      "safety": {
        "grade": "A+",
        "score": 98,
        "note": "เมืองคาวบอย Medora มีความปลอดภัยสูง ชุมชนสงบ"
      },
      "scenery_friendliness": {
        "grade": "B",
        "score": 78,
        "note": "ภูมิประเทศ Badlands ละครเพลงกลางแจ้ง Medora Musical"
      },
      "tourism_crowds": {
        "grade": "B-",
        "score": 70,
        "note": "นักท่องเที่ยวมาชมละครเพลงและอุทยาน Theodore Roosevelt"
      },
      "earning_job2_tax": {
        "grade": "B",
        "score": 76,
        "note": "ภาษีเงินได้ต่ำมาก 1.95-2.5% ค่าครองชีพและอาหารในแคมป์ถูกมาก ช่วยคุมค่าใช้จ่ายได้ดี"
      },
      "housing_value": {
        "grade": "A+",
        "score": 96,
        "note": "หอพักพนักงานและมื้ออาหารราคาประหยัด"
      },
      "commute_convenience": {
        "grade": "A-",
        "score": 88,
        "note": "เดินเท้าถึงทุกจุดในเมืองได้ภายใน 3-5 นาที"
      },
      "alumni_rating": {
        "grade": "B",
        "score": 76,
        "note": "Medora บรรยากาศอบอุ่น สไตล์คาวบอย ประหยัดค่าใช้จ่ายได้ดี"
      }
    },
    "hotspots": [
      "Medora (Theodore Roosevelt NP / Medora Musical)",
      "Fargo"
    ],
    "pros": [
      "หอพักพนักงานพร้อมอาหารราคาประหยัด ค่าครองชีพต่ำ",
      "ความปลอดภัยสูง ชุมชนสไตล์คาวบอยตะวันตก",
      "ภาษีเงินได้รัฐต่ำมาก (1.95% - 2.5%)",
      "เดินเท้าไปทำงานได้ ไม่ต้องเสียค่าเดินทาง"
    ],
    "cons": [
      "เมืองขนาดเล็ก อยู่ห่างไกลเมืองใหญ่ โอกาสงานเสริมนอกโครงการจำกัด"
    ],
    "editorial_summary": "นอร์ทดาโคตามีเมืองประวัติศาสตร์คาวบอยอย่าง Medora ที่ปลอดภัย ค่าครองชีพและหอพักพร้อมอาหารราคาประหยัด ภาษีเงินได้รัฐต่ำมาก เหมาะกับผู้ที่ต้องการคุมค่าใช้จ่ายและชอบความเรียบง่าย",
    "alumni_quote": "นอร์ทดาโคตามีเมืองประวัติศาสตร์คาวบอยอย่าง Medora ที่ปลอดภัย ค่าครองชีพและหอพักพร้อมอาหารราคาประหยัด ภาษีเงินได้รัฐต่ำมาก เหมาะกับผู้ที่ต้องการคุมค่าใช้จ่ายและชอบความเรียบง่าย",
    "best_for": "สายชอบวัฒนธรรมคาวบอยแท้ๆ ความปลอดภัยสูง เน้นประหยัดค่ากินอยู่",
    "source_info": {
      "dol_wage_2026": "$7.25",
      "tax_foundation_2026": "1.95-2.5%",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B+",
        "note": "ช่วง มี.ค. - เม.ย. ยังมีหิมะและอากาศหนาวจัด อุทยาน/ลอดจ์บางแห่งเริ่มเปิดรับงานช่วง พ.ค. เหมาะสำหรับผู้ที่ไปปลายสปริง"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วงเวลาทอง (Golden Peak) ของรัฐนี้ อากาศเย็นสบาย (15-25°C) ธรรมชาติสวยที่สุด เรือสำราญและอุทยานเปิด 100%"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) แนะนำสูงสุด",
      "badge": "summer"
    },
    "exact_state_tax_pct": 1.95,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 1.95% (ฐานขั้นแรก $0-$44,725)"
  },
  {
    "id": "illinois",
    "name": "Illinois",
    "code": "IL",
    "nickname": "Prairie State",
    "tier": "Tier B",
    "overall_grade": "B",
    "overall_score": 81,
    "region": "Midwest",
    "vibe": "Theme Park & Chicago Suburbs",
    "statutory_min_wage": "$15.00/ชม. (DOL Statutory Rate 2026)",
    "market_wage_estimate": "ฐาน $15.00 - $17.50 / รวมทิปเฉลี่ย ~$19.00 - $26.00+/ชม.",
    "min_wage": "กม. $15.00 | ฐาน $15-$17.5 (รวมทิป ~$19-$26+)",
    "min_wage_num": 15.0,
    "state_income_tax": "4.95% (Flat Rate)",
    "tax_rate_num": 0.0495,
    "state_sales_tax": "6.25% (+ภาษีท้องถิ่น รวม 8.0-10.25%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$100 - $150 / สัปดาห์",
    "housing_cost_num": 125,
    "housing_type": "โมเทล / บ้านเช่าแชร์ / หอพัก",
    "commute_type": "Metra Train / Pace Bus / เดินเท้า / จักรยาน",
    "grades": {
      "safety": {
        "grade": "B+",
        "score": 82,
        "note": "โซนชานเมืองอย่าง Gurnee (Six Flags) มีความปลอดภัยระดับมาตรฐาน"
      },
      "scenery_friendliness": {
        "grade": "B",
        "score": 78,
        "note": "สวนสนุก สวนน้ำ ทะเลสาบมิชิแกน และความเจริญของชานเมือง"
      },
      "tourism_crowds": {
        "grade": "A",
        "score": 90,
        "note": "สวนสนุก Six Flags Great America มีผู้มาเยือนหนาแน่น"
      },
      "earning_job2_tax": {
        "grade": "B+",
        "score": 84,
        "note": "ค่าแรงขั้นต่ำ $15.00/ชม. งานสวนสนุกชั่วโมงมั่นคง ค่าครองชีพโซนชานเมืองปานกลาง ภาษีซื้อรวมค่อนข้างสูง"
      },
      "housing_value": {
        "grade": "B-",
        "score": 74,
        "note": "ค่าเช่าที่พักระดับปานกลาง"
      },
      "commute_convenience": {
        "grade": "B",
        "score": 78,
        "note": "มีรถไฟ Metra เดินทางเข้านครชิคาโกได้สะดวก"
      },
      "alumni_rating": {
        "grade": "B",
        "score": 78,
        "note": "ทำงานสวนสนุกขนาดใหญ่ ค่าแรง $15 และเดินทางเข้าเที่ยวชิคาโกง่าย"
      }
    },
    "hotspots": [
      "Gurnee (Six Flags Great America)",
      "Chicago Suburbs",
      "Galena"
    ],
    "pros": [
      "Six Flags Great America สวนสนุกขนาดใหญ่ มีเครื่องเล่นระดับแถวหน้า",
      "ค่าแรงขั้นต่ำ $15.00/ชม. ในปี 2026",
      "เดินทางเข้านครชิคาโกได้สะดวกด้วยรถไฟ Metra"
    ],
    "cons": [
      "ภาษีซื้อรวมท้องถิ่นค่อนข้างสูง",
      "ต้องวางแผนการเดินทางในพื้นที่ชานเมือง"
    ],
    "editorial_summary": "อิลลินอยส์โดดเด่นด้วยสวนสนุกขนาดใหญ่อย่าง Six Flags Great America ค่าแรงขั้นต่ำปรับเป็น $15.00/ชม. และสามารถเดินทางเข้าเที่ยวนครชิคาโกได้สะดวกด้วยระบบรถไฟ Metra",
    "alumni_quote": "อิลลินอยส์โดดเด่นด้วยสวนสนุกขนาดใหญ่อย่าง Six Flags Great America ค่าแรงขั้นต่ำปรับเป็น $15.00/ชม. และสามารถเดินทางเข้าเที่ยวนครชิคาโกได้สะดวกด้วยระบบรถไฟ Metra",
    "best_for": "สายชอบทำงานสวนสนุกขนาดใหญ่ และต้องการเดินทางเข้านครชิคาโกได้ง่าย",
    "source_info": {
      "dol_wage_2026": "$15.00",
      "tax_foundation_2026": "4.95% Flat",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A-",
        "note": "ช่วง มี.ค.-เม.ย. อากาศเริ่มอุ่นขึ้น สวนสนุกในร่ม/เมืองเปิดปกติ สวนน้ำกลางแจ้งและบอร์ดวอล์กเปิดเต็มที่ปลาย พ.ค. (Memorial Day)"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A+",
        "note": "ช่วง High Season สูงสุด นักท่องเที่ยวหลายล้านคน สวนน้ำและชายหาดเปิด 100% โอกาสทำ OT และงานเสริมหนาแน่นที่สุด"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.) หรือ ปลาย Spring",
      "badge": "summer"
    },
    "exact_state_tax_pct": 4.95,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 4.95% (Flat Rate)"
  },
  {
    "id": "connecticut",
    "name": "Connecticut",
    "code": "CT",
    "nickname": "Constitution State",
    "tier": "Tier B",
    "overall_grade": "B",
    "overall_score": 79,
    "region": "New England",
    "vibe": "Maritime History & Coastal Resort",
    "statutory_min_wage": "$16.94/ชม. (Connecticut Statutory Minimum Wage 2026)",
    "market_wage_estimate": "ฐาน $17.00 - $19.00 / รวมทิปเฉลี่ย ~$20.00 - $25.00+/ชม.",
    "min_wage": "กม. $16.94 | ฐาน $17-$19 (รวมทิป ~$20-$25+)",
    "min_wage_num": 16.94,
    "state_income_tax": "3.0% - 5.5% (ตามขั้นบันได)",
    "tax_rate_num": 0.03,
    "state_sales_tax": "6.35%",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$130 - $180 / สัปดาห์",
    "housing_cost_num": 155,
    "housing_type": "แชร์บ้านพัก / หอพักรีสอร์ต",
    "commute_type": "เดินเท้า / ปั่นจักรยาน / SEAT Bus",
    "grades": {
      "safety": {
        "grade": "A",
        "score": 90,
        "note": "เมืองท่องเที่ยว Mystic และโซนรีสอร์ตมีความปลอดภัยดี"
      },
      "scenery_friendliness": {
        "grade": "B+",
        "score": 85,
        "note": "เมืองท่าเรือประวัติศาสตร์ พิพิธภัณฑ์สัตว์น้ำ คาสิโนขนาดใหญ่"
      },
      "tourism_crowds": {
        "grade": "B",
        "score": 76,
        "note": "นักท่องเที่ยวสายครอบครัวและพักผ่อนช่วงวันหยุด"
      },
      "earning_job2_tax": {
        "grade": "B+",
        "score": 84,
        "note": "ค่าแรงขั้นต่ำสูง $16.94/ชม. ชั่วโมงงานมั่นคง แต่ค่าครองชีพและค่าสินค้าโซนชายฝั่งค่อนข้างสูง"
      },
      "housing_value": {
        "grade": "C+",
        "score": 68,
        "note": "ค่าเช่าบ้านพักตากอากาศค่อนข้างสูง"
      },
      "commute_convenience": {
        "grade": "C+",
        "score": 70,
        "note": "ในเมืองเล็กเดินได้ การเดินทางระหว่างเมืองต้องใช้รถไฟ/บัส"
      },
      "alumni_rating": {
        "grade": "B",
        "score": 78,
        "note": "ค่าแรงสูง เมืองสวยสงบ เดินทางเข้านิวยอร์กหรือบอสตันได้ง่าย"
      }
    },
    "hotspots": [
      "Mystic (Mystic Seaport / Aquarium)",
      "Foxwoods Resort Casino",
      "Mohegan Sun Resort"
    ],
    "pros": [
      "ค่าแรงขั้นต่ำสูงถึง $16.94/ชม. ในปี 2026",
      "เมือง Mystic มีบรรยากาศท่าเรือคลาสสิก ปลอดภัย",
      "เดินทางเข้านครนิวยอร์กหรือบอสตันได้ด้วยรถไฟ Amtrak"
    ],
    "cons": [
      "ค่าครองชีพและค่าเช่าที่พักค่อนข้างสูง",
      "โอกาสงานเสริมมีเฉพาะในโซนร้านอาหารริมน้ำ"
    ],
    "editorial_summary": "คอนเนตทิคัตมีค่าแรงขั้นต่ำปี 2026 สูงถึง $16.94/ชม. เมืองท่องเที่ยวอย่าง Mystic มีความปลอดภัยสูง เหมาะกับผู้ที่ชอบเมืองท่าเรือประวัติศาสตร์และต้องการเดินทางเข้าเมืองใหญ่ง่าย",
    "alumni_quote": "คอนเนตทิคัตมีค่าแรงขั้นต่ำปี 2026 สูงถึง $16.94/ชม. เมืองท่องเที่ยวอย่าง Mystic มีความปลอดภัยสูง เหมาะกับผู้ที่ชอบเมืองท่าเรือประวัติศาสตร์และต้องการเดินทางเข้าเมืองใหญ่ง่าย",
    "best_for": "สายชอบเมืองท่าเรือประวัติศาสตร์ ค่าแรงสูง และเดินทางเข้าเมืองใหญ่ง่าย",
    "source_info": {
      "dol_wage_2026": "$16.94",
      "tax_foundation_2026": "3.0-5.5%",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B-",
        "note": "งานบริการตามฤดูกาลช่วง มี.ค.-เม.ย. มีจำกัด"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "B",
        "note": "มีงานบริการช่วงซัมเมอร์ระดับปานกลาง"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.)",
      "badge": "summer"
    },
    "exact_state_tax_pct": 3.0,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 3.00% (ฐานขั้นแรก $0-$10,000)"
  },
  {
    "id": "hawaii",
    "name": "Hawaii",
    "code": "HI",
    "nickname": "Aloha State",
    "tier": "Tier B",
    "overall_grade": "B",
    "overall_score": 79,
    "region": "Pacific",
    "vibe": "Tropical Island & Surf Culture",
    "statutory_min_wage": "$16.00/ชม. (Hawaii Statutory Minimum Wage 2026)",
    "market_wage_estimate": "ฐาน $16.00 - $18.50 / รวมทิปเฉลี่ย ~$20.00 - $27.00+/ชม.",
    "min_wage": "กม. $16.00 | ฐาน $16-$18.5 (รวมทิป ~$20-$27+)",
    "min_wage_num": 16.0,
    "state_income_tax": "1.4% - 8.25% (ตามขั้นบันได)",
    "tax_rate_num": 0.045,
    "state_sales_tax": "4.0% GET (+ภาษีเคาน์ตี 0.5% รวม 4.5%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$180 - $280+ / สัปดาห์ (ค่าที่พักสูง)",
    "housing_cost_num": 230,
    "housing_type": "แชร์อพาร์ตเมนต์ / โฮสเทล",
    "commute_type": "TheBus / เดินเท้า / ปั่นจักรยาน",
    "grades": {
      "safety": {
        "grade": "B+",
        "score": 84,
        "note": "โซนท่องเที่ยว Waikiki มีความปลอดภัยดี มีผู้คนสัญจรตลอดคืน"
      },
      "scenery_friendliness": {
        "grade": "A+",
        "score": 98,
        "note": "หาดทราย ภูเขาไฟ น้ำตก ทะเลสีคราม วัฒนธรรม Aloha เป็นมิตร"
      },
      "tourism_crowds": {
        "grade": "A+",
        "score": 96,
        "note": "นักท่องเที่ยวจากทั่วโลกหนาแน่นตลอดปี"
      },
      "earning_job2_tax": {
        "grade": "B",
        "score": 76,
        "note": "ค่าแรงขั้นต่ำ $16.00 ทิปดี แต่ค่าครองชีพ สินค้าอุปโภคบริโภค และค่าอาหารสูงที่สุดเนื่องจากขนส่งทางเกาะ"
      },
      "housing_value": {
        "grade": "D",
        "score": 45,
        "note": "ค่าที่พักสูงที่สุดแห่งหนึ่ง ($180-280+/wk) และหายาก"
      },
      "commute_convenience": {
        "grade": "A-",
        "score": 88,
        "note": "โฮโนลูลูมีระบบ TheBus วิ่งครอบคลุมทั่วเกาะโออาฮู"
      },
      "alumni_rating": {
        "grade": "B-",
        "score": 72,
        "note": "ประสบการณ์ชีวิตและธรรมชาติงดงาม แต่เงินเก็บเหลือน้อยจากค่าเช่าที่พัก"
      }
    },
    "hotspots": [
      "Honolulu / Waikiki (Oahu)",
      "Lahaina / Kaanapali (Maui)",
      "Kauai",
      "Kona (Big Island)"
    ],
    "pros": [
      "ค่าแรงขั้นต่ำปรับขึ้นเป็น $16.00/ชม. ในปี 2026",
      "ธรรมชาติและวัฒนธรรมเกาะฮาวายสวยงามระดับสากล",
      "ระบบ TheBus บนเกาะโออาฮูครอบคลุมและเดินทางสะดวก"
    ],
    "cons": [
      "ค่าเช่าที่พักและค่าครองชีพสูงที่สุดในบรรดาทุกรัฐ",
      "สินค้าอุปโภคบริโภคมีราคาสูงเนื่องจากการขนส่งทางเกาะ"
    ],
    "editorial_summary": "ฮาวายมอบประสบการณ์ชีวิตเกาะเขตร้อนที่น่าประทับใจ ค่าแรงขั้นต่ำปรับเป็น $16.00/ชม. แต่ค่าเช่าที่พักและค่าครองชีพสูงมาก จึงเหมาะสำหรับผู้ที่ต้องการเน้นประสบการณ์มากกว่าการเก็บเงิน",
    "alumni_quote": "ฮาวายมอบประสบการณ์ชีวิตเกาะเขตร้อนที่น่าประทับใจ ค่าแรงขั้นต่ำปรับเป็น $16.00/ชม. แต่ค่าเช่าที่พักและค่าครองชีพสูงมาก จึงเหมาะสำหรับผู้ที่ต้องการเน้นประสบการณ์มากกว่าการเก็บเงิน",
    "best_for": "สายรักทะเลเขตร้อน อยากใช้ชีวิตบนเกาะฮาวาย ไม่เน้นเงินเก็บกลับบ้าน",
    "source_info": {
      "dol_wage_2026": "$16.00",
      "tax_foundation_2026": "1.4-8.25%",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B-",
        "note": "งานบริการตามฤดูกาลช่วง มี.ค.-เม.ย. มีจำกัด"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "B",
        "note": "มีงานบริการช่วงซัมเมอร์ระดับปานกลาง"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.)",
      "badge": "summer"
    },
    "exact_state_tax_pct": 4.5,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: ~4.50% (ตามขั้นบันได)"
  },
  {
    "id": "indiana",
    "name": "Indiana",
    "code": "IN",
    "nickname": "Hoosier State",
    "tier": "Tier B",
    "overall_grade": "B",
    "overall_score": 79,
    "region": "Midwest",
    "vibe": "Theme Park & Low Flat Tax",
    "statutory_min_wage": "$7.25/ชม. (Federal Minimum Wage)",
    "market_wage_estimate": "ฐาน $13.00 - $15.50 / รวมทิปเฉลี่ย ~$16.50 - $23.00+/ชม.",
    "min_wage": "กม. $7.25 | ฐาน $13-$15.5 (รวมทิป ~$16.5-$23+)",
    "min_wage_num": 13.0,
    "state_income_tax": "2.95% (Flat Rate อัปเดต 2026 + ภาษีเคาน์ตี 1-2.5%)",
    "tax_rate_num": 0.0305,
    "state_sales_tax": "7.0%",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$70 - $100 / สัปดาห์",
    "housing_cost_num": 85,
    "housing_type": "หอพักพนักงานสวนสนุก / บ้านเช่า",
    "commute_type": "รถรับส่งพนักงาน / เดินเท้า / จักรยาน",
    "grades": {
      "safety": {
        "grade": "A",
        "score": 92,
        "note": "เมือง Santa Claus มีความปลอดภัยสูง ชุมชนครอบครัว"
      },
      "scenery_friendliness": {
        "grade": "B",
        "score": 76,
        "note": "เมืองธีมคริสต์มาส ทะเลสาบ เนินทราย Indiana Dunes"
      },
      "tourism_crowds": {
        "grade": "B+",
        "score": 80,
        "note": "สวนสนุก Holiday World ดึงดูดนักท่องเที่ยวครอบครัวตลอดซัมเมอร์"
      },
      "earning_job2_tax": {
        "grade": "B-",
        "score": 72,
        "note": "ภาษีเงินได้รัฐต่ำ 2.95% ค่าครองชีพและอาหารราคาถูก หอพักสวนสนุกราคาประหยัด แต่งานนอกโครงการมีจำกัด"
      },
      "housing_value": {
        "grade": "A",
        "score": 92,
        "note": "หอพักพนักงานราคาประหยัดและปลอดภัย"
      },
      "commute_convenience": {
        "grade": "B-",
        "score": 72,
        "note": "มีรถรับส่งระหว่างหอพักกับสวนสนุก"
      },
      "alumni_rating": {
        "grade": "B-",
        "score": 74,
        "note": "สวนสนุกบรรยากาศอบอุ่น หอพักราคาถูก ภาษีรัฐต่ำ"
      }
    },
    "hotspots": [
      "Santa Claus (Holiday World & Splashin' Safari)",
      "Indiana Dunes National Park",
      "Monticello"
    ],
    "pros": [
      "Holiday World สวนสนุกที่ดูแลพนักงานดี มีหอพักพร้อมรถรับส่ง",
      "ภาษีเงินได้รัฐปรับลดลงเหลือ 2.95% ในปี 2026",
      "ค่าครองชีพและค่าที่พักราคาประหยัด"
    ],
    "cons": [
      "เมืองขนาดเล็ก โอกาสงานเสริมนอกโครงการมีจำกัด"
    ],
    "editorial_summary": "อินดีแอนามีสวนสนุกที่โดดเด่นเรื่องการดูแลพนักงานอย่าง Holiday World ในเมือง Santa Claus ภาษีเงินได้รัฐปรับลดเหลือ 2.95% และมีหอพักราคาประหยัด เหมาะสำหรับผู้ที่ต้องการความมั่นคงและค่าใช้จ่ายต่ำ",
    "alumni_quote": "อินดีแอนามีสวนสนุกที่โดดเด่นเรื่องการดูแลพนักงานอย่าง Holiday World ในเมือง Santa Claus ภาษีเงินได้รัฐปรับลดเหลือ 2.95% และมีหอพักราคาประหยัด เหมาะสำหรับผู้ที่ต้องการความมั่นคงและค่าใช้จ่ายต่ำ",
    "best_for": "สายชอบทำงานสวนสนุกครอบครัว มีหอพักราคาประหยัด ภาษีรัฐต่ำ",
    "source_info": {
      "dol_wage_2026": "$7.25",
      "tax_foundation_2026": "2.95% Flat",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B-",
        "note": "งานบริการตามฤดูกาลช่วง มี.ค.-เม.ย. มีจำกัด"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "B",
        "note": "มีงานบริการช่วงซัมเมอร์ระดับปานกลาง"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.)",
      "badge": "summer"
    },
    "exact_state_tax_pct": 3.05,
    "exact_local_tax_pct": 1.5,
    "exact_tax_note": "🏛️ ภาษีรัฐ 3.05% + ภาษีเคาน์ตีท้องถิ่น 1.50%"
  },
  {
    "id": "georgia",
    "name": "Georgia",
    "code": "GA",
    "nickname": "Peach State",
    "tier": "Tier B",
    "overall_grade": "B",
    "overall_score": 76,
    "region": "South",
    "vibe": "Historic Islands & Southern Charm",
    "statutory_min_wage": "$7.25/ชม. (Federal Minimum Wage)",
    "market_wage_estimate": "ฐาน $13.00 - $16.00 / รวมทิปเฉลี่ย ~$16.00 - $22.00+/ชม.",
    "min_wage": "กม. $7.25 | ฐาน $13-$16 (รวมทิป ~$16-$22+)",
    "min_wage_num": 13.5,
    "state_income_tax": "5.39% (Flat Rate อัปเดต 2026)",
    "tax_rate_num": 0.053899999999999997,
    "state_sales_tax": "4.0% (+ภาษีท้องถิ่น รวม 7.0-8.9%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$85 - $130 / สัปดาห์",
    "housing_cost_num": 105,
    "housing_type": "แชร์บ้านเช่า / หอพักรีสอร์ต",
    "commute_type": "ปั่นจักรยาน / เดินเท้า / ต้องพึ่งรถ",
    "grades": {
      "safety": {
        "grade": "A",
        "score": 90,
        "note": "เกาะ Jekyll Island และ St. Simons มีความปลอดภัยสูงมาก"
      },
      "scenery_friendliness": {
        "grade": "A-",
        "score": 88,
        "note": "ต้นโอ๊กโบราณ มอสสเปน ชายหาดสวยสงบ เมืองเก่า Savannah"
      },
      "tourism_crowds": {
        "grade": "B",
        "score": 74,
        "note": "นักท่องเที่ยวสายพักผ่อนสงบ ไม่พลุกพล่าน"
      },
      "earning_job2_tax": {
        "grade": "C+",
        "score": 68,
        "note": "ภาษีเงินได้ 5.39% ค่าครองชีพปานกลาง แต่งานเสริมมีเฉพาะในรีสอร์ตบนเกาะ"
      },
      "housing_value": {
        "grade": "B",
        "score": 78,
        "note": "ค่าครองชีพปานกลาง"
      },
      "commute_convenience": {
        "grade": "B-",
        "score": 72,
        "note": "บนเกาะรีสอร์ตปั่นจักรยานได้สะดวก"
      },
      "alumni_rating": {
        "grade": "B-",
        "score": 72,
        "note": "เกาะสวย สงบ ผู้คนอบอุ่น แต่โอกาสงานเสริมค่อนข้างจำกัด"
      }
    },
    "hotspots": [
      "Jekyll Island (Jekyll Island Club)",
      "St. Simons Island",
      "Savannah Historic District",
      "Lake Lanier"
    ],
    "pros": [
      "ธรรมชาติและประวัติศาสตร์งดงาม เงียบสงบ ปลอดภัยสูง",
      "เกาะ Jekyll Island ปั่นจักรยานสะดวก ร่มรื่น"
    ],
    "cons": [
      "ภาษีเงินได้รัฐแบบคงที่ 5.39%",
      "เมืองค่อนข้างสงบ โอกาสงานเสริมมีน้อย"
    ],
    "editorial_summary": "จอร์เจียมีเกาะประวัติศาสตร์ที่สวยงามและเงียบสงบอย่าง Jekyll Island ผู้คนมีอัธยาศัยไมตรี เหมาะสำหรับผู้ที่ต้องการความสงบและความปลอดภัยสูง",
    "alumni_quote": "จอร์เจียมีเกาะประวัติศาสตร์ที่สวยงามและเงียบสงบอย่าง Jekyll Island ผู้คนมีอัธยาศัยไมตรี เหมาะสำหรับผู้ที่ต้องการความสงบและความปลอดภัยสูง",
    "best_for": "สายรักธรรมชาติสงบ ประวัติศาสตร์ ผู้คนอบอุ่น ไม่เน้นปั๊มงานเสริม",
    "source_info": {
      "dol_wage_2026": "$7.25",
      "tax_foundation_2026": "5.39% Flat",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A",
        "note": "สภาพอากาศอบอุ่น มีนักท่องเที่ยว Spring Break ตั้งแต่ มี.ค. สวนสนุกและร้านอาหารเปิดบริการเต็มที่ตั้งแต่ต้นซีซัน"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A",
        "note": "นักท่องเที่ยวซัมเมอร์หนาแน่นมาก อากาศร้อนชื้นหรือแดดแรงช่วง ก.ค.-ส.ค. ชั่วโมงงานและทิปสูง"
      },
      "best_season": "Spring & Summer (ดีเยี่ยมทั้ง 2 ช่วง)",
      "badge": "both"
    },
    "exact_state_tax_pct": 5.39,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 5.39% (Flat Rate 2026)"
  },
  {
    "id": "alabama",
    "name": "Alabama",
    "code": "AL",
    "nickname": "Yellowhammer State",
    "tier": "Tier C",
    "overall_grade": "B-",
    "overall_score": 75,
    "region": "South",
    "vibe": "Gulf Coast & Southern Hospitality",
    "statutory_min_wage": "$7.25/ชม. (Federal Minimum Wage)",
    "market_wage_estimate": "ฐาน $13.00 - $15.00 / รวมทิปเฉลี่ย ~$15.50 - $20.00+/ชม.",
    "min_wage": "กม. $7.25 | ฐาน $13-$15 (รวมทิป ~$15.5-$20+)",
    "min_wage_num": 13.0,
    "state_income_tax": "2.0% - 5.0% (ตามขั้นบันได)",
    "tax_rate_num": 0.038,
    "state_sales_tax": "4.0% (+ภาษีท้องถิ่น รวม 8.0-10.0%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$80 - $120 / สัปดาห์",
    "housing_cost_num": 100,
    "housing_type": "บ้านเช่าแชร์ / โมเทล",
    "commute_type": "ต้องพึ่งรถยนต์ / ปั่นจักรยาน",
    "grades": {
      "safety": {
        "grade": "B+",
        "score": 82,
        "note": "เมืองชายหาด Gulf Shores และ Orange Beach มีอัตราอาชญากรรมต่ำตามเกณฑ์เมืองตากอากาศ"
      },
      "scenery_friendliness": {
        "grade": "B+",
        "score": 84,
        "note": "หาดทรายขาวริมอ่าวเม็กซิโก ผู้คนต้อนรับอบอุ่นแบบ Southern Hospitality"
      },
      "tourism_crowds": {
        "grade": "B",
        "score": 76,
        "note": "นักท่องเที่ยวหนาแน่นระดับปานกลางช่วงซัมเมอร์"
      },
      "earning_job2_tax": {
        "grade": "B-",
        "score": 72,
        "note": "ค่าแรงขั้นต่ำอิงอัตรากลาง งานเสริมมีเฉพาะร้านอาหารชายหาด แต่ค่าครองชีพและอาหารราคาถูก"
      },
      "housing_value": {
        "grade": "B+",
        "score": 84,
        "note": "ค่าเช่าบ้านและค่าครองชีพย่อมเยากว่าฝั่งตะวันออก"
      },
      "commute_convenience": {
        "grade": "D+",
        "score": 58,
        "note": "ไม่มีระบบขนส่งสาธารณะประจำทาง ต้องปั่นจักรยานหรือแชร์รถ"
      },
      "alumni_rating": {
        "grade": "B-",
        "score": 70,
        "note": "บรรยากาศสงบ ทะเลสวย ค่าใช้จ่ายไม่สูง แต่ตำแหน่งงานเสริมและการเดินทางจำกัด"
      }
    },
    "hotspots": [
      "Gulf Shores",
      "Orange Beach",
      "Foley (Tanger Outlets)"
    ],
    "pros": [
      "หาดทรายขาวละเอียด ค่าครองชีพและอาหารราคาไม่แพง",
      "ผู้คนท้องถิ่นอัธยาศัยดี มีความเป็นกันเองสูง"
    ],
    "cons": [
      "ต้องมีจักรยานหรือแชร์รถกับเพื่อน ไม่มีระบบขนส่งสาธารณะ",
      "โอกาสงานเสริมมีเฉพาะช่วงพีกของร้านอาหารชายหาด"
    ],
    "editorial_summary": "Gulf Shores และ Orange Beach เป็นเมืองตากอากาศชายหาดที่สงบ ทะเลสวย ค่าครองชีพสบายกระเป๋า เหมาะสำหรับผู้ที่ต้องการความเรียบง่าย แต่ต้องเตรียมความพร้อมเรื่องจักรยานหรือการแชร์รถ",
    "alumni_quote": "Gulf Shores และ Orange Beach เป็นเมืองตากอากาศชายหาดที่สงบ ทะเลสวย ค่าครองชีพสบายกระเป๋า เหมาะสำหรับผู้ที่ต้องการความเรียบง่าย แต่ต้องเตรียมความพร้อมเรื่องจักรยานหรือการแชร์รถ",
    "best_for": "สายชอบทะเลอ่าวเม็กซิโก เน้นค่าครองชีพสบายกระเป๋า ไม่เน้นแสงสี",
    "source_info": {
      "dol_wage_2026": "$7.25",
      "tax_foundation_2026": "2-5%",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A",
        "note": "สภาพอากาศอบอุ่น มีนักท่องเที่ยว Spring Break ตั้งแต่ มี.ค. สวนสนุกและร้านอาหารเปิดบริการเต็มที่ตั้งแต่ต้นซีซัน"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A",
        "note": "นักท่องเที่ยวซัมเมอร์หนาแน่นมาก อากาศร้อนชื้นหรือแดดแรงช่วง ก.ค.-ส.ค. ชั่วโมงงานและทิปสูง"
      },
      "best_season": "Spring & Summer (ดีเยี่ยมทั้ง 2 ช่วง)",
      "badge": "both"
    },
    "exact_state_tax_pct": 3.8,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: ~3.80% (ตามขั้นบันได)"
  },
  {
    "id": "west_virginia",
    "name": "West Virginia",
    "code": "WV",
    "nickname": "Mountain State",
    "tier": "Tier C",
    "overall_grade": "B-",
    "overall_score": 75,
    "region": "South",
    "vibe": "Whitewater Rafting & Mountain Adventure",
    "statutory_min_wage": "$8.75/ชม. (DOL Statutory Rate 2026)",
    "market_wage_estimate": "ฐาน $12.50 - $15.00 / รวมทิปเฉลี่ย ~$15.00 - $20.00+/ชม.",
    "min_wage": "กม. $8.75 | ฐาน $12.5-$15 (รวมทิป ~$15-$20+)",
    "min_wage_num": 13.0,
    "state_income_tax": "2.36% - 5.12% (ตามขั้นบันได)",
    "tax_rate_num": 0.027999999999999997,
    "state_sales_tax": "6.0% (+ภาษีท้องถิ่น รวม 6.5-7.0%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$70 - $110 / สัปดาห์",
    "housing_cost_num": 90,
    "housing_type": "แคมป์รีสอร์ต / เคบิน",
    "commute_type": "เดินเท้าในแคมป์ / รถรับส่งพนักงาน",
    "grades": {
      "safety": {
        "grade": "A-",
        "score": 88,
        "note": "แคมป์ล่องแก่งและพื้นที่รีสอร์ตมีความปลอดภัยดี"
      },
      "scenery_friendliness": {
        "grade": "A-",
        "score": 88,
        "note": "หุบเหว New River Gorge แม่น้ำเชี่ยว สะพานเหล็กสูงตระหง่าน"
      },
      "tourism_crowds": {
        "grade": "B",
        "score": 74,
        "note": "นักท่องเที่ยวสายกิจกรรมกลางแจ้งและล่องแก่ง"
      },
      "earning_job2_tax": {
        "grade": "C+",
        "score": 68,
        "note": "ค่าแรงปานกลาง ค่าครองชีพและที่พักในแคมป์ถูก แต่งานเสริมนอกแคมป์มีจำกัด"
      },
      "housing_value": {
        "grade": "A-",
        "score": 88,
        "note": "ค่าที่พักในแคมป์ราคาประหยัด"
      },
      "commute_convenience": {
        "grade": "D+",
        "score": 58,
        "note": "อยู่ในป่าเขา ต้องพึ่งพารถของแคมป์"
      },
      "alumni_rating": {
        "grade": "C+",
        "score": 70,
        "note": "กิจกรรมล่องแก่งสนุก ธรรมชาติบริสุทธิ์ แต่อยู่ห่างไกลเมืองใหญ่"
      }
    },
    "hotspots": [
      "New River Gorge National Park (Adventures on the Gorge)",
      "Harpers Ferry",
      "Snowshoe"
    ],
    "pros": [
      "ศูนย์กลางกิจกรรมแอดเวนเจอร์ ล่องแก่งระดับสากล ปีนผา",
      "ค่าครองชีพและค่าที่พักราคาประหยัด",
      "ทิวทัศน์หุบเขาและสะพาน New River Gorge ยิ่งใหญ่"
    ],
    "cons": [
      "อยู่กลางธรรมชาติห่างไกลเมือง ไม่มีระบบขนส่งสาธารณะ",
      "โอกาสงานเสริมนอกโครงการมีน้อย"
    ],
    "editorial_summary": "เวสต์เวอร์จิเนียมีอุทยานแห่งชาติ New River Gorge ที่โดดเด่นเรื่องการล่องแก่งและกิจกรรมกลางแจ้ง ค่าครองชีพและที่พักราคาประหยัด เหมาะสำหรับผู้ที่ชอบธรรมชาติแบบแอดเวนเจอร์",
    "alumni_quote": "เวสต์เวอร์จิเนียมีอุทยานแห่งชาติ New River Gorge ที่โดดเด่นเรื่องการล่องแก่งและกิจกรรมกลางแจ้ง ค่าครองชีพและที่พักราคาประหยัด เหมาะสำหรับผู้ที่ชอบธรรมชาติแบบแอดเวนเจอร์",
    "best_for": "สายลุย Adventure รักการล่องแก่ง ปีนผา และชีวิตกลางแจ้งธรรมชาติ",
    "source_info": {
      "dol_wage_2026": "$8.75",
      "tax_foundation_2026": "2.36-5.12%",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B-",
        "note": "งานบริการตามฤดูกาลช่วง มี.ค.-เม.ย. มีจำกัด"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "B",
        "note": "มีงานบริการช่วงซัมเมอร์ระดับปานกลาง"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.)",
      "badge": "summer"
    },
    "exact_state_tax_pct": 2.8,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: ~2.80% (ตามขั้นบันได)"
  },
  {
    "id": "kentucky",
    "name": "Kentucky",
    "code": "KY",
    "nickname": "Bluegrass State",
    "tier": "Tier C",
    "overall_grade": "B-",
    "overall_score": 72,
    "region": "South",
    "vibe": "Caves, Countryside & Theme Park",
    "statutory_min_wage": "$7.25/ชม. (Federal Minimum Wage)",
    "market_wage_estimate": "ฐาน $13.00 - $15.50 / รวมทิปเฉลี่ย ~$15.50 - $20.50+/ชม.",
    "min_wage": "กม. $7.25 | ฐาน $13-$15.5 (รวมทิป ~$15.5-$20.5+)",
    "min_wage_num": 13.5,
    "state_income_tax": "4.0% (Flat Rate อัปเดต 2026)",
    "tax_rate_num": 0.04,
    "state_sales_tax": "6.0%",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$75 - $110 / สัปดาห์",
    "housing_cost_num": 90,
    "housing_type": "หอพักพนักงาน / โมเทล",
    "commute_type": "รถรับส่ง / เดินเท้า",
    "grades": {
      "safety": {
        "grade": "B+",
        "score": 82,
        "note": "พื้นที่อุทยานและเมืองเล็กมีความปลอดภัยดี"
      },
      "scenery_friendliness": {
        "grade": "B",
        "score": 76,
        "note": "ถ้ำแมมมอธ ทุ่งหญ้าเลี้ยงม้า ธรรมชาติร่มรื่น"
      },
      "tourism_crowds": {
        "grade": "B-",
        "score": 70,
        "note": "นักท่องเที่ยวมาชมอุทยานถ้ำและสวนสนุกท้องถิ่น"
      },
      "earning_job2_tax": {
        "grade": "C+",
        "score": 68,
        "note": "ภาษีเงินได้รัฐ 4.0% ค่าครองชีพและอาหารราคาถูกมาก แต่งานเสริมมีจำกัด"
      },
      "housing_value": {
        "grade": "B+",
        "score": 84,
        "note": "ค่าที่พักราคาประหยัด"
      },
      "commute_convenience": {
        "grade": "D+",
        "score": 58,
        "note": "การเดินทางนอกแคมป์ต้องใช้รถยนต์"
      },
      "alumni_rating": {
        "grade": "C+",
        "score": 70,
        "note": "อุทยานถ้ำสวยแปลกตา ค่าครองชีพถูก แต่เมืองค่อนข้างสงบ"
      }
    },
    "hotspots": [
      "Mammoth Cave National Park",
      "Louisville (Kentucky Kingdom)",
      "Lexington"
    ],
    "pros": [
      "อุทยานถ้ำ Mammoth Cave มีชื่อเสียงระดับโลก",
      "ค่าครองชีพถูก ภาษีเงินได้รัฐแบบคงที่ 4.0%"
    ],
    "cons": [
      "โอกาสงานเสริมมีจำกัด ระบบขนส่งสาธารณะน้อย"
    ],
    "editorial_summary": "เคนทักกีมีอุทยานแห่งชาติถ้ำแมมมอธที่น่าสนใจ ค่าครองชีพย่อมเยาและภาษีรัฐคงที่ 4.0% แต่การเดินทางและโอกาสงานเสริมมีน้อยกว่าเมืองตากอากาศขนาดใหญ่",
    "alumni_quote": "เคนทักกีมีอุทยานแห่งชาติถ้ำแมมมอธที่น่าสนใจ ค่าครองชีพย่อมเยาและภาษีรัฐคงที่ 4.0% แต่การเดินทางและโอกาสงานเสริมมีน้อยกว่าเมืองตากอากาศขนาดใหญ่",
    "best_for": "สายชอบธรรมชาติใต้พิภพ ถ้ำแมมมอธ และค่าครองชีพประหยัด",
    "source_info": {
      "dol_wage_2026": "$7.25",
      "tax_foundation_2026": "4.0% Flat",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B-",
        "note": "งานบริการตามฤดูกาลช่วง มี.ค.-เม.ย. มีจำกัด"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "B",
        "note": "มีงานบริการช่วงซัมเมอร์ระดับปานกลาง"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.)",
      "badge": "summer"
    },
    "exact_state_tax_pct": 4.0,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 4.00% (Flat Rate)"
  },
  {
    "id": "louisiana",
    "name": "Louisiana",
    "code": "LA",
    "nickname": "Pelican State",
    "tier": "Tier C",
    "overall_grade": "B-",
    "overall_score": 72,
    "region": "South",
    "vibe": "Jazz Culture, History & Culinary",
    "statutory_min_wage": "$7.25/ชม. (Federal Minimum Wage)",
    "market_wage_estimate": "ฐาน $12.50 - $14.50 / รวมทิปเฉลี่ย ~$16.50 - $23.00+/ชม.",
    "min_wage": "กม. $7.25 | ฐาน $12.5-$14.5 (รวมทิป ~$16.5-$23+)",
    "min_wage_num": 12.5,
    "state_income_tax": "3.0% (Flat Rate อัปเดตการปฏิรูปภาษี 2025/2026)",
    "tax_rate_num": 0.03,
    "state_sales_tax": "5.0% (+ภาษีท้องถิ่น รวม 9.0-10.0%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$90 - $140 / สัปดาห์",
    "housing_cost_num": 115,
    "housing_type": "อพาร์ตเมนต์แชร์ / โฮสเทล",
    "commute_type": "Streetcar / เดินเท้า / บัส",
    "grades": {
      "safety": {
        "grade": "D+",
        "score": 55,
        "note": "ต้องใช้ความระมัดระวังเป็นพิเศษในพื้นที่เมืองใหญ่ โดยเฉพาะเวลากลางคืน"
      },
      "scenery_friendliness": {
        "grade": "A-",
        "score": 88,
        "note": "ดนตรีแจ๊สสด สถาปัตยกรรม French Quarter อาหารเคจุนเลิศรส"
      },
      "tourism_crowds": {
        "grade": "A",
        "score": 90,
        "note": "นักท่องเที่ยวสายวัฒนธรรมและเสียงเพลงหนาแน่น"
      },
      "earning_job2_tax": {
        "grade": "C+",
        "score": 68,
        "note": "ภาษีเงินได้ปรับลดเป็น 3% Flat ค่าครองชีพและอาหารไม่แพง แต่ค่าแรงขั้นต่ำอิงอัตรากลาง"
      },
      "housing_value": {
        "grade": "C+",
        "score": 68,
        "note": "ค่าที่พักระดับปานกลาง"
      },
      "commute_convenience": {
        "grade": "B",
        "score": 76,
        "note": "มีรถราง Streetcar ในตัวเมือง New Orleans"
      },
      "alumni_rating": {
        "grade": "C",
        "score": 62,
        "note": "อาหารและวัฒนธรรมโดดเด่นมาก แต่ต้องระวังเรื่องความปลอดภัยอย่างสูง"
      }
    },
    "hotspots": [
      "New Orleans (French Quarter / Garden District)",
      "Baton Rouge"
    ],
    "pros": [
      "วัฒนธรรม ดนตรีแจ๊ส และอาหารเคจุน/ครีโอลมีเอกลักษณ์ระดับโลก",
      "ภาษีเงินได้รัฐปรับลดเหลือ 3.0% Flat Rate ในปี 2025/2026",
      "มีรถราง Streetcar ให้บริการในเมือง"
    ],
    "cons": [
      "สถิติอาชญากรรมในตัวเมืองต้องระมัดระวังเป็นพิเศษ",
      "หน้าร้อนอากาศร้อนชื้นจัด"
    ],
    "editorial_summary": "หลุยเซียนาและนิวออร์ลีนส์มีเสน่ห์ด้านดนตรีแจ๊สและวัฒนธรรมอาหาร ภาษีเงินได้รัฐปรับลดเป็น 3% Flat Rate แต่ผู้เข้าร่วมโครงการต้องให้ความสำคัญกับความปลอดภัยส่วนบุคคลเป็นพิเศษ",
    "alumni_quote": "หลุยเซียนาและนิวออร์ลีนส์มีเสน่ห์ด้านดนตรีแจ๊สและวัฒนธรรมอาหาร ภาษีเงินได้รัฐปรับลดเป็น 3% Flat Rate แต่ผู้เข้าร่วมโครงการต้องให้ความสำคัญกับความปลอดภัยส่วนบุคคลเป็นพิเศษ",
    "best_for": "สายรักดนตรีแจ๊สและวัฒนธรรมอาหาร (ต้องมีทักษะการดูแลความปลอดภัยสูง)",
    "source_info": {
      "dol_wage_2026": "$7.25",
      "tax_foundation_2026": "3.0% Flat, 5.0% State Sales",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A",
        "note": "สภาพอากาศอบอุ่น มีนักท่องเที่ยว Spring Break ตั้งแต่ มี.ค. สวนสนุกและร้านอาหารเปิดบริการเต็มที่ตั้งแต่ต้นซีซัน"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A",
        "note": "นักท่องเที่ยวซัมเมอร์หนาแน่นมาก อากาศร้อนชื้นหรือแดดแรงช่วง ก.ค.-ส.ค. ชั่วโมงงานและทิปสูง"
      },
      "best_season": "Spring & Summer (ดีเยี่ยมทั้ง 2 ช่วง)",
      "badge": "both"
    },
    "exact_state_tax_pct": 3.0,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 3.00% (Flat Rate 2026)"
  },
  {
    "id": "new_mexico",
    "name": "New Mexico",
    "code": "NM",
    "nickname": "Land of Enchantment",
    "tier": "Tier C",
    "overall_grade": "B-",
    "overall_score": 72,
    "region": "Mountain West",
    "vibe": "Pueblo Architecture, Art & Desert",
    "statutory_min_wage": "$12.00/ชม. (New Mexico Statewide Standard 2026)",
    "market_wage_estimate": "ฐาน $12.50 - $14.50 / รวมทิปเฉลี่ย ~$15.00 - $19.50+/ชม.",
    "min_wage": "กม. $12.00 | ฐาน $12.5-$14.5 (รวมทิป ~$15-$19.5+)",
    "min_wage_num": 12.0,
    "state_income_tax": "1.7% - 5.9% (ตามขั้นบันได)",
    "tax_rate_num": 0.025,
    "state_sales_tax": "5.0% Gross Receipts Tax (+ท้องถิ่น รวม 7.5-8.5%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$90 - $130 / สัปดาห์",
    "housing_cost_num": 110,
    "housing_type": "บ้านเช่า / โมเทล",
    "commute_type": "ต้องพึ่งรถยนต์ / ปั่นจักรยาน",
    "grades": {
      "safety": {
        "grade": "B",
        "score": 74,
        "note": "Santa Fe และ Taos มีความปลอดภัยตามเกณฑ์เมืองท่องเที่ยว"
      },
      "scenery_friendliness": {
        "grade": "A-",
        "score": 86,
        "note": "ตึกดินเผา Adobe ภูเขาสีชมพู หอศิลป์ อาหารเม็กซิกันพื้นเมือง"
      },
      "tourism_crowds": {
        "grade": "B",
        "score": 74,
        "note": "นักท่องเที่ยวสายศิลปะและวัฒนธรรม"
      },
      "earning_job2_tax": {
        "grade": "C+",
        "score": 68,
        "note": "ค่าแรงปานกลาง ค่าครองชีพไม่แพง แต่งานบริการมีเฉพาะโซนร้านอาหารในเมืองศิลปะ"
      },
      "housing_value": {
        "grade": "B",
        "score": 78,
        "note": "ค่าครองชีพปานกลาง"
      },
      "commute_convenience": {
        "grade": "D+",
        "score": 58,
        "note": "ขนส่งสาธารณะจำกัด ต้องพึ่งพารถยนต์"
      },
      "alumni_rating": {
        "grade": "C+",
        "score": 70,
        "note": "เมืองสวยแปลกตา ถ่ายรูปสวย แต่การเดินทางและงานเสริมมีข้อจำกัด"
      }
    },
    "hotspots": [
      "Santa Fe (Historic Plaza)",
      "Taos Ski Valley (Summer)",
      "Albuquerque"
    ],
    "pros": [
      "สถาปัตยกรรม Adobe และวัฒนธรรมพื้นเมืองมีเอกลักษณ์โดดเด่น",
      "Santa Fe เป็นเมืองศิลปะระดับสากล"
    ],
    "cons": [
      "ระบบขนส่งสาธารณะน้อย ต้องมีรถยนต์",
      "โอกาสงานเสริมมีจำกัด"
    ],
    "editorial_summary": "นิวเม็กซิโกมีจุดเด่นด้านสถาปัตยกรรม Adobe และวัฒนธรรมศิลปะใน Santa Fe แต่การเดินทางต้องพึ่งพารถยนต์และโอกาสงานเสริมมีจำกัด",
    "alumni_quote": "นิวเม็กซิโกมีจุดเด่นด้านสถาปัตยกรรม Adobe และวัฒนธรรมศิลปะใน Santa Fe แต่การเดินทางต้องพึ่งพารถยนต์และโอกาสงานเสริมมีจำกัด",
    "best_for": "สายรักศิลปะ ประวัติศาสตร์ชนเผ่า และชอบวัฒนธรรมที่มีเอกลักษณ์",
    "source_info": {
      "dol_wage_2026": "$12.00-12.50",
      "tax_foundation_2026": "1.7-5.9%",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B-",
        "note": "งานบริการตามฤดูกาลช่วง มี.ค.-เม.ย. มีจำกัด"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "B",
        "note": "มีงานบริการช่วงซัมเมอร์ระดับปานกลาง"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.)",
      "badge": "summer"
    },
    "exact_state_tax_pct": 2.5,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: ~2.50% (ตามขั้นบันได)"
  },
  {
    "id": "iowa",
    "name": "Iowa",
    "code": "IA",
    "nickname": "Hawkeye State",
    "tier": "Tier C",
    "overall_grade": "B-",
    "overall_score": 71,
    "region": "Midwest",
    "vibe": "Lake Resort & Midwestern Community",
    "statutory_min_wage": "$7.25/ชม. (Federal Minimum Wage)",
    "market_wage_estimate": "ฐาน $12.50 - $14.50 / รวมทิปเฉลี่ย ~$15.00 - $19.50+/ชม.",
    "min_wage": "กม. $7.25 | ฐาน $12.5-$14.5 (รวมทิป ~$15-$19.5+)",
    "min_wage_num": 12.5,
    "state_income_tax": "3.8% (Flat Rate อัปเดต 2026)",
    "tax_rate_num": 0.038,
    "state_sales_tax": "6.0% (+ภาษีท้องถิ่น 1%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$75 - $110 / สัปดาห์",
    "housing_cost_num": 90,
    "housing_type": "เคบิน / บ้านเช่า",
    "commute_type": "ปั่นจักรยาน / ต้องพึ่งรถ",
    "grades": {
      "safety": {
        "grade": "A",
        "score": 90,
        "note": "เมืองเล็กและโซนทะเลสาบมีความปลอดภัยดี"
      },
      "scenery_friendliness": {
        "grade": "B-",
        "score": 72,
        "note": "ทะเลสาบ Okoboji ทุ่งข้าวโพด ผู้คนมีน้ำใจ"
      },
      "tourism_crowds": {
        "grade": "C+",
        "score": 68,
        "note": "นักท่องเที่ยวระดับภูมิภาคมาพักผ่อนริมทะเลสาบ"
      },
      "earning_job2_tax": {
        "grade": "C+",
        "score": 66,
        "note": "ภาษีเงินได้รัฐ 3.8% ค่าครองชีพถูกมาก อาหารราคาเป็นมิตร แต่งานบริการตามฤดูกาลมีเฉพาะช่วงพีก"
      },
      "housing_value": {
        "grade": "B+",
        "score": 82,
        "note": "ค่าเช่าและค่าครองชีพย่อมเยา"
      },
      "commute_convenience": {
        "grade": "D+",
        "score": 58,
        "note": "ไม่มีระบบขนส่งสาธารณะ ต้องพึ่งพาจักรยานหรือรถ"
      },
      "alumni_rating": {
        "grade": "C+",
        "score": 68,
        "note": "สงบ ผู้คนเป็นมิตร แต่ตำแหน่งงาน J-1 มีน้อย"
      }
    },
    "hotspots": [
      "Okoboji (Arnolds Park Amusement Park)",
      "Adventureland Resort (Altoona)"
    ],
    "pros": [
      "ค่าครองชีพย่อมเยา ภาษีเงินได้รัฐปรับลดเป็น 3.8% Flat Rate",
      "Arnolds Park สวนสนุกริมทะเลสาบประวัติศาสตร์"
    ],
    "cons": [
      "ตำแหน่งงานเปิดรับ J-1 มีจำนวนจำกัด",
      "การเดินทางออกนอกพื้นที่ต้องพึ่งพารถยนต์"
    ],
    "editorial_summary": "ไอโอวามีเมืองทะเลสาบอย่าง Okoboji ที่มีบรรยากาศสงบและผู้คนเป็นมิตร ภาษีเงินได้รัฐปรับลดเหลือ 3.8% แต่ตำแหน่งงานและระบบขนส่งสาธารณะค่อนข้างจำกัด",
    "alumni_quote": "ไอโอวามีเมืองทะเลสาบอย่าง Okoboji ที่มีบรรยากาศสงบและผู้คนเป็นมิตร ภาษีเงินได้รัฐปรับลดเหลือ 3.8% แต่ตำแหน่งงานและระบบขนส่งสาธารณะค่อนข้างจำกัด",
    "best_for": "สายชอบบรรยากาศมิดเวสต์แท้ๆ สงบ เรียบง่าย ค่าครองชีพย่อมเยา",
    "source_info": {
      "dol_wage_2026": "$7.25",
      "tax_foundation_2026": "3.8% Flat",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B-",
        "note": "งานบริการตามฤดูกาลช่วง มี.ค.-เม.ย. มีจำกัด"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "B",
        "note": "มีงานบริการช่วงซัมเมอร์ระดับปานกลาง"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.)",
      "badge": "summer"
    },
    "exact_state_tax_pct": 3.8,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 3.80% (Flat Tax 2026)"
  },
  {
    "id": "arkansas",
    "name": "Arkansas",
    "code": "AR",
    "nickname": "Natural State",
    "tier": "Tier C",
    "overall_grade": "C+",
    "overall_score": 69,
    "region": "South",
    "vibe": "Hot Springs & Ozark Nature",
    "statutory_min_wage": "$11.00/ชม. (DOL Statutory Rate 2026)",
    "market_wage_estimate": "ฐาน $11.00 - $13.50 / รวมทิปเฉลี่ย ~$13.50 - $18.50+/ชม.",
    "min_wage": "กม. $11.00 | ฐาน $11-$13.5 (รวมทิป ~$13.5-$18.5+)",
    "min_wage_num": 11.0,
    "state_income_tax": "2.0% - 3.9% (ตามขั้นบันได)",
    "tax_rate_num": 0.039,
    "state_sales_tax": "6.5% (+ภาษีท้องถิ่น รวม 9.0-10.0%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$75 - $110 / สัปดาห์",
    "housing_cost_num": 90,
    "housing_type": "โมเทล / บ้านเช่า",
    "commute_type": "ต้องพึ่งรถยนต์ / ปั่นจักรยาน",
    "grades": {
      "safety": {
        "grade": "B",
        "score": 74,
        "note": "เมืองท่องเที่ยว Hot Springs มีความปลอดภัยระดับมาตรฐาน"
      },
      "scenery_friendliness": {
        "grade": "B",
        "score": 76,
        "note": "อุทยานน้ำพุร้อน ภูเขา Ozark ป่าไม้ร่มรื่น"
      },
      "tourism_crowds": {
        "grade": "C+",
        "score": 68,
        "note": "นักท่องเที่ยวระดับภูมิภาค ไม่หนาแน่นมาก"
      },
      "earning_job2_tax": {
        "grade": "C+",
        "score": 66,
        "note": "ค่าแรงขั้นต่ำ $11.00 ค่าครองชีพและอาหารราคาถูก แต่งานเสริมตามฤดูกาลมีจำกัด"
      },
      "housing_value": {
        "grade": "B+",
        "score": 84,
        "note": "ค่าเช่าและค่าครองชีพย่อมเยา"
      },
      "commute_convenience": {
        "grade": "D",
        "score": 52,
        "note": "ระบบขนส่งสาธารณะจำกัด ต้องพึ่งพารถยนต์"
      },
      "alumni_rating": {
        "grade": "C+",
        "score": 68,
        "note": "เมืองสงบ ค่าใช้จ่ายไม่สูง แต่โอกาสการทำงานเสริมและการเดินทางมีข้อจำกัด"
      }
    },
    "hotspots": [
      "Hot Springs National Park",
      "Eureka Springs",
      "Ozark National Forest"
    ],
    "pros": [
      "ค่าครองชีพและค่าเช่าที่พักย่อมเยา",
      "เมืองน้ำพุร้อนประวัติศาสตร์ บรรยากาศสงบ"
    ],
    "cons": [
      "ค่าแรงขั้นต่ำตามกฎหมาย $11.00",
      "ไม่มีระบบขนส่งสาธารณะ การเดินทางต้องพึ่งรถ",
      "โอกาสงานเสริมมีน้อย"
    ],
    "editorial_summary": "อาร์คันซอเป็นรัฐที่ค่าครองชีพต่ำ มีสถานที่ท่องเที่ยวเชิงประวัติศาสตร์อย่าง Hot Springs แต่โอกาสงานเสริมและการเดินทางค่อนข้างจำกัด เหมาะกับผู้ที่ชอบความเรียบง่าย",
    "alumni_quote": "อาร์คันซอเป็นรัฐที่ค่าครองชีพต่ำ มีสถานที่ท่องเที่ยวเชิงประวัติศาสตร์อย่าง Hot Springs แต่โอกาสงานเสริมและการเดินทางค่อนข้างจำกัด เหมาะกับผู้ที่ชอบความเรียบง่าย",
    "best_for": "สายชอบความสงบ สปาน้ำพุร้อน ไม่เน้นการทำงานเสริม",
    "source_info": {
      "dol_wage_2026": "$11.00",
      "tax_foundation_2026": "2.0-3.9%",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B-",
        "note": "งานบริการตามฤดูกาลช่วง มี.ค.-เม.ย. มีจำกัด"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "B",
        "note": "มีงานบริการช่วงซัมเมอร์ระดับปานกลาง"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.)",
      "badge": "summer"
    },
    "exact_state_tax_pct": 3.9,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 3.90% (ปรับลด 2026)"
  },
  {
    "id": "nebraska",
    "name": "Nebraska",
    "code": "NE",
    "nickname": "Cornhusker State",
    "tier": "Tier C",
    "overall_grade": "C+",
    "overall_score": 68,
    "region": "Midwest",
    "vibe": "Plains & $15 Minimum Wage",
    "statutory_min_wage": "$15.00/ชม. (Nebraska Statutory Minimum Wage 2026)",
    "market_wage_estimate": "ฐาน $15.00 - $16.50 / รวมทิปเฉลี่ย ~$17.50 - $21.50+/ชม.",
    "min_wage": "กม. $15.00 | ฐาน $15-$16.5 (รวมทิป ~$17.5-$21.5+)",
    "min_wage_num": 15.0,
    "state_income_tax": "2.46% - 5.2% (ตามขั้นบันได อัปเดต 2026)",
    "tax_rate_num": 0.028999999999999998,
    "state_sales_tax": "5.5% (+ภาษีท้องถิ่น รวม 7.0-7.5%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$75 - $110 / สัปดาห์",
    "housing_cost_num": 90,
    "housing_type": "บ้านเช่า / โมเทล",
    "commute_type": "ต้องพึ่งรถยนต์",
    "grades": {
      "safety": {
        "grade": "A-",
        "score": 88,
        "note": "เมืองสงบและมีความปลอดภัยระดับดี"
      },
      "scenery_friendliness": {
        "grade": "C+",
        "score": 68,
        "note": "ทุ่งหญ้าและทะเลสาบ"
      },
      "tourism_crowds": {
        "grade": "D+",
        "score": 58,
        "note": "นักท่องเที่ยวตามฤดูกาลมีจำกัด"
      },
      "earning_job2_tax": {
        "grade": "C+",
        "score": 66,
        "note": "ค่าแรงขั้นต่ำ $15.00 ค่าครองชีพถูก แต่งานบริการตามฤดูกาลนอกเมืองมีจำกัด"
      },
      "housing_value": {
        "grade": "B+",
        "score": 84,
        "note": "ค่าครองชีพถูก"
      },
      "commute_convenience": {
        "grade": "D",
        "score": 50,
        "note": "ไม่มีระบบขนส่งสาธารณะประจำทาง"
      },
      "alumni_rating": {
        "grade": "C",
        "score": 62,
        "note": "ค่าแรงปรับเป็น $15 แต่ไม่ใช่เมืองท่องเที่ยวหลัก"
      }
    },
    "hotspots": [
      "Omaha",
      "Lincoln",
      "Lake McConaughy"
    ],
    "pros": [
      "ค่าแรงขั้นต่ำปรับขึ้นเป็น $15.00/ชม. ในปี 2026 (Initiative 433)",
      "ค่าครองชีพต่ำ"
    ],
    "cons": [
      "ไม่ใช่เมืองท่องเที่ยวตามฤดูกาลหลัก ขนส่งสาธารณะน้อย"
    ],
    "editorial_summary": "เนแบรสกาปรับค่าแรงขั้นต่ำเป็น $15.00/ชม. ในปี 2026 ค่าครองชีพย่อมเยา แต่ไม่ใช่เมืองท่องเที่ยวตามฤดูกาลหลัก การเดินทางต้องพึ่งพารถยนต์",
    "alumni_quote": "เนแบรสกาปรับค่าแรงขั้นต่ำเป็น $15.00/ชม. ในปี 2026 ค่าครองชีพย่อมเยา แต่ไม่ใช่เมืองท่องเที่ยวตามฤดูกาลหลัก การเดินทางต้องพึ่งพารถยนต์",
    "best_for": "สายชอบความสงบเรียบง่าย ค่าแรง $15 และค่าครองชีพถูก",
    "source_info": {
      "dol_wage_2026": "$15.00",
      "tax_foundation_2026": "2.46-5.2%",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B-",
        "note": "งานบริการตามฤดูกาลช่วง มี.ค.-เม.ย. มีจำกัด"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "B",
        "note": "มีงานบริการช่วงซัมเมอร์ระดับปานกลาง"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.)",
      "badge": "summer"
    },
    "exact_state_tax_pct": 2.9,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: ~2.90% (ตามขั้นบันได)"
  },
  {
    "id": "kansas",
    "name": "Kansas",
    "code": "KS",
    "nickname": "Sunflower State",
    "tier": "Tier C",
    "overall_grade": "C+",
    "overall_score": 65,
    "region": "Midwest",
    "vibe": "Plains & Suburban Communities",
    "statutory_min_wage": "$7.25/ชม. (Federal Minimum Wage)",
    "market_wage_estimate": "ฐาน $12.00 - $14.00 / รวมทิปเฉลี่ย ~$14.50 - $19.00+/ชม.",
    "min_wage": "กม. $7.25 | ฐาน $12-$14 (รวมทิป ~$14.5-$19+)",
    "min_wage_num": 12.5,
    "state_income_tax": "3.1% - 5.58% (ตามขั้นบันได)",
    "tax_rate_num": 0.031,
    "state_sales_tax": "6.5% (+ภาษีท้องถิ่น รวม 8.0-9.5%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$70 - $105 / สัปดาห์",
    "housing_cost_num": 85,
    "housing_type": "อพาร์ตเมนต์ / โมเทล",
    "commute_type": "ต้องพึ่งรถยนต์",
    "grades": {
      "safety": {
        "grade": "B+",
        "score": 80,
        "note": "พื้นที่ชานเมืองมีความปลอดภัยตามเกณฑ์"
      },
      "scenery_friendliness": {
        "grade": "C+",
        "score": 68,
        "note": "ทุ่งหญ้าและทิวทัศน์ที่ราบกว้างใหญ่"
      },
      "tourism_crowds": {
        "grade": "D+",
        "score": 55,
        "note": "ไม่ใช่แหล่งท่องเที่ยวฤดูร้อนหลัก"
      },
      "earning_job2_tax": {
        "grade": "C",
        "score": 62,
        "note": "ค่าครองชีพถูก แต่ไม่ใช่เมืองท่องเที่ยวตามฤดูกาล แทบไม่มีงานบริการ J-1 เปิดรับ"
      },
      "housing_value": {
        "grade": "A-",
        "score": 86,
        "note": "ค่าครองชีพถูก"
      },
      "commute_convenience": {
        "grade": "D",
        "score": 50,
        "note": "ไม่มีระบบขนส่งสาธารณะที่ครอบคลุม"
      },
      "alumni_rating": {
        "grade": "C",
        "score": 60,
        "note": "แทบไม่มีนายจ้าง J-1 เปิดรับทั่วไป"
      }
    },
    "hotspots": [
      "Kansas City suburbs",
      "Wichita"
    ],
    "pros": [
      "ค่าครองชีพต่ำ"
    ],
    "cons": [
      "ไม่ใช่เมืองท่องเที่ยวตามฤดูกาล แทบไม่มีโครงการ J-1 เปิดรับ"
    ],
    "editorial_summary": "แคนซัสไม่ใช่แหล่งท่องเที่ยวตามฤดูกาลหลักของโครงการ J-1 จึงไม่แนะนำสำหรับผู้เข้าร่วมโครงการทั่วไป ยกเว้นมีผู้ดูแลส่วนบุคคลในพื้นที่",
    "alumni_quote": "แคนซัสไม่ใช่แหล่งท่องเที่ยวตามฤดูกาลหลักของโครงการ J-1 จึงไม่แนะนำสำหรับผู้เข้าร่วมโครงการทั่วไป ยกเว้นมีผู้ดูแลส่วนบุคคลในพื้นที่",
    "best_for": "ไม่แนะนำสำหรับนักศึกษาทั่วไป",
    "source_info": {
      "dol_wage_2026": "$7.25",
      "tax_foundation_2026": "3.1-5.58%",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B-",
        "note": "งานบริการตามฤดูกาลช่วง มี.ค.-เม.ย. มีจำกัด"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "B",
        "note": "มีงานบริการช่วงซัมเมอร์ระดับปานกลาง"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.)",
      "badge": "summer"
    },
    "exact_state_tax_pct": 3.1,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 3.10% (ฐานขั้นแรก $0-$15,000)"
  },
  {
    "id": "mississippi",
    "name": "Mississippi",
    "code": "MS",
    "nickname": "Magnolia State",
    "tier": "Tier C",
    "overall_grade": "C",
    "overall_score": 63,
    "region": "South",
    "vibe": "Gulf Coast & Casino Strip",
    "statutory_min_wage": "$7.25/ชม. (Federal Minimum Wage)",
    "market_wage_estimate": "ฐาน $11.50 - $13.50 / รวมทิปเฉลี่ย ~$14.00 - $18.50+/ชม.",
    "min_wage": "กม. $7.25 | ฐาน $11.5-$13.5 (รวมทิป ~$14-$18.5+)",
    "min_wage_num": 12.0,
    "state_income_tax": "4.0% (Flat Rate อัปเดต 2026 ปรับลดจาก 4.7%)",
    "tax_rate_num": 0.04,
    "state_sales_tax": "7.0%",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$75 - $110 / สัปดาห์",
    "housing_cost_num": 90,
    "housing_type": "โมเทล / บ้านเช่า",
    "commute_type": "ต้องพึ่งรถยนต์",
    "grades": {
      "safety": {
        "grade": "C+",
        "score": 66,
        "note": "โซนคาสิโน Biloxi มีความปลอดภัยระดับมาตรฐาน"
      },
      "scenery_friendliness": {
        "grade": "C+",
        "score": 68,
        "note": "ชายหาดอ่าวเม็กซิโกและรีสอร์ตคาสิโน"
      },
      "tourism_crowds": {
        "grade": "C+",
        "score": 65,
        "note": "นักท่องเที่ยวสายคาสิโนและกลุ่มท้องถิ่น"
      },
      "earning_job2_tax": {
        "grade": "C",
        "score": 60,
        "note": "ค่าครองชีพถูกมาก แต่ค่าแรงขั้นต่ำอิงอัตรากลาง และงานบริการตามฤดูกาลมีน้อย"
      },
      "housing_value": {
        "grade": "B",
        "score": 78,
        "note": "ค่าครองชีพถูก"
      },
      "commute_convenience": {
        "grade": "D",
        "score": 48,
        "note": "ไม่มีระบบขนส่งสาธารณะประจำทาง"
      },
      "alumni_rating": {
        "grade": "C",
        "score": 58,
        "note": "ตำแหน่งงาน J-1 และการเดินทางมีข้อจำกัด"
      }
    },
    "hotspots": [
      "Biloxi (Casino Resorts)",
      "Gulfport"
    ],
    "pros": [
      "ค่าครองชีพถูก ภาษีเงินได้รัฐปรับลดเหลือ 4.0% ในปี 2026"
    ],
    "cons": [
      "ค่าแรงขั้นต่ำอิงอัตรากลาง การเดินทางต้องพึ่งรถยนต์ ตำแหน่งงาน J-1 มีน้อย"
    ],
    "editorial_summary": "มิสซิสซิปปีไม่ใช่แหล่งท่องเที่ยวตามฤดูกาลหลักของโครงการ J-1 การเดินทางต้องพึ่งพารถยนต์ จึงไม่แนะนำสำหรับผู้เข้าร่วมโครงการทั่วไป",
    "alumni_quote": "มิสซิสซิปปีไม่ใช่แหล่งท่องเที่ยวตามฤดูกาลหลักของโครงการ J-1 การเดินทางต้องพึ่งพารถยนต์ จึงไม่แนะนำสำหรับผู้เข้าร่วมโครงการทั่วไป",
    "best_for": "ไม่แนะนำสำหรับนักศึกษาทั่วไป",
    "source_info": {
      "dol_wage_2026": "$7.25",
      "tax_foundation_2026": "4.0% Flat",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "A",
        "note": "สภาพอากาศอบอุ่น มีนักท่องเที่ยว Spring Break ตั้งแต่ มี.ค. สวนสนุกและร้านอาหารเปิดบริการเต็มที่ตั้งแต่ต้นซีซัน"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "A",
        "note": "นักท่องเที่ยวซัมเมอร์หนาแน่นมาก อากาศร้อนชื้นหรือแดดแรงช่วง ก.ค.-ส.ค. ชั่วโมงงานและทิปสูง"
      },
      "best_season": "Spring & Summer (ดีเยี่ยมทั้ง 2 ช่วง)",
      "badge": "both"
    },
    "exact_state_tax_pct": 4.0,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: 4.00% (Flat Rate 2026)"
  },
  {
    "id": "oklahoma",
    "name": "Oklahoma",
    "code": "OK",
    "nickname": "Sooner State",
    "tier": "Tier C",
    "overall_grade": "C",
    "overall_score": 63,
    "region": "South",
    "vibe": "Plains & Route 66",
    "statutory_min_wage": "$7.25/ชม. (Federal Minimum Wage)",
    "market_wage_estimate": "ฐาน $11.50 - $13.50 / รวมทิปเฉลี่ย ~$14.00 - $18.50+/ชม.",
    "min_wage": "กม. $7.25 | ฐาน $11.5-$13.5 (รวมทิป ~$14-$18.5+)",
    "min_wage_num": 12.0,
    "state_income_tax": "0.25% - 4.75% (ตามขั้นบันได)",
    "tax_rate_num": 0.025,
    "state_sales_tax": "4.5% (+ภาษีท้องถิ่น รวม 8.5-9.5%)",
    "has_no_income_tax": false,
    "has_no_sales_tax": false,
    "has_clothing_tax_exemption": false,
    "avg_housing_cost": "$75 - $110 / สัปดาห์",
    "housing_cost_num": 90,
    "housing_type": "บ้านเช่า / โมเทล",
    "commute_type": "ต้องพึ่งรถยนต์",
    "grades": {
      "safety": {
        "grade": "B",
        "score": 72,
        "note": "พื้นที่ชานเมืองมีความปลอดภัยตามเกณฑ์"
      },
      "scenery_friendliness": {
        "grade": "C+",
        "score": 68,
        "note": "ถนนประวัติศาสตร์ Route 66 และทุ่งหญ้า"
      },
      "tourism_crowds": {
        "grade": "D+",
        "score": 55,
        "note": "นักท่องเที่ยวตามฤดูกาลมีจำกัด"
      },
      "earning_job2_tax": {
        "grade": "C",
        "score": 60,
        "note": "ค่าครองชีพถูกมาก แต่ไม่ใช่เมืองท่องเที่ยวตามฤดูกาล โอกาสงานบริการ J-1 มีน้อย"
      },
      "housing_value": {
        "grade": "A-",
        "score": 86,
        "note": "ค่าครองชีพถูก"
      },
      "commute_convenience": {
        "grade": "D",
        "score": 48,
        "note": "ไม่มีระบบขนส่งสาธารณะประจำทาง"
      },
      "alumni_rating": {
        "grade": "C",
        "score": 58,
        "note": "แทบไม่มีนายจ้าง J-1 เปิดรับทั่วไป"
      }
    },
    "hotspots": [
      "Oklahoma City suburbs",
      "Tulsa",
      "Turner Falls"
    ],
    "pros": [
      "ค่าครองชีพต่ำ"
    ],
    "cons": [
      "ไม่ใช่เมืองท่องเที่ยวตามฤดูกาลหลัก การเดินทางต้องพึ่งรถยนต์"
    ],
    "editorial_summary": "โอคลาโฮมาไม่ใช่แหล่งท่องเที่ยวตามฤดูกาลหลักของโครงการ J-1 การเดินทางต้องพึ่งพารถยนต์ จึงไม่แนะนำสำหรับผู้เข้าร่วมโครงการทั่วไป",
    "alumni_quote": "โอคลาโฮมาไม่ใช่แหล่งท่องเที่ยวตามฤดูกาลหลักของโครงการ J-1 การเดินทางต้องพึ่งพารถยนต์ จึงไม่แนะนำสำหรับผู้เข้าร่วมโครงการทั่วไป",
    "best_for": "ไม่แนะนำสำหรับนักศึกษาทั่วไป",
    "source_info": {
      "dol_wage_2026": "$7.25",
      "tax_foundation_2026": "0.25-4.75%",
      "verified_at": "2026-08-27"
    },
    "season_info": {
      "spring": {
        "period": "7 มี.ค. - 7 ก.ค.",
        "grade": "B-",
        "note": "งานบริการตามฤดูกาลช่วง มี.ค.-เม.ย. มีจำกัด"
      },
      "summer": {
        "period": "7 พ.ค. - 7 ก.ย.",
        "grade": "B",
        "note": "มีงานบริการช่วงซัมเมอร์ระดับปานกลาง"
      },
      "best_season": "Summer (7 พ.ค. - 7 ก.ย.)",
      "badge": "summer"
    },
    "exact_state_tax_pct": 2.5,
    "exact_local_tax_pct": 0.0,
    "exact_tax_note": "🏛️ อัตราภาษีเงินได้รัฐจริง: ~2.50% (ตามขั้นบันได)"
  }
];

const AGENCIES_DATA = [
  {
    "id": "oeg",
    "name": "OEG (Overseas Ed Group)",
    "short_name": "OEG",
    "tagline": "ผู้บุกเบิกโครงการ Work & Travel รายแรกของไทย พันธมิตร CIEE สากล",
    "tier": "Tier S",
    "overall_grade": "A+",
    "overall_score": 96,
    "est_program_fee": "งวดรวม ~111,900 บาท (แบ่งจ่าย 4 งวดตามขั้นตอน)",
    "fee_num": 111900,
    "fee_breakdown_desc": "ค่าสมัคร 4,900฿ + ค่าจองงาน 20,000฿ + ค่างวดที่ 1 35,000฿ + ค่างวดที่ 2 52,000฿ (ไม่รวมค่าวีซ่า $185 & SEVIS $35 / มีโปรโมชั่น Early Bird ลดตามรอบ)",
    "job_capacity": "สูงมาก (Mass 1,800 - 2,500+ คน/ปี)",
    "capacity_tier": "mass",
    "capacity_desc": "โควตางานหลากหลายจากสปอนเซอร์ CIEE (เบอร์ 1 สหรัฐฯ) มี Job Fair สัมภาษณ์ตรงกับนายจ้างขนาดใหญ่",
    "english_level": "เข้มงวดสูง (Upper-Intermediate to Advanced)",
    "english_tier": "advanced",
    "english_desc": "สัมภาษณ์คัดกรองภาษาจริงจัง (แบ่งระดับ Level 1-5) เพื่อแมตช์ตำแหน่งพรีเมียม (Server, Lifeguard, Front Desk, Culinary) หากภาษาไม่ถึงจะถูกจำกัดตำแหน่งงาน",
    "recommended_english_profile": "เหมาะกับคนภาษาปานกลางค่อนบนขึ้นไป (B2 - C1) ที่ต้องการงานปฏิสัมพันธ์สูง ทิปหนัก และมั่นใจในการสื่อสาร",
    "us_sponsors": [
      "CIEE (Council on International Educational Exchange)",
      "Spirit Cultural Exchange"
    ],
    "sponsor_tags": [
      "CIEE",
      "Spirit"
    ],
    "popular_jobs": [
      "Kalahari Resorts",
      "Six Flags",
      "Grand Teton Lodge",
      "Cedar Point",
      "Universal Culinary",
      "Great Wolf Lodge"
    ],
    "popular_states": [
      "Wisconsin",
      "Wyoming",
      "Ohio",
      "Florida",
      "California",
      "Maine"
    ],
    "contact": {
      "website": "https://www.oeg.co.th",
      "phone": "02-263-3666",
      "line": "@oegworkandtravel",
      "location": "อาคารสินธร ทาวเวอร์ 1 ชั้น 7 ถนนวิทยุ กรุงเทพฯ & สาขาเชียงใหม่"
    },
    "grades": {
      "reputation": {
        "grade": "A+",
        "score": 98,
        "note": "ประสบการณ์ 25+ ปี มั่นคงสูง สมาชิก TIECA ได้รับความไว้วางใจจากสถาบันการศึกษาทั่วประเทศ"
      },
      "job_quality": {
        "grade": "A+",
        "score": 97,
        "note": "พาร์ตเนอร์สปอนเซอร์ CIEE เบอร์ 1 สหรัฐฯ ตำแหน่งงานพรีเมียม สวนสนุกและโรงแรม 5 ดาว"
      },
      "service_support": {
        "grade": "A",
        "score": 94,
        "note": "ระบบบริหารจัดการมืออาชีพ ทีมงานดูแลตามขั้นตอนชัดเจน มีการปฐมนิเทศเข้มข้น"
      },
      "fee_transparency": {
        "grade": "A-",
        "score": 90,
        "note": "แจกแจงค่างวดชัดเจน 4 งวด นโยบายการคืนเงินระบุเป็นลายลักษณ์อักษรในสัญญา"
      },
      "visa_coaching": {
        "grade": "A+",
        "score": 97,
        "note": "อัตราผ่านวีซ่าสูงมาก ตรวจเอกสาร DS-2019 ละเอียดและมี Mock Interview จำลองเข้มข้น"
      },
      "alumni_rating": {
        "grade": "A+",
        "score": 96,
        "note": "เครือข่ายศิษย์เก่ากว้างขวาง เสียงตอบรับในกลุ่มเด็กเวิร์กมั่นใจในความเป็นระบบ"
      }
    },
    "pros": [
      "โควตางานพรีเมียมเยอะที่สุดในไทย พันธมิตร CIEE สปอนเซอร์อันดับ 1 สหรัฐฯ",
      "มีตำแหน่งงานในสวนสนุกและโรงแรม 5 ดาวให้เลือกมากที่สุด (Kalahari, Grand Teton, Cedar Point)",
      "ระบบคัดกรองและปฐมนิเทศก่อนบิน (Pre-departure Orientation) ยอดเยี่ยม ได้รับการยอมรับจากสถานทูต",
      "โครงสร้างบริษัทมั่นคง มีประวัติการทำงานยาวนานที่สุดในไทย"
    ],
    "cons": [
      "เกณฑ์คัดกรองระดับภาษาอังกฤษค่อนข้างเข้มงวด ไม่เหมาะกับผู้ที่ภาษาอังกฤษยังอยู่ระดับเริ่มต้น",
      "ค่าโครงการอยู่ในเกณฑ์มาตรฐานระดับสูงตามคุณภาพสปอนเซอร์ CIEE",
      "โควตางานดังๆ มักจะแย่งกันเต็มเร็วมาก ต้องสมัครตั้งแต่รอบ Early Bird (สิงหาคม - ตุลาคม)"
    ],
    "editorial_verdict": "เหมาะที่สุดสำหรับนักศึกษาที่มีทักษะภาษาอังกฤษระดับปานกลางค่อนบนขึ้นไป (B2+) ต้องการความมั่นใจเรื่องความปลอดภัย งานได้มาตรฐานระดับโลก สปอนเซอร์ CIEE มั่นคง และต้องการการดูแลที่เป็นระบบแบบมืออาชีพ"
  },
  {
    "id": "acadex",
    "name": "Acadex (Academic Exchange)",
    "short_name": "Acadex",
    "tagline": "เอเจนซี่ยอดนิยมอันดับต้นๆ ของเด็กมหาลัยไทย ตัวเลือกงานหนาแน่น คอมมูนิตี้อบอุ่น",
    "tier": "Tier S",
    "overall_grade": "A+",
    "overall_score": 95,
    "est_program_fee": "69,000 - 82,000 บาท (ตามประเภทงาน/โปรโมชั่น)",
    "fee_num": 74000,
    "fee_breakdown_desc": "ค่าโครงการรวมค่าสมัครและเอกสาร DS-2019 มีส่วนลดสมัครกลุ่มเพื่อนและส่วนลด Early Bird ต่อเนื่อง",
    "job_capacity": "สูงมาก (Mass 1,500 - 2,200+ คน/ปี)",
    "capacity_tier": "mass",
    "capacity_desc": "ตัวเลือกงานและสปอนเซอร์หลากหลาย (Intrax, CCUSA, CHI, IENA) มีงานรองรับทั้งสายบริการสวนน้ำ ร้านอาหาร และโรงแรม",
    "english_level": "ปานกลาง-ยืดหยุ่น (Intermediate - ทุกระดับ)",
    "english_tier": "intermediate",
    "english_desc": "มีการวัดระดับภาษาเพื่อแนะนำงานที่เหมาะสม มีตำแหน่งงานรองรับตั้งแต่ระดับเริ่มต้น (Housekeeping/Kitchen) จนถึงระดับสูง (Lifeguard/Food Server) พร้อมจัดซ้อมสัมภาษณ์ให้",
    "recommended_english_profile": "เหมาะกับคนทุกระดับภาษา (B1 - C1) ทั้งคนที่มั่นใจและคนที่ไม่ค่อยมั่นใจภาษา เพราะมีตัวเลือกงานกว้างขวางและมีทีมช่วยติว",
    "us_sponsors": [
      "Intrax",
      "CCUSA",
      "CHI",
      "IENA"
    ],
    "sponsor_tags": [
      "Intrax",
      "CCUSA",
      "CHI",
      "IENA"
    ],
    "popular_jobs": [
      "Noah's Ark Waterpark",
      "Mt. Olympus",
      "Ocean City Boardwalk",
      "Morey's Piers NJ",
      "Wilderness Resort"
    ],
    "popular_states": [
      "Wisconsin",
      "Maryland",
      "New Jersey",
      "Florida",
      "South Carolina",
      "Tennessee"
    ],
    "contact": {
      "website": "https://www.acadexthailand.com",
      "phone": "086-390-0333",
      "line": "@AcadexThailand",
      "location": "อาคารสภาคริสตจักรแห่งประเทศไทย (CCT) ชั้น 12A ถนนพญาไท & สาขาเชียงใหม่"
    },
    "grades": {
      "reputation": {
        "grade": "A+",
        "score": 96,
        "note": "ประสบการณ์สูง เชี่ยวชาญตลาดงาน Work & Travel อย่างลึกซึ้ง มีนักศึกษาเข้าร่วมหลักพันคนต่อปี"
      },
      "job_quality": {
        "grade": "A+",
        "score": 96,
        "note": "มีตัวเลือกงานสวนน้ำ ชายหาด และรีสอร์ตยอดฮิตครอบคลุม Wisconsin Dells และ Ocean City"
      },
      "service_support": {
        "grade": "A",
        "score": 94,
        "note": "ทีมงานเข้าถึงง่าย บรรยากาศเป็นกันเอง มีการประสานงานกับรุ่นพี่ศิษย์เก่าช่วยเหลือรุ่นน้อง"
      },
      "fee_transparency": {
        "grade": "A",
        "score": 93,
        "note": "ราคาคุ้มค่าแข่งขันได้ มีโปรโมชั่นและส่วนลดสมัครกลุ่มบ่อยครั้ง สัญญาโปร่งใส"
      },
      "visa_coaching": {
        "grade": "A",
        "score": 94,
        "note": "มีเทรนนิ่งสัมภาษณ์วีซ่ากลุ่มและเดี่ยว ติวตอบคำถามกงสุลตรงจุด"
      },
      "alumni_rating": {
        "grade": "A+",
        "score": 96,
        "note": "รีวิวในโซเชียลมีเดียและกลุ่มเด็กเวิร์กหนาแน่น มีคอนเนกชันเพื่อนร่วมทริปเหนียวแน่น"
      }
    },
    "pros": [
      "ปริมาณงานเยอะมากและเปิดกว้างสำหรับระดับภาษาที่หลากหลาย (ตั้งแต่ Intermediate ทั่วไป)",
      "มีตำแหน่งงานในแหล่งท่องเที่ยวยอดฮิต (Wisconsin Dells, Ocean City) ให้เลือกเยอะมาก หางานสองง่าย",
      "ราคาสมเหตุสมผล มีกิจกรรมปฐมนิเทศและสร้างเครือข่ายเพื่อนร่วมรุ่นอบอุ่น",
      "พันธมิตรกับสปอนเซอร์หลากหลาย (Intrax, CCUSA, CHI, IENA) รองรับการสมัครเป็นกลุ่มเพื่อน"
    ],
    "cons": [
      "มีจำนวนเด็กเข้าร่วมโครงการเยอะมาก ในบางสถานที่ทำงานอาจมีคนไทยรวมกลุ่มกันหนาแน่น",
      "ช่วงพีคซีซัน (ใกล้สัมภาษณ์วีซ่า) คิวติดต่อและตอบแชทอาจมีความหนาแน่น"
    ],
    "editorial_verdict": "เหมาะที่สุดสำหรับคนที่ชอบคอมมูนิตี้เพื่อนเยอะๆ ระดับภาษาปานกลาง (B1/B2) อยากไปเมืองยอดฮิตที่หางานสองง่าย เช่น Wisconsin Dells หรือ Ocean City และมองหาความคุ้มค่าของค่าโครงการ"
  },
  {
    "id": "iee",
    "name": "IEE Thailand (International Education Exchange)",
    "short_name": "IEE",
    "tagline": "ผู้เชี่ยวชาญงานอุทยานแห่งชาติ สวนสนุกระดับตำนาน และโครงการแลกเปลี่ยน 20+ ปี",
    "tier": "Tier A",
    "overall_grade": "A",
    "overall_score": 93,
    "est_program_fee": "68,000 - 78,000 บาท (ตามประเภทงานและโปรโมชั่น)",
    "fee_num": 73000,
    "fee_breakdown_desc": "ชี้แจงค่าโครงการและค่าธรรมเนียมตามระเบียบสมาคม TIECA ชัดเจน มีนโยบายการคืนเงินเป็นลายลักษณ์อักษร",
    "job_capacity": "ปานกลาง-สูง (Medium 600 - 1,000 คน/ปี)",
    "capacity_tier": "medium",
    "capacity_desc": "เน้นโควตางานคุณภาพสูงสายอุทยานแห่งชาติ (National Parks) และสวนสนุกยักษ์ใหญ่ ไม่เน้นรับปริมาณแมสเกินไปเพื่อการดูแลทั่วถึง",
    "english_level": "ปานกลาง (Intermediate B1 - B2)",
    "english_tier": "intermediate",
    "english_desc": "ทดสอบสัมภาษณ์ภาษาอังกฤษเพื่อประเมินความพร้อมในการใช้ชีวิตในอุทยาน/รีสอร์ต มีงานหลากหลายทั้ง F&B, Housekeeping, Guest Service, Ride Operator",
    "recommended_english_profile": "เหมาะกับคนระดับภาษาปานกลาง (B1-B2) ที่ต้องการฝึกภาษาในสิ่งแวดล้อมที่มีชาวต่างชาติและนักท่องเที่ยวหลากหลาย",
    "us_sponsors": [
      "CCUSA",
      "InterExchange",
      "GeoVisions"
    ],
    "sponsor_tags": [
      "CCUSA",
      "InterExchange",
      "GeoVisions"
    ],
    "popular_jobs": [
      "Yellowstone National Park (Xanterra)",
      "Cedar Point",
      "Grand Canyon Lodges",
      "Dollywood TN",
      "Glacier National Park"
    ],
    "popular_states": [
      "Wyoming",
      "Montana",
      "Ohio",
      "Tennessee",
      "Arizona",
      "Colorado"
    ],
    "contact": {
      "website": "https://www.ieethailand.com",
      "phone": "02-612-9511",
      "line": "@IEEThailand",
      "location": "อาคารพญาไทพลาซ่า ชั้น 10 (BTS พญาไท)"
    },
    "grades": {
      "reputation": {
        "grade": "A+",
        "score": 95,
        "note": "สมาชิกสมาคม TIECA ประสบการณ์กว่า 20 ปี ประวัติขาวสะอาดและมั่นคง"
      },
      "job_quality": {
        "grade": "A+",
        "score": 96,
        "note": "โดดเด่นที่สุดในกลุ่มงานอุทยานแห่งชาติ (National Parks) มีหอพักและอาหารพร้อม"
      },
      "service_support": {
        "grade": "A",
        "score": 92,
        "note": "เจ้าหน้าที่ดูแลใส่ใจ ให้คำแนะนำเชิงลึกเกี่ยวกับสภาพความเป็นอยู่และการเตรียมตัว"
      },
      "fee_transparency": {
        "grade": "A",
        "score": 92,
        "note": "ค่าโครงการสมเหตุสมผล ชี้แจงรายละเอียดค่าใช้จ่ายและมัดจำชัดเจน"
      },
      "visa_coaching": {
        "grade": "A",
        "score": 92,
        "note": "เตรียมเอกสาร DS-2019 แม่นยำ มีการซักซ้อมก่อนไปสถานทูต"
      },
      "alumni_rating": {
        "grade": "A",
        "score": 92,
        "note": "เสียงตอบรับดีเยี่ยมจากกลุ่มนักศึกษาที่ชอบธรรมชาติ เดินป่า และสายอุทยาน"
      }
    },
    "pros": [
      "เบอร์ 1 ด้านงานอุทยานแห่งชาติระดับโลก (Yellowstone, Grand Teton, Glacier) ที่มีหอพักและอาหาร 3 มื้อคุมงบง่าย",
      "การคัดกรองภาษาเป็นไปตามมาตรฐาน ไม่กดดัน พร้อมให้คำแนะนำอย่างสร้างสรรค์",
      "เป็นสมาชิกสมาคมไทยแนะแนวการศึกษานานาชาติ (TIECA) มีมาตรฐานการดำเนินงานที่ตรวจสอบได้",
      "เหมาะมากสำหรับสายประหยัดที่อยากเก็บเงิน เพราะงานอุทยานค่าครองชีพต่ำมาก"
    ],
    "cons": [
      "โควตางานอุทยานแห่งชาติยอดนิยมเปิดรับเร็วและเต็มไวมากเนื่องจากปริมาณโควตารับมีจำนวนจำกัดต่อปี",
      "ตัวเลือกงานแถบเมืองใหญ่หรือชายหาดอาจมีสัดส่วนน้อยกว่าสายธรรมชาติ"
    ],
    "editorial_verdict": "เหมาะที่สุดสำหรับสายรักธรรมชาติ ภาษาอังกฤษระดับปานกลาง (B1+) อยากทำงานในอุทยานแห่งชาติระดับโลกอย่าง Yellowstone/Grand Teton หรือสวนสนุกยักษ์ใหญ่ ที่พักราคาถูก คุมค่าใช้จ่ายง่าย และได้เงินเก็บเป็นกอบเป็นกำ"
  },
  {
    "id": "higher",
    "name": "Higher Education (Higher Thailand)",
    "short_name": "Higher",
    "tagline": "เอเจนซี่สไตล์คนรุ่นใหม่ สื่อสารฉับไวผ่าน LINE ดูแลใกล้ชิด ให้ข้อมูลโปร่งใสตรงไปตรงมา",
    "tier": "Tier A",
    "overall_grade": "A",
    "overall_score": 91,
    "est_program_fee": "66,000 - 76,000 บาท (ตามโปรโมชั่น)",
    "fee_num": 71000,
    "fee_breakdown_desc": "ตารางค่าธรรมเนียมโปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง มีโปรโมชั่นสมัครคู่และ Early Bird",
    "job_capacity": "ปานกลาง (Medium 400 - 700 คน/ปี)",
    "capacity_tier": "medium",
    "capacity_desc": "คัดสรรงานมาตรฐานดี มีโควตาในรีสอร์ตสกี โรงแรมชายหาด Myrtle Beach และ Kalahari WI ดูแลแบบทั่วถึง",
    "english_level": "ปานกลาง-ยืดหยุ่น (Intermediate B1 - B2)",
    "english_tier": "intermediate",
    "english_desc": "สัมภาษณ์ออนไลน์เป็นกันเอง ช่วยแนะนำงานที่ตรงกับทักษะภาษาจริงของเด็ก ไม่กดดัน มีคลาสติวสัมภาษณ์และไกด์ภาษาอังกฤษให้",
    "recommended_english_profile": "เหมาะกับนักศึกษาทั่วไป (B1-B2) ที่อยากได้คำแนะนำอย่างตรงไปตรงมาว่าระดับภาษาของตนเหมาะกับตำแหน่งไหน",
    "us_sponsors": [
      "IENA",
      "Spirit Cultural Exchange",
      "Janus"
    ],
    "sponsor_tags": [
      "IENA",
      "Spirit",
      "Janus"
    ],
    "popular_jobs": [
      "Kalahari Resort WI",
      "Myrtle Beach Hotel Chains",
      "Maine Coastal Lodges",
      "Park City Ski Lodges",
      "Morey's Piers"
    ],
    "popular_states": [
      "Wisconsin",
      "South Carolina",
      "Maine",
      "Utah",
      "New Jersey",
      "Florida"
    ],
    "contact": {
      "website": "https://www.highereducation.co.th",
      "phone": "02-054-9544",
      "line": "@HigherEducation",
      "location": "อาคารวรรณสรณ์ (พญาไท) & โซนจุฬา-สยาม"
    },
    "grades": {
      "reputation": {
        "grade": "A-",
        "score": 89,
        "note": "เติบโตรวดเร็ว ได้รับความนิยมสูงในหมู่นักศึกษา จุฬาฯ มธ. มก. มศว"
      },
      "job_quality": {
        "grade": "A",
        "score": 91,
        "note": "งานมีมาตรฐาน ตรวจสอบนายจ้างและที่พักชัดเจน มีงานรีสอร์ตและโรงแรมชายหาดหลากหลาย"
      },
      "service_support": {
        "grade": "A+",
        "score": 95,
        "note": "แอดมินตอบแชทเร็วมาก สื่อสารเป็นกันเอง เข้าใจพฤติกรรมเด็กมหาลัยรุ่นใหม่"
      },
      "fee_transparency": {
        "grade": "A+",
        "score": 95,
        "note": "ตารางค่าธรรมเนียมโปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง นโยบายการคืนเงินชัดเจน"
      },
      "visa_coaching": {
        "grade": "A-",
        "score": 89,
        "note": "ตรวจเอกสารรัดกุม ติวสัมภาษณ์และให้เทคนิคการตอบเป็นภาษาอังกฤษเข้าใจง่าย"
      },
      "alumni_rating": {
        "grade": "A",
        "score": 91,
        "note": "รีวิวชื่นชมเรื่องความรวดเร็วในการติดต่อและเจ้าหน้าที่ไม่ทอดทิ้ง"
      }
    },
    "pros": [
      "ทีมงานและแอดมินตอบแชท LINE รวดเร็วมาก แก้ไขข้อสงสัยฉับไว ไม่ต้องรอนาน",
      "ให้คำแนะนำเรื่องระดับภาษาอย่างตรงไปตรงมา ช่วยเตรียมตัวและซ้อมสัมภาษณ์อย่างเป็นมิตร",
      "โครงสร้างราคาและค่าธรรมเนียมโปร่งใส มีแจกแจงทุกรายการอย่างตรงไปตรงมา",
      "มีโปรโมชั่นสมัครคู่และส่วนลด Early Bird คุ้มค่า"
    ],
    "cons": [
      "ปริมาณโควตารับต่อปีอยู่ในระดับปานกลาง (ไม่ได้เปิดรับแมสหลักพันคน)",
      "จำนวนโควตางานพรีเมียมเฉพาะทางบางแห่งอาจมีจำกัดกว่า"
    ],
    "editorial_verdict": "เหมาะที่สุดสำหรับคนที่ชอบการสื่อสารที่รวดเร็ว ทันใจ ภาษาอังกฤษระดับทั่วไป (B1/B2) แอดมินตอบไว ให้ข้อมูลโปร่งใสตรงไปตรงมา ราคาคุ้มค่า และชอบการดูแลแบบเป็นกันเอง"
  },
  {
    "id": "newstep",
    "name": "New Step (New Step Agency)",
    "short_name": "New Step",
    "tagline": "ผู้นำด้านการเทรนสัมภาษณ์วีซ่าจำลอง Job Fair ตรงกับนายจ้าง และการดูแลแบบติวเข้ม",
    "tier": "Tier A",
    "overall_grade": "A",
    "overall_score": 90,
    "est_program_fee": "67,000 - 79,000 บาท (ตามรอบและโปรโมชั่น)",
    "fee_num": 72000,
    "fee_breakdown_desc": "ชี้แจงค่าโครงการตามโครงสร้างโปรโมชั่นของแต่ละซีซัน มีระเบียบการคืนเงินกรณีวีซ่าไม่ผ่านชัดเจน",
    "job_capacity": "ปานกลาง-สูง (Medium 500 - 900 คน/ปี)",
    "capacity_tier": "medium",
    "capacity_desc": "มี Job Fair และการจัดสัมภาษณ์ตรงกับนายจ้างสหรัฐฯ สวนสนุกและโรงแรมเครือใหญ่ใน Florida / California / Tennessee",
    "english_level": "มีระบบเทรนภาษาเข้มข้น (Coaching Intensive - เหมาะกับคนอยากพัฒนา)",
    "english_tier": "beginner_friendly",
    "english_desc": "โดดเด่นมากเรื่องระบบ Mock Interview และติวภาษาอังกฤษ ช่วยซ้อมคำถาม-ตอบสัมภาษณ์จนผ่านเกณฑ์นายจ้างและสถานทูต เหมาะกับคนที่กังวลเรื่องภาษา",
    "recommended_english_profile": "เหมาะกับคนที่ภาษาอังกฤษอยู่ในระดับเริ่มต้นถึงปานกลาง (A2 - B2) ที่ต้องการคนช่วยติว ซักซ้อม และเพิ่มความมั่นใจในการสัมภาษณ์",
    "us_sponsors": [
      "Intrax",
      "CHI",
      "AWA"
    ],
    "sponsor_tags": [
      "Intrax",
      "CHI",
      "AWA"
    ],
    "popular_jobs": [
      "Busch Gardens",
      "Six Flags",
      "Grand Canyon Hotels",
      "Hilton / Marriott Chains",
      "Pigeon Forge Resorts"
    ],
    "popular_states": [
      "Florida",
      "Virginia",
      "Tennessee",
      "California",
      "Arizona",
      "Texas"
    ],
    "contact": {
      "website": "https://www.newstepthailand.com",
      "phone": "063-535-9463",
      "line": "@newstepworktravel",
      "location": "อาคาร SiamScape ชั้น 19 ห้อง 1910 (สยามสแควร์) & จุดประสานงานมหาวิทยาลัย"
    },
    "grades": {
      "reputation": {
        "grade": "A",
        "score": 91,
        "note": "เปิดดำเนินการมานาน มีความเชี่ยวชาญด้านขั้นตอนวีซ่าสหรัฐฯ และการจับคู่งาน"
      },
      "job_quality": {
        "grade": "A",
        "score": 90,
        "note": "งานโรงแรมระดับเครือใหญ่และสวนสนุกมีให้เลือกต่อเนื่องในแถบ South และ West"
      },
      "service_support": {
        "grade": "A-",
        "score": 89,
        "note": "มีระบบติดตามเอกสารเป็นขั้นตอน เจ้าหน้าที่ดูแลตามมาตรฐาน"
      },
      "fee_transparency": {
        "grade": "A",
        "score": 90,
        "note": "ค่าโครงการมาตรฐาน มีการชี้แจงเงื่อนไขก่อนลงทะเบียน"
      },
      "visa_coaching": {
        "grade": "A+",
        "score": 96,
        "note": "โดดเด่นเรื่อง Mock Interview สัมภาษณ์จำลองภาษาอังกฤษ เตรียมคำตอบรอบด้าน"
      },
      "alumni_rating": {
        "grade": "A-",
        "score": 89,
        "note": "รุ่นพี่ชื่นชมการติวสัมภาษณ์ที่ทำให้มีความมั่นใจตอนไปสถานทูตจริง"
      }
    },
    "pros": [
      "ระบบติวภาษาและเตรียมความพร้อมสัมภาษณ์วีซ่า (Visa & English Coaching) เข้มข้นมาก มีจำลองสถานการณ์จริง",
      "ช่วยให้นักศึกษาที่ไม่มั่นใจภาษาอังกฤษสามารถผ่านการสัมภาษณ์งานและวีซ่าได้",
      "มี Job Fair และการสัมภาษณ์กับนายจ้างสหรัฐฯ โดยตรงอย่างต่อเนื่อง",
      "ทำเลที่ตั้งสำนักงานเดินทางสะดวก (SiamScape สยามสแควร์)"
    ],
    "cons": [
      "ตัวเลือกงานสายอุทยานแห่งชาติแถบเทือกเขาอาจมีน้อยกว่าสายโรงแรม/สวนสนุก",
      "ต้องเข้าคอร์สติวและทำตามขั้นตอนการซ้อมสัมภาษณ์ที่เข้มงวด"
    ],
    "editorial_verdict": "เหมาะที่สุดสำหรับคนที่กังวลเรื่องการสัมภาษณ์วีซ่า J-1 หรือภาษาอังกฤษยังไม่แข็งแรง (A2/B1) ต้องการเอเจนซี่ที่ช่วยติวเข้ม ซ้อมสัมภาษณ์จำลอง และพาทำเอกสารทีละขั้นตอนจนมั่นใจ"
  },
  {
    "id": "american_learning",
    "name": "American Learning (ALC / AL)",
    "short_name": "ALC",
    "tagline": "บริการแบบครอบครัว อบอุ่น มีกิจกรรมกลุ่ม ดูแลใกล้ชิด เชี่ยวชาญโซน Midwest & Rocky",
    "tier": "Tier B",
    "overall_grade": "B+",
    "overall_score": 87,
    "est_program_fee": "65,000 - 75,000 บาท",
    "fee_num": 70000,
    "fee_breakdown_desc": "ค่าโครงการราคาประหยัด ชี้แจงเงื่อนไขตามสัญญาและสมาคม TIECA",
    "job_capacity": "บูทีค-ขนาดเล็ก (Boutique 150 - 350 คน/ปี)",
    "capacity_tier": "boutique",
    "capacity_desc": "รับจำนวนจำกัด เน้นการดูแลแบบกลุ่มเล็กเป็นกันเอง งานตากอากาศเฉพาะทาง เช่น Mackinac Island และรีสอร์ตภูเขา",
    "english_level": "เป็นมิตรกับทุกระดับภาษา (Beginner Friendly A2 - B1)",
    "english_tier": "beginner_friendly",
    "english_desc": "บรรยากาศการสัมภาษณ์อบอุ่น ไม่กดดัน มีตำแหน่งงานรองรับสำหรับคนที่ไม่ถนัดพูดภาษาอังกฤษ เช่น Housekeeping, Dishwasher, Maintenance, Food Prep",
    "recommended_english_profile": "เหมาะกับคนที่ภาษาอังกฤษระดับพื้นฐาน (A2-B1) หรือคนที่กังวลเรื่องการสื่อสาร ต้องการการดูแลที่อบอุ่นเหมือนพี่น้อง",
    "us_sponsors": [
      "CHI (Cultural Homestay International)",
      "InterExchange",
      "Spirit"
    ],
    "sponsor_tags": [
      "CHI",
      "InterExchange",
      "Spirit"
    ],
    "popular_jobs": [
      "Mackinac Island MI",
      "Colorado Mountain Resorts",
      "Montana Lodges",
      "Wisconsin Dells",
      "Texas Resorts"
    ],
    "popular_states": [
      "Michigan",
      "Colorado",
      "Montana",
      "Wisconsin",
      "Texas",
      "Missouri"
    ],
    "contact": {
      "website": "https://myalcapp.com",
      "phone": "02-619-0044 / 086-320-1990",
      "line": "@AmericanLearning",
      "location": "อาคารพหลโยธินเพลส ชั้น 39 (BTS อารีย์)"
    },
    "grades": {
      "reputation": {
        "grade": "A-",
        "score": 88,
        "note": "ดำเนินโครงการมานานกว่า 15 ปี เน้นการแลกเปลี่ยนวัฒนธรรมและการดูแลแบบกลุ่มเล็ก"
      },
      "job_quality": {
        "grade": "B+",
        "score": 86,
        "note": "งานมีคุณภาพในเมืองตากอากาศเฉพาะทาง เช่น Mackinac Island และรีสอร์ตภูเขา"
      },
      "service_support": {
        "grade": "A",
        "score": 90,
        "note": "ดูแลอบอุ่นแบบครอบครัว มีเสื้อทีมและของที่ระลึกสร้างความเป็นอันหนึ่งอันเดียวกัน"
      },
      "fee_transparency": {
        "grade": "B+",
        "score": 85,
        "note": "ค่าโครงการราคาประหยัดแข่งขันได้ดี ชี้แจงเงื่อนไขตามสัญญา"
      },
      "visa_coaching": {
        "grade": "B+",
        "score": 86,
        "note": "ช่วยตรวจเอกสารและให้คำแนะนำขั้นตอนการขอวีซ่า"
      },
      "alumni_rating": {
        "grade": "B+",
        "score": 87,
        "note": "รุ่นพี่ชื่นชอบความอบอุ่นและความเป็นกันเองของพี่ๆ ทีมงาน"
      }
    },
    "pros": [
      "เป็นมิตรกับผู้ที่มีทักษะภาษาอังกฤษระดับเริ่มต้น ไม่กดดัน ไม่ตัดสิทธิ์",
      "บรรยากาศการดูแลเป็นกันเองสไตล์ครอบครัว ไม่รู้สึกเกร็ง เข้าถึงพี่ๆ ได้ง่าย",
      "ค่าโครงการราคาประหยัด เหมาะสำหรับผู้ที่มีงบประมาณเริ่มต้นจำกัด",
      "มีตำแหน่งงานในเกาะและเมืองตากอากาศที่มีเสน่ห์เฉพาะตัว (เช่น Mackinac Island, MI)"
    ],
    "cons": [
      "ปริมาณโควตางานรับต่อปีมีจำกัด (กลุ่มบูทีคขนาดเล็ก)",
      "ตัวเลือกงานสวนน้ำและสวนสนุกขนาดใหญ่อาจไม่หลากหลายเท่าเอเจนซี่ Tier S"
    ],
    "editorial_verdict": "เหมาะสำหรับคนที่ภาษาอังกฤษอยู่ในระดับพื้นฐาน (A2/B1) ชอบการบริการแบบเป็นกันเอง อบอุ่น สไตล์ครอบครัว งบประมาณเริ่มต้นประหยัด และอยากไปทำงานในเมืองตากอากาศที่เงียบสงบสวยงาม"
  }
];
