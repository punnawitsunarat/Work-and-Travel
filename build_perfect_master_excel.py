import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter

excel_path = r'C:\Users\ASUS\Desktop\WAT\Work_and_Travel_Master_Job_Database_2027.xlsx'
excel_clean_path = r'C:\Users\ASUS\Desktop\WAT\Work_and_Travel_Master_Job_Database_2027_Clean.xlsx'

wb = openpyxl.Workbook()

# Style definitions
header_fill = PatternFill(start_color='0F172A', end_color='0F172A', fill_type='solid')
header_font = Font(name='Segoe UI', size=11, bold=True, color='FFFFFF')
regular_font = Font(name='Segoe UI', size=10)
bold_font = Font(name='Segoe UI', size=10, bold=True)
tier_s_fill = PatternFill(start_color='FEF3C7', end_color='FEF3C7', fill_type='solid') # Amber tint
tier_a_fill = PatternFill(start_color='E0F2FE', end_color='E0F2FE', fill_type='solid') # Sky blue tint
thin_border = Border(
    left=Side(style='thin', color='CBD5E1'),
    right=Side(style='thin', color='CBD5E1'),
    top=Side(style='thin', color='CBD5E1'),
    bottom=Side(style='thin', color='CBD5E1')
)

# ==============================================================================
# 🌟 EXHAUSTIVE MASTER ROSTER: ALL VERIFIED SUMMER JOBS ACROSS TIER S & TIER A
# Representing all 7 Thai Agencies: OEG, Acadex, IEO, IEE, New Step, Higher, American Learning (ALC)
# ==============================================================================
master_summer_jobs = [
    # -------------------------------------------------------------------------
    # 🏆 TIER S STATES (12 States)
    # -------------------------------------------------------------------------
    # 1. ALASKA (AK)
    [
        'Tier S', 'Alaska (AK)',
        'Denali Princess Wilderness Lodge (Summer Season)',
        'Acadex, OEG, IEE, Higher, IEO, ALC',
        'Housekeeping / Room Attendant',
        'ปกติ: 07:30 – 15:30 (8 ชม.)\nพีคซัมเมอร์: 07:00 – 17:30 (10 ชม. ควงกะ)',
        'ฐาน $16.00 / OT $24.00', '$15 - $30', '50 – 54 ชม./wk', '$105 (รวมกิน)',
        'อาหารบุฟเฟต์ 3 มื้อฟรีใน EDR ตักไม่อั้น 7 วัน, ทิปหัวเตียง, รถรับส่งพนักงาน, ส่วนลดทัวร์/รถไฟ 50%',
        '🚌 Fleet Detailer (ในโรงแรม): ล้างรถทัวร์กะดึก 21:00-01:30 น. ได้เรต OT $24.00/ชม. ทันที (ไม่ต้องขอสปอนเซอร์)',
        '🍕 Prospectors Pizzeria: เดิน 10 นาที ล้างจาน/Barback 18:30-00:30 น. ($15/ชม. + ทิปสด $40-$70/คืน)',
        '🍽️ Fannie Q’s Saloon (ในโรงแรม): ช่วยจัดเลี้ยง/Runner 17:00-22:00 น. ได้เรต OT $24/ชม. + ทิป'
    ],
    [
        'Tier S', 'Alaska (AK)',
        'Denali Princess Wilderness Lodge (Summer Season)',
        'Acadex, OEG, IEE, Higher, IEO',
        'Kitchen Stewarding / Dishwasher (ล้างจาน)',
        'ปกติ: 16:00 – 00:00 (8 ชม.)\nพีคซัมเมอร์: 15:00 – 01:30 (10.5 ชม.)',
        'ฐาน $16.00 / OT $24.00', '-', '50 – 55 ชม./wk', '$105 (รวมกิน)',
        'อาหารบุฟเฟต์ 3 มื้อใน EDR + เชฟทำสเต๊ก/เบอร์เกอร์เลี้ยงในครัวฟรีทุกกะ',
        '🧹 เช้าช่วยแม่บ้าน (Housekeeping): 08:30-14:30 น. ขอกะเช้าเพิ่มในโรงแรม ได้เรต OT $24/ชม.',
        '🧳 Luggage Handler: ช่วยยกกระเป๋ารอบรถไฟเช้า 08:00-12:00 น. ได้ทิปสดจากทัวร์',
        '🛍️ Denali Boardwalk Gift Shops: แคชเชียร์/จัดของกะสาย 09:00-14:00 น. ($15/ชม.)'
    ],
    [
        'Tier S', 'Alaska (AK)',
        'McKinley Chalet Resort (Holland America-Princess, Denali)',
        'OEG, Acadex, Higher, IEO, ALC',
        'Housekeeping / Culinary / F&B',
        'ปกติ: 07:30 – 15:30 (8 ชม.)\nพีคซัมเมอร์: 07:00 – 17:00 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00', '$15 - $30', '48 – 52 ชม./wk', '$105 (รวมกิน)',
        'รีสอร์ตหรูริมแม่น้ำ Nenana River ฝั่ง Denali, อาหาร 3 มื้อฟรีใน EDR, ส่วนลดทัวร์ล่องแก่ง',
        '🥩 Karstens Public House (ในรีสอร์ต): Busser/Barback 17:30-23:00 น. (ขอ OT ในรีสอร์ต $24/ชม. + ทิป)',
        '🍕 Grizzly Burger / Canyon Pizzeria: ผู้ช่วยครัว/ล้างจาน 18:00-23:30 น. ($15/ชม. + ทิป)',
        '🛒 Denali Square Retail Shops: แคชเชียร์รอบค่ำ 17:00-21:30 น. ($15.50/ชม.)'
    ],
    [
        'Tier S', 'Alaska (AK)',
        'Grande Denali Lodge & Denali Bluffs Hotel (Summer Only)',
        'Acadex Thailand, IEO, Higher',
        'Housekeeping / Public Area',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $15.50 / OT $23.25', '-', '42 – 46 ชม./wk', '$140',
        'โบนัส Summer Bonus +$1.00/ชม. ท้ายทริป, โรงแรมหรู 4 ดาวบนยอดเขา, รถชัตเติลบัส, ส่วนลดอาหาร',
        '🍷 Alpenglow Restaurant (ในโรงแรม): Busser 17:00-23:00 น. ($14/ชม. + ทิปสดเศรษฐี $50-$80/คืน)',
        '🥪 Subway Denali / The Black Bear: นั่งชัตเติลลงเขาไปทำกะเย็น 17:00-22:00 น. ($15/ชม.)',
        '🍽️ Denali Princess Kitchens: เดินลงเขา 15 นาที ล้างจานกะค่ำ 18:00-00:00 น. ($16/ชม.)'
    ],
    [
        'Tier S', 'Alaska (AK)',
        'Seward Windsong Lodge & Kenai Fjords Tours (Pursuit)',
        'OEG, Acadex, ALC, IEO',
        'Housekeeping / Tour Operations / F&B',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00', '$20 - $50', '44 – 50 ชม./wk', '$120',
        'เมืองตากอากาศชายทะเล Seward ท่าเรือล่องเรือชมวาฬและธารน้ำแข็งซัมเมอร์, หอพักพนักงาน, ล่องเรือฟรี',
        '🦀 Ray’s Waterfront (ริมท่าเรือ Seward): Busser/Steward ร้านซีฟู้ดดัง 17:30-23:00 น. ($14/ชม. + ทิปสด $60-$100)',
        '🍺 Seward Brewing Company: Barback/Dishwasher กะค่ำ 18:00-00:00 น. ($15/ชม. + ทิป)',
        '🛥️ Kenai Fjords Boat Cleaning: ล้างทำความสะอาดเรือทัวร์รอบเย็น 18:00-21:30 น. ($16.50/ชม.)'
    ],
    [
        'Tier S', 'Alaska (AK)',
        'Talkeetna Alaskan Lodge (Pursuit Collection)',
        'OEG, Acadex, Higher, IEO',
        'Housekeeping / Kitchen / Steward',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00', '$15 - $30', '44 – 50 ชม./wk', '$115',
        'โรงแรมหรูชมวิวยอดเขา Denali ในเมืองคาวบอย Talkeetna, หอพักพนักงาน + รถรับส่ง',
        '🥩 Foraker Dining Room (ในโรงแรม): Busser ร้านอาหาร Fine Dining 17:30-23:00 น. (ทิปสด $50-$90/คืน)',
        '🍕 Mountain High Pizza Pie: ผู้ช่วยทำพิซซ่า/ล้างจาน 18:00-23:30 น. ($15/ชม. + ทิป)',
        '🍺 Denali Brewing Company (Talkeetna Pub): Barback กะค่ำ 18:30-00:30 น. ($14/ชม. + ทิปสด)'
    ],
    [
        'Tier S', 'Alaska (AK)',
        'Alyeska Resort & Hotel Alyeska (Girdwood)',
        'OEG, Higher, Acadex, ALC',
        'Housekeeping / Culinary / Lift Ops',
        'ปกติ: 08:30 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 08:00 – 17:30 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75', '-', '42 – 48 ชม./wk', '$135',
        'รีสอร์ตหรูระดับโลก นั่งกระเช้าชมวิวภูเขาและธารน้ำแข็งซัมเมอร์, หอพักพนักงาน Glacier Valley',
        '🥩 Seven Glaciers Restaurant (บนยอดเขา): Busser 17:30-23:00 น. (ร้าน 4 ดาว AAA ทิปมหาศาล $70-$120)',
        '🍕 Coast Pizza / Girdwood Brewing: ผู้ช่วยครัว/Barback 18:00-23:00 น. ($15/ชม. + ทิป)',
        '🥖 The Bake Shop Girdwood: ช่วยเตรียมเบเกอรี่/ล้างจานช่วงเช้าตรู่หรือเย็น'
    ],
    [
        'Tier S', 'Alaska (AK)',
        'Mt. McKinley Princess Lodge (Trapper Creek)',
        'Higher, OEG, Acadex, IEO',
        'Housekeeping / Kitchen',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00', '$10 - $20', '44 – 48 ชม./wk', '$105 (รวมกิน)',
        'อาหารบุฟเฟต์ 3 มื้อฟรีใน EDR, รถรับส่ง, ชมวิวยอดเขาเดนาลี บรรยากาศสงบ',
        '🥩 20,320 Alaskan Grill (ในโรงแรม): Busser/Steward กะค่ำ 17:30-22:30 น. (เรต OT $24/ชม. + ทิป)',
        '🍕 Northland Wood Fired Pizza (ในโรงแรม): ผู้ช่วยทำพิซซ่า/ครัว 16:30-21:30 น. (เรต OT $24/ชม.)',
        '🥐 Talkeetna Roadhouse: นั่งรถตู้พนักงานเข้าเมือง Talkeetna ช่วยล้างจาน/ทำขนมวันหยุด'
    ],
    [
        'Tier S', 'Alaska (AK)',
        'Copper River Princess Wilderness Lodge (Copper Center)',
        'Higher, Acadex, IEO',
        'Housekeeping / Culinary / Guest Services',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00', '$10 - $20', '44 – 48 ชม./wk', '$105 (รวมกิน)',
        'รีสอร์ตริมแม่น้ำ Copper River และอุทยาน Wrangell-St. Elias NP, อาหาร 3 มื้อฟรีใน EDR',
        '🥩 Two Rivers Restaurant (ในโรงแรม): Busser/Runner 17:30-22:30 น. (ขอ OT $24/ชม. + ทิป)',
        '🍔 Whistle Stop Grill: ผู้ช่วยทำเบอร์เกอร์/ล้างจาน 16:30-21:30 น. (ขอ OT $24/ชม.)',
        '🐟 Klutina River Salmon Charters: ช่วยทำความสะอาดอุปกรณ์ตกปลาแซลมอน 17:00-20:30 น.'
    ],
    [
        'Tier S', 'Alaska (AK)',
        'Fairbanks Princess Riverside Lodge (Summer Season)',
        'IEE, Acadex, Higher, IEO',
        'Food Runner / Laundry / Steward',
        'ปกติ: 06:30 – 14:30 หรือ 15:00 – 23:00\nพีคซัมเมอร์: กะสลับตามรอบรถไฟ 8 ชม.',
        'ฐาน $15.50 / OT $23.25', '$20 - $40', '36 – 40 ชม./wk', '$105',
        'หอพักในเมืองแฟร์แบงก์ส + รถชัตเติลบัส, ใกล้ Walmart และร้านอาหารไทย หางาน 2 ง่าย',
        '🛒 Walmart Supercenter Fairbanks: จัดสต็อกสินค้า/แคชเชียร์ 16:30-22:30 น. ($16-$17/ชม. มีรถเมล์ผ่าน)',
        '🍜 Pad Thai Restaurant / Thai House: ผู้ช่วยครัว/เสิร์ฟ 17:00-22:30 น. (ทิปสด + กินอาหารไทยฟรี)',
        '🍺 The Pump House Restaurant: Busser/Dishwasher ร้านอาหารริมน้ำดัง 17:30-23:00 น. ($15/ชม. + ทิป)'
    ],
    [
        'Tier S', 'Alaska (AK)',
        'Skagway Westmark Inn & Chilkoot Tours (Holland America)',
        'OEG, Acadex, ALC',
        'Housekeeping / Tour Host / Retail',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00', '$20 - $50', '44 – 50 ชม./wk', '$110',
        'เมืองตากอากาศประวัติศาสตร์ยุคตื่นทอง ท่าเรือเรือสำราญแวะทุกวัน, เดินเท้าได้ทั่วเมือง',
        '🍺 Red Onion Saloon (บาร์ประวัติศาสตร์): Busser/Runner 17:30-23:30 น. (ทิปสด $60-$120/คืน)',
        '🦀 Skagway Fish Company: ผู้ช่วยครัว/ล้างจาน 18:00-23:00 น. ($15/ชม. + ทิป)',
        '🚂 White Pass & Yukon Route Depot: ช่วยทำความสะอาดขบวนรถไฟโบราณ 17:00-21:30 น. ($16/ชม.)'
    ],

    # 2. WYOMING (WY)
    [
        'Tier S', 'Wyoming (WY)',
        'Grand Teton Lodge Company - Jackson Lake Lodge (Summer)',
        'Acadex, Higher, OEG, IEE, IEO, ALC',
        'Housekeeping / Crew Member',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 07:00 – 17:30 (10 ชม. ควงกะ)',
        'ฐาน $17.75 / OT $26.62', '-', '54 – 60 ชม./wk', '$105 (รวมกิน)',
        'หอพัก + อาหารบุฟเฟต์ 3 มื้อ EDR ตักไม่อั้น 7 วัน ($105/wk), ส่วนลดซื้อของ 40%, เข้าอุทยาน Grand Teton & Yellowstone ฟรี',
        '🍽️ Mural Room & Pioneer Grill (ในโรงแรม): Busser 17:30-22:30 น. ได้เรต OT $26.62/ชม. + ทิป',
        '🍸 Blue Heron Lounge (ในโรงแรม): Barback ช่วยยกน้ำแข็ง/ล้างแก้ว 18:00-23:30 น. (เรต OT $26.62 + Tip-Out)',
        '🛶 Colter Bay Chuckwagon & Marina: นั่งชัตเติลฟรีไปช่วยมินิมาร์ท/เรือแคนู 17:00-21:30 น.'
    ],
    [
        'Tier S', 'Wyoming (WY)',
        'Grand Teton Lodge Company - Colter Bay Village (Summer)',
        'Acadex, Higher, OEG, IEE, IEO',
        'Cabin Attendant / Grocery Clerk / Marina',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $17.75 / OT $26.62', '-', '52 – 58 ชม./wk', '$105 (รวมกิน)',
        'หอพัก + อาหารบุฟเฟต์ 3 มื้อ EDR ($105/wk), หมู่บ้านริมทะเลสาบ Jackson Lake สวยที่สุดในซัมเมอร์',
        '🥩 Chuckwagon Restaurant (ในหมู่บ้าน): Busser/Steward บุฟเฟต์มื้อเย็น 17:00-22:00 น. (เรต OT $26.62)',
        '🛒 Colter Bay General Store: แคชเชียร์/เติมสต็อกมินิมาร์ท 17:30-22:00 น. (เรต OT $26.62)',
        '🛶 Colter Bay Marina: ล้างเรือยนต์/เรือแคนู 16:30-20:30 น. (เรต OT $26.62)'
    ],
    [
        'Tier S', 'Wyoming (WY)',
        'Grand Teton Lodge Company - Jackson Lake Lodge (Culinary)',
        'Acadex, Higher, OEG',
        'Kitchen Steward / Line Cook Helper',
        'ปกติ: 15:30 – 23:30 (8 ชม.)\nพีคซัมเมอร์: 14:30 – 00:30 (10 ชม.)',
        'ฐาน $17.75 / OT $26.62', '-', '52 – 58 ชม./wk', '$105 (รวมกิน)',
        'อาหาร 3 มื้อ EDR ฟรี + อาหารปรุงสดจากครัวเชฟ, มีโอกาสขอกะเช้าควงกะรับ OT มหาศาล',
        '🧹 กะเช้าช่วยแม่บ้าน (Housekeeping): 08:30-14:30 น. ขอทำเพิ่มรับเรต OT $26.62/ชม.',
        '🧳 Bell Staff Helper: ช่วยยกกระเป๋ารอบรถทัวร์เช้า 08:00-12:00 น. ได้ทิปสด',
        '🛒 Jackson Lake Lodge Gift Shop: จัดของรอบสาย 09:00-14:00 น. (เรต OT)'
    ],
    [
        'Tier S', 'Wyoming (WY)',
        'Signal Mountain Lodge (Grand Teton NP - Forever Resorts)',
        'Higher, Acadex, IEO',
        'Housekeeping / Front Desk / Marina',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75', '$15 - $30', '45 – 50 ชม./wk', '$110 (รวมกิน)',
        'รีสอร์ตริมทะเลสาบ Signal Mountain, หอพักพนักงาน + อาหาร 3 มื้อ, ส่วนลดเช่าเรือซัมเมอร์',
        '🥩 The Peaks Restaurant (ในรีสอร์ต): Busser/Runner 17:30-22:30 น. ($14/ชม. + ทิปสด $50-$90/คืน)',
        '🌮 Trapper Grill (ในรีสอร์ต): ผู้ช่วยครัว/ทำนาโชส์ 17:00-22:00 น. (ขอ OT $24.75/ชม.)',
        '⛽ Signal Mountain Gas Station & Store: แคชเชียร์รอบค่ำ 17:00-21:30 น.'
    ],
    [
        'Tier S', 'Wyoming (WY)',
        'Xanterra Yellowstone Lodges (Old Faithful / Canyon)',
        'OEG, IEE Thailand, IEO, ALC',
        'Hospitality Crew / Kitchen Steward',
        'ปกติ: 07:00 – 15:30 หรือ 15:00 – 23:30\nพีคซัมเมอร์: 06:30 – 16:30 (10 ชม.)',
        'ฐาน $15.70 / OT $23.55', '-', '46 – 52 ชม./wk', '$120 (รวมกิน)',
        'รวมหอพัก + อาหารบุฟเฟต์ 3 มื้อ EDR, หอพักใหม่ Arnica, เที่ยวบ่อน้ำพุร้อน Yellowstone ฟรี',
        '🌋 Old Faithful Snow Lodge Dining: Busser/Steward กะค่ำ 17:00-22:30 น. (เรต OT $23.55/ชม. + ทิป)',
        '🛍️ Delaware North General Stores: แคชเชียร์ร้านของฝากข้างๆ เดิน 3 นาที 17:00-21:30 น. ($15.50/ชม.)',
        '🍻 Employee Pub & Rec Hall: ผู้ช่วยผับพนักงาน/ทำความสะอาด 19:30-23:30 น.'
    ],
    [
        'Tier S', 'Wyoming (WY)',
        'Xanterra Yellowstone Lodges (Mammoth / Lake Hotel)',
        'OEG, IEE Thailand, IEO',
        'Housekeeping / Dining Room Server Assistant',
        'ปกติ: 07:30 – 15:30 (8 ชม.)\nพีคซัมเมอร์: 07:00 – 17:00 (9.5 ชม.)',
        'ฐาน $15.70 / OT $23.55', '$15 - $35', '46 – 52 ชม./wk', '$120 (รวมกิน)',
        'โรงแรมประวัติศาสตร์ริมทะเลสาบ Lake Yellowstone และโซน Mammoth Springs, อาหาร 3 มื้อ EDR',
        '🥩 Lake Yellowstone Hotel Dining Room: Busser ร้าน Fine Dining ดนตรีแจ๊ส 17:30-22:30 น. (ทิปสด $60-$100)',
        '☕ Lake Hotel Deli & General Store: พนักงานแคชเชียร์/ชงกาแฟ 17:00-21:30 น. ($15.50/ชม.)',
        '🚤 Bridge Bay Marina: ช่วยผูกเรือ/ทำความสะอาดเรือทัวร์ 16:30-20:30 น.'
    ],
    [
        'Tier S', 'Wyoming (WY)',
        'Delaware North Yellowstone General Stores (All Locations)',
        'IEE, Acadex, Higher',
        'Retail Associate / Food Service Associate',
        'ปกติ: 08:30 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 08:00 – 17:30 (9.5 ชม.)',
        'ฐาน $15.50 / OT $23.25', '-', '42 – 48 ชม./wk', '$115',
        'เครือข่ายร้านสะดวกซื้อและร้านอาหาร 12 สาขาทั่ว Yellowstone NP, หอพักพนักงานพร้อมมื้ออาหาร',
        '🍔 General Store Diner: ช่วยทำเบอร์เกอร์/ล้างจานกะค่ำ 17:00-21:30 น. (ขอ OT ในร้าน $23.25/ชม.)',
        '🍦 Ice Cream Counter: พนักงานตักไอศกรีม 17:00-21:30 น. ($15.50/ชม.)',
        '🏨 Xanterra Dining Rooms: เดินไปทำ Busser ร้านอาหารโรงแรมข้างเคียง 18:00-22:30 น.'
    ],
    [
        'Tier S', 'Wyoming (WY)',
        'Four Seasons Resort & Snake River Lodge (Teton Village)',
        'OEG, Acadex, IEO',
        'Housekeeping / Stewarding',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $17.50 / OT $26.25', '-', '45 – 50 ชม./wk', '$140',
        'รีสอร์ตหรู 5 ดาวใน Teton Village, หอพักพนักงาน, นั่งรถบัส START Bus ฟรี',
        '🍺 The Mangy Moose Saloon (Teton Village): Barback/Busser ผับดัง 18:00-00:30 น. (ทิปสดเศรษฐี $60-$120/คืน)',
        '🤠 Million Dollar Cowboy Bar (เมือง Jackson): นั่ง START Bus เข้าเมือง ทำ Barback 19:00-01:30 น.',
        '🍕 Alpenhof Bistro: ล้างจาน/ผู้ช่วยครัว 17:30-22:30 น. ($16/ชม. + อาหารฟรี)'
    ],
    [
        'Tier S', 'Wyoming (WY)',
        'The Wort Hotel & Silver Dollar Bar (Jackson Town)',
        'Acadex, OEG, IEO',
        'Housekeeping / Banquet Server / Steward',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $17.00 / OT $25.50', '$30 - $60', '44 – 50 ชม./wk', '$150',
        'โรงแรมประวัติศาสตร์ใจกลางเมือง Jackson, เดินทางสะดวกที่สุด มีร้านค้าล้อมรอบ',
        '💵 Silver Dollar Bar (ในโรงแรม): Barback/Busser บาร์ดนตรีสดคนแน่น 18:30-01:00 น. (ทิปสด $70-$130/คืน)',
        '🥩 Gun Barrel Steak & Game House: Busser ร้านสเต๊กเนื้อสัตว์ป่า 17:30-22:30 น. ($14/ชม. + ทิป)',
        '🛒 Albertsons Jackson: จัดสต็อกสินค้ากะดึก 20:00-00:00 น. ($18/ชม.)'
    ],
    [
        'Tier S', 'Wyoming (WY)',
        'Under Canvas Grand Teton / Yellowstone (Summer Only)',
        'Higher Education, IEO, ALC',
        'Housekeeping / Guest Service',
        'ปกติ: 08:30 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 08:00 – 17:30 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75', '$50 - $100', '42 – 46 ชม./wk', '$100',
        'แคมป์กระโจมซาฟารีหรูเปิดเฉพาะ พ.ค.-ก.ย., อาหารพนักงาน, ทิปเงินสดจากแขกไฮเอนด์',
        '🏕️ Embers Restaurant (ในแกลมปิ้ง): Food Runner กะค่ำ 17:30-22:00 น. (ได้ทิปสดคืนละ $40-$60)',
        '☕ Moose-Wilson Road Cafes: ผู้ช่วยบาริสต้า/เบเกอรี่ช่วงเช้าตรู่ 06:00-08:00 น. หรือเย็น',
        '🛒 Jackson Town Local Diners: นั่งรถเข้าเมืองแจ็กสัน ทำงานร้านอาหารวันหยุด'
    ],
    [
        'Tier S', 'Wyoming (WY)',
        'Togwotee Mountain Lodge (Moran / Dubois)',
        'Acadex, Higher, IEE',
        'Housekeeping / Culinary / Guest Activities',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00', '$15 - $30', '44 – 50 ชม./wk', '$110 (รวมกิน)',
        'รีสอร์ตภูเขาบนช่องเขา Togwotee Pass ใกล้ Grand Teton NP, หอพักพร้อมอาหาร 3 มื้อ',
        '🥩 Red Fox Saloon (ในรีสอร์ต): Busser/Barback 17:30-22:30 น. (ขอ OT $24/ชม. + ทิป)',
        '🍳 Grizzly Grill (ในรีสอร์ต): ผู้ช่วยครัว/ล้างจาน 17:00-22:00 น. (เรต OT $24/ชม.)',
        '🐴 Horseback Riding Barn: ช่วยดูแลม้าและทำความสะอาดคอกม้าช่วงเย็น 16:30-20:00 น.'
    ],

    # 3. WISCONSIN (WI)
    [
        'Tier S', 'Wisconsin (WI)',
        'Kalahari Resorts & Conventions (Wisconsin Dells)',
        'OEG, Acadex, Higher, IEO, New Step, ALC',
        'Lifeguard / Housekeeping (Summer High Season)',
        'ปกติ: 09:30 – 18:00 หรือ 12:00 – 20:30\nพีคซัมเมอร์: 09:00 – 19:30 (10 ชม.)',
        'ฐาน $15.00 / OT $22.50', '-', '38 – 44 ชม./wk', '$105',
        'หอพัก Kalahari Village, บัตรเล่นสวนน้ำฟรี, เมืองปั่นจักรยาน 100%, หางาน 2 ร้านอาหารง่าย',
        '🍕 Moosejaw Pizza & Dells Brewing: ปั่นจักรยาน 10 นาที Busser/Barback 18:30-23:30 น. ($13/ชม. + ทิปสด $60-$90/คืน)',
        '🍔 Buffalo Phil’s Grille: Food Runner/Busser เสิร์ฟอาหารด้วยรถไฟจิ๋ว 18:00-22:30 น. ($13/ชม. + ทิปสด $50-$80)',
        '🧀 MACS Mac & Cheese / Dairy Queen: แคชเชียร์/ครัวกะดึก 18:30-23:00 น. ($14.50-$15.50/ชม.)'
    ],
    [
        'Tier S', 'Wisconsin (WI)',
        'Wilderness Resort & Glacier Canyon Lodge (WI Dells)',
        'OEG, IEE, Acadex, IEO',
        'Waterpark Attendant / Housekeeping',
        'ปกติ: 09:00 – 17:30 (8 ชม.)\nพีคซัมเมอร์: 08:30 – 19:00 (10 ชม.)',
        'ฐาน $15.00 / OT $22.50', '-', '40 – 46 ชม./wk', '$105',
        'อาณาจักรรีสอร์ตสวนน้ำที่ใหญ่ที่สุดในอเมริกา (600 เอเคอร์), หอพักพนักงานในรีสอร์ต',
        '🥩 Field’s at the Wilderness (สเต๊กหรูในรีสอร์ต): Busser 17:30-23:00 น. ($12/ชม. + ทิปสด $70-$120/คืน)',
        '🍕 Sarento’s Restaurant (ในรีสอร์ต): Food Runner/ล้างจาน 17:00-22:30 น. (ขอ OT ในรีสอร์ต $22.50)',
        '🍔 B-LUX Grill & Bar: Barback/Busser ร้านเบอร์เกอร์คราฟต์เบียร์ 18:00-00:00 น. (ทิปสดดีมาก)'
    ],
    [
        'Tier S', 'Wisconsin (WI)',
        'Mt. Olympus Water & Theme Park (WI Dells)',
        'New Step, Acadex, Higher, IEO',
        'Ride Operator / Housekeeping / Lifeguard',
        'ปกติ: 09:30 – 18:00 (8 ชม.)\nพีคซัมเมอร์: 09:00 – 21:00 (11.5 ชม.)',
        'ฐาน $15.00 / OT $22.50', '-', '42 – 48 ชม./wk', '$95',
        'สวนสนุกธีมกรีกโบราณ โรลเลอร์โคสเตอร์ไม้, หอพักราคาถูก, ทำเลติดถนนใหญ่ Parkway',
        '🥞 Paul Bunyan’s Cook Shanty: ล้างจาน/ทำความสะอาดรอบค่ำ 17:30-22:00 น. ($14.50/ชม. + กินฟรี)',
        '🌭 Hot Dog Avenue: แคชเชียร์/ครัวปิด 18:00-22:30 น. ($14.50/ชม.)',
        '🍺 Showboat Saloon (Downtown): Barback ผับดนตรีสด 19:00-01:30 น. (ทิปสดแน่น)'
    ],
    [
        'Tier S', 'Wisconsin (WI)',
        'Noah’s Ark Waterpark (Wisconsin Dells - Summer Only)',
        'OEG, IEE, New Step, IEO',
        'Ride Operator / Park Services',
        'ปกติ: 09:00 – 17:30 (8 ชม.)\nพีคซัมเมอร์: 08:30 – 18:30 (9.5 ชม.)',
        'ฐาน $14.50 / OT $21.75', '-', '40 – 46 ชม./wk', '$100',
        'สวนน้ำกลางแจ้งใหญ่ที่สุดในอเมริกา เปิดเฉพาะซัมเมอร์, เล่นสวนน้ำฟรี, หอพักพนักงานใกล้ที่ทำงาน',
        '🍻 Monk’s Bar & Grill (Downtown Dells): ปั่นจักรยานไปทำ Barback/Busser 18:30-00:00 น. (ทิปสดแน่นมาก)',
        '🍕 Pizza Pub Dells: ช่วยส่งอาหาร/ทำพิซซ่า/ล้างจานรอบดึก 18:00-00:00 น. ($14/ชม. + ทิป)',
        '🍦 Dairy Queen / Cold Stone Dells: ตักไอศกรีมกะค่ำ 18:00-22:30 น. ($14.50/ชม.)'
    ],
    [
        'Tier S', 'Wisconsin (WI)',
        'Chula Vista Resort & Waterpark (WI Dells)',
        'Higher, Acadex, IEE, IEO',
        'Housekeeping / Lifeguard',
        'ปกติ: 08:30 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 08:00 – 17:30 (9.5 ชม.)',
        'ฐาน $15.00 / OT $22.50', '-', '40 – 45 ชม./wk', '$105',
        'รีสอร์ตริมแม่น้ำ Wisconsin River, สวนน้ำในร่ม/กลางแจ้ง, หอพักในรีสอร์ต',
        '🥩 Kaminski’s Chop House (ในรีสอร์ต): Busser ร้านสเต๊กหรู 17:30-23:00 น. ($12/ชม. + ทิปสดเศรษฐี $70-$120/คืน)',
        '🌮 Mexicali Rose: Busser/Runner ร้านอาหารเม็กซิกันริมน้ำ 18:00-23:00 น. ($13/ชม. + ทิปสด)',
        '🍕 Kilbourn City Grill (ในรีสอร์ต): ล้างจาน/ผู้ช่วยครัว 17:00-22:00 น. (ขอ OT ในรีสอร์ตได้)'
    ],
    [
        'Tier S', 'Wisconsin (WI)',
        'Grand Geneva Resort & Spa (Lake Geneva, WI)',
        'Acadex, OEG, IEO, ALC',
        'Housekeeping / Banquet / Culinary',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00', '$20 - $50', '42 – 48 ชม./wk', '$110',
        'รีสอร์ตหรูระดับ 4 เพชร AAA เมืองตากอากาศทะเลสาบคนรวยชิคาโกช่วงซัมเมอร์, หอพักพนักงาน',
        '🥩 Geneva ChopHouse (ในรีสอร์ต): Busser 17:30-23:00 น. ($13/ชม. + ทิปสด $60-$100/คืน)',
        '🍕 Popeye’s on Lake Geneva: Busser/Dishwasher ร้านอาหารริมทะเลสาบดัง 18:00-23:30 น. (ทิปดี)',
        '🍺 The Bottle Shop / Local Pubs: Barback ร้านคราฟต์เบียร์ 18:30-00:00 น.'
    ],

    # 4. TENNESSEE (TN)
    [
        'Tier S', 'Tennessee (TN)',
        'Dollywood Theme Park & Splash Country (Pigeon Forge)',
        'New Step, Acadex, IEO, OEG',
        'Ride Operator / Food Service / Retail',
        'ปกติ: 09:30 – 18:00 (8 ชม.)\nพีคซัมเมอร์: 09:00 – 21:30 (12 ชม. สวนสนุกเปิดดึกมีพลุ)',
        'ฐาน $15.00 / OT $22.50', '-', '44 – 50 ชม./wk', '$110',
        'ปลอดภาษีเงินได้รัฐ 0%, นั่งรถราง Pigeon Forge Trolley $1/วัน, บัตรเข้าสวนสนุก Dollywood ฟรี',
        '🍗 Paula Deen’s Family Kitchen (The Island): นั่งรถรางไปทำ Busser 18:30-23:00 น. ($13/ชม. + ทิปสด $60-$90)',
        '🍕 Mellow Mushroom Pizza: Barback/Busser ร้านพิซซ่าคราฟต์เบียร์ 18:30-00:00 น. ($12/ชม. + ทิปสด $50-$80)',
        '🥞 Puckett’s Grocery & Restaurant: Food Runner 18:00-23:00 น. ($13/ชม. + ทิป)'
    ],
    [
        'Tier S', 'Tennessee (TN)',
        'The Island in Pigeon Forge (Arcades & Attractions)',
        'New Step, Acadex, IEO',
        'Attractions Host / Retail / F&B',
        'ปกติ: 10:00 – 18:00 (8 ชม.)\nพีคซัมเมอร์: 10:00 – 23:00 (กะดึก)',
        'ฐาน $15.00 / OT $22.50', '$20 - $40', '42 – 48 ชม./wk', '$110',
        'ศูนย์รวมความบันเทิง ชิงช้าสวรรค์ยักษ์และร้านอาหารกลางเมือง, รถรางผ่านหน้าร้าน',
        '🦜 Margaritaville Restaurant (ใน The Island): Busser/Barback 18:30-00:00 น. ($13/ชม. + ทิปสด $60-$100)',
        '🥞 Timberwood Grill (ใน The Island): ล้างจาน/ผู้ช่วยครัว 18:00-23:30 น. ($14.50/ชม.)',
        '🍭 The Island Candy Kitchen: แคชเชียร์/ทำขนม 18:00-22:30 น. ($15/ชม.)'
    ],
    [
        'Tier S', 'Tennessee (TN)',
        'Wilderness at the Smokies (Sevierville)',
        'OEG, Acadex, Higher, IEO, ALC',
        'Lifeguard / Housekeeping',
        'ปกติ: 09:00 – 17:30 (8 ชม.)\nพีคซัมเมอร์: 08:30 – 19:30 (10.5 ชม.)',
        'ฐาน $15.00 / OT $22.50', '-', '42 – 48 ชม./wk', '$105',
        'สวนน้ำในร่มและกลางแจ้งใหญ่ที่สุดในเทนเนสซี, ปลอดภาษีรัฐ 0%, หอพักพนักงาน Sevierville',
        '🍏 Applewood Farmhouse Restaurant: Busser ร้านอาหารดังคนแน่น 18:00-22:30 น. (ทิปสด $60-$100/คืน)',
        '🥩 Hidden Trail Restaurant (ในรีสอร์ต): ล้างจาน/Busser กะค่ำ 18:00-22:30 น. (ขอ OT ในรีสอร์ต $22.50/ชม.)',
        '🛍️ Tanger Outlets Sevierville: จัดสต็อกสินค้า/ปิดร้าน 18:00-21:30 น. ($15/ชม.)'
    ],
    [
        'Tier S', 'Tennessee (TN)',
        'Anakeesta Mountaintop Theme Park (Gatlinburg)',
        'Higher, IEE, IEO',
        'Guest Host / F&B / Retail',
        'ปกติ: 09:00 – 17:30 (8 ชม.)\nพีคซัมเมอร์: 08:30 – 20:00 (10.5 ชม.)',
        'ฐาน $15.00 / OT $22.50', '$15 - $30', '42 – 48 ชม./wk', '$110',
        'สวนสนุกธรรมชาติบนยอดเขา Gatlinburg นั่งกระเช้า Chondola, ปลอดภาษีรัฐ 0%',
        '🍺 Smoky Mountain Brewery (Gatlinburg): Barback/Busser 18:30-00:30 น. ($12/ชม. + ทิปสด $70-$120/คืน)',
        '🥩 Alamo Steakhouse: Busser/Dishwasher ร้านสเต๊กคาวบอย 17:30-23:00 น. ($13/ชม. + ทิป)',
        '🥞 Pancake Pantry (ร้านแพนเค้กอันดับ 1): ช่วยเตรียมวัตถุดิบ/ล้างจานรอบบ่าย-เย็น'
    ],
    [
        'Tier S', 'Tennessee (TN)',
        'Ober Mountain Adventure Park & Ski Area (Gatlinburg)',
        'IEE, New Step, IEO',
        'Attractions Host / Retail / Lift Operations',
        'ปกติ: 09:30 – 18:00 (8 ชม.)\nพีคซัมเมอร์: 09:00 – 20:30 (11 ชม.)',
        'ฐาน $14.50 / OT $21.75', '-', '40 – 46 ชม./wk', '$110',
        'สวนสนุกภูเขาและกระเช้าลอยฟ้า Aerial Tramway ชมวิวเทือกเขา Great Smoky Mountains',
        '🥩 Peddler Steakhouse (Gatlinburg): Busser ร้านสเต๊กริมลำธาร 18:00-23:00 น. (ทิปสด $60-$100/คืน)',
        '🍕 Slice Pizza Bakery: ทำพิซซ่า/ล้างจาน 18:30-23:30 น. ($14.50/ชม.)',
        '🍬 Ole Smoky Candy Kitchen: ผู้ช่วยทำลูกอม/แคชเชียร์ 18:00-22:30 น.'
    ],

    # 5. MONTANA (MT)
    [
        'Tier S', 'Montana (MT)',
        'Glacier National Park Lodges (Pursuit / Xanterra)',
        'OEG, Acadex, Higher, IEO, ALC',
        'Hospitality Crew / Housekeeping',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00', '-', '46 – 52 ชม./wk', '$115 (รวมกิน)',
        'อุทยานธรรมชาติธารน้ำแข็ง Glacier NP เปิดเฉพาะซัมเมอร์, ปลอดภาษีมูลค่าเพิ่ม 0% Sales Tax',
        '🥩 Belton Chalet Dining Room: Busser/Steward ร้านอาหารประวัติศาสตร์ 17:30-22:30 น. ($15/ชม. + ทิป)',
        '🛶 Glacier Raft Company Base: พนักงานล้างทำความสะอาดเรือยาง/อุปกรณ์ล่องแก่ง 17:00-21:30 น. ($16/ชม.)',
        '🥐 West Glacier Bakery & Cafe: ผู้ช่วยเตรียมวัตถุดิบ/ล้างจาน 17:00-22:00 น.'
    ],
    [
        'Tier S', 'Montana (MT)',
        'Many Glacier Hotel & Glacier Park Lodge (East Glacier)',
        'OEG, Acadex, IEO',
        'Housekeeping / Dining Room / Steward',
        'ปกติ: 07:30 – 15:30 (8 ชม.)\nพีคซัมเมอร์: 07:00 – 17:00 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00', '$15 - $30', '46 – 52 ชม./wk', '$115 (รวมกิน)',
        'โรงแรมสไตล์สวิสชาเลต์ริมทะเลสาบ Swiftcurrent Lake สวยที่สุดใน Glacier NP, อาหาร EDR 3 มื้อ',
        '🥩 Ptarmigan Dining Room (ในโรงแรม): Busser 17:00-22:30 น. (เรต OT $24/ชม. + ทิปสด)',
        '☕ Heidi’s Snack Shop (ในโรงแรม): แคชเชียร์/ชงกาแฟ 16:30-21:30 น. (ขอ OT $24/ชม.)',
        '🛶 Many Glacier Boat Tours: ช่วยเทียบเรือ/ล้างเรือทัวร์ 17:00-20:30 น.'
    ],
    [
        'Tier S', 'Montana (MT)',
        'Big Sky Resort / Montage Big Sky',
        'Acadex, Higher, IEE, IEO, ALC',
        'Mountain Operations / Housekeeping',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $17.50 / OT $26.25', '-', '46 – 52 ชม./wk', '$140',
        'รีสอร์ตภูเขาหรูหราไฮเอนด์, ค่าแรงฐานสูงมาก, มีรถบัส Skyline Bus ฟรี',
        '🍺 Lone Peak Brewery (Town Center): Barback/Busser 17:30-23:30 น. ($15/ชม. + ทิปสดเศรษฐี $60-$100/คืน)',
        '🍖 The Riverhouse BBQ: Busser/Runner ร้านบาร์บีคิวริมแม่น้ำ Gallatin 17:00-22:30 น. ($14/ชม. + ทิป)',
        '🛒 Roxy’s Market Big Sky: พนักงานจัดสต็อกซูเปอร์มาร์เก็ต 18:00-22:00 น. ($17/ชม.)'
    ],
    [
        'Tier S', 'Montana (MT)',
        'Under Canvas Glacier / Yellowstone (Summer Only)',
        'Higher Education, IEO, ALC',
        'Housekeeping / Guest Host',
        'ปกติ: 08:30 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 08:00 – 17:30 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75', '$40 - $80', '42 – 46 ชม./wk', '$100',
        'แกลมปิ้งกระโจมซาฟารีวิวเทือกเขาธารน้ำแข็ง Glacier NP, อาหารพนักงาน, ทิปแขกไฮเอนด์',
        '🏕️ Camp Fire Lounge: ดูแลกองไฟ/เสิร์ฟเครื่องดื่มรอบค่ำ 18:00-22:00 น. (ทิปสด)',
        '🥩 Coram Local Saloons: Barback/Busser 18:30-23:00 น. ($14/ชม. + ทิป)',
        '🛒 West Glacier Merc: จัดของมินิมาร์ท 17:00-21:30 น. ($15.50/ชม.)'
    ],

    # 6. MAINE (ME)
    [
        'Tier S', 'Maine (ME)',
        'Bar Harbor Grand Hotel / Harborside Hotel',
        'Acadex, OEG, Higher, IEO, ALC',
        'Housekeeping / Laundry',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75', '-', '44 – 50 ชม./wk', '$130',
        'เมืองตากอากาศชายทะเล Bar Harbor & อุทยาน Acadia NP, รถบัส Island Explorer ฟรี',
        '🦞 Stewman’s Lobster Pound (ริมทะเล): Busser/Barback ร้านกุ้งล็อบสเตอร์ 17:30-23:00 น. ($13/ชม. + ทิปสด $60-$120/คืน)',
        '🍺 Geddy’s Down Under / The Chart Room: Busser/Runner 18:00-23:30 น. (ทิปสดแน่นมาก)',
        '🍦 Ben & Bill’s Chocolate Emporium: พนักงานตักไอศกรีม/แคชเชียร์ 17:00-22:00 น. ($15.50/ชม.)'
    ],
    [
        'Tier S', 'Maine (ME)',
        'Cliff House Maine (Cape Neddick / Ogunquit)',
        'Higher, Acadex, IEO, ALC',
        'Housekeeping / Culinary / Stewarding',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $17.00 / OT $25.50', '-', '42 – 48 ชม./wk', '$135',
        'รีสอร์ตหรูบนหน้าผาริมมหาสมุทรแอตแลนติก แขกไฮเอนด์ระดับมหาเศรษฐีบอสตันและนิวยอร์ก',
        '🦞 The Tiller Restaurant (ในรีสอร์ต): Busser ร้าน Fine Dining วิวมหาสมุทร 17:30-23:00 น. (ทิปสด $70-$130/คืน)',
        '🍺 Nubb’s Lobster Shack (ในรีสอร์ต): Food Runner/Barback 17:00-22:30 น. (ขอ OT ในรีสอร์ต $25.50)',
        '🍦 Ogunquit Beach Cafes: ผู้ช่วยครัว/บริการรอบเย็น'
    ],
    [
        'Tier S', 'Maine (ME)',
        'The Nonantum Resort (Kennebunkport, ME)',
        'Higher, Acadex, IEO',
        'Housekeeping / Banquet / F&B',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75', '$20 - $50', '42 – 48 ชม./wk', '$125',
        'รีสอร์ตตากอากาศริมน้ำประวัติศาสตร์ เมืองของประธานาธิบดีบุช, หอพักพนักงาน Kennebunkport',
        '🦞 The Clam Shack (สะพาน Kennebunkport): ล้างจาน/ทอดซีฟู้ดร้านดัง 17:30-22:30 น. ($16/ชม. + ทิป)',
        '🥩 Ocean Restaurant: Busser ร้านอาหารหรูริมน้ำ 18:00-23:00 น. (ทิปสด $60-$100/คืน)',
        '🍦 Rococo Artisan Ice Cream: ตักไอศกรีม 17:00-22:00 น. ($15/ชม.)'
    ],

    # 7. UTAH (UT)
    [
        'Tier S', 'Utah (UT)',
        'Zion National Park Lodge (Xanterra Springdale)',
        'OEG, IEE, Acadex, IEO, ALC',
        'Hospitality Crew / Housekeeping',
        'ปกติ: 07:30 – 15:30 (8 ชม.)\nพีคซัมเมอร์: 07:00 – 16:30 (9 ชม.)',
        'ฐาน $16.00 / OT $24.00', '-', '44 – 50 ชม./wk', '$110',
        'อุทยานแห่งชาติหุบเขาผาแดง Zion NP, มีรถชัตเติลบัสฟรีวิ่งตลอดถนน Springdale',
        '🌮 Bit & Spur Restaurant & Saloon: Busser/Barback 17:30-23:00 น. ($13/ชม. + ทิปสดแขกต่างชาติ $50-$90/คืน)',
        '🍔 Oscar’s Cafe (Springdale): Food Runner/Busser 17:00-22:00 น. ($13/ชม. + ทิป)',
        '🍺 Zion Canyon Brew Pub: ล้างจาน/ผู้ช่วยครัวหน้าปากทางเข้าอุทยาน 18:00-23:30 น. ($15/ชม.)'
    ],
    [
        'Tier S', 'Utah (UT)',
        'Ruby’s Inn / Bryce Canyon Grand Hotel',
        'Higher, IEE, Acadex, IEO',
        'Housekeeping / Fast Food / Retail',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $15.00 / OT $22.50', '-', '42 – 48 ชม./wk', '$100',
        'อาณาจักรโรงแรมและรีสอร์ต Ruby’s Inn หน้าปากทาง Bryce Canyon NP, หอพักพนักงานใกล้ที่ทำงาน',
        '🥩 Cowboy’s Buffet & Steak Room (ในเครือ): Busser/Steward 17:00-22:30 น. (ขอ OT ในเครือ $22.50/ชม.)',
        '🤠 Ebenezer’s Barn & Grill: Food Runner งานดินเนอร์โชว์คาวบอย 18:00-22:00 น. (ได้ส่วนแบ่งทิป)',
        '🛒 Ruby’s General Store & Diner: แคชเชียร์/ผู้ช่วยครัว 17:00-21:30 น. ($15/ชม.)'
    ],
    [
        'Tier S', 'Utah (UT)',
        'Park City Mountain Resort (Vail Resorts - Summer Ops)',
        'OEG, Acadex, IEO, ALC',
        'Mountain Host / Housekeeping / F&B',
        'ปกติ: 08:30 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 08:00 – 17:30 (9.5 ชม.)',
        'ฐาน $17.50 / OT $26.25', '-', '42 – 48 ชม./wk', '$150',
        'สกีรีสอร์ตและเมืองภูเขาที่ใหญ่ที่สุดในสหรัฐฯ ซัมเมอร์มีกิจกรรมเดินป่าและปั่นจักรยาน, รถเมล์ฟรีทั้งเมือง',
        '🥩 High West Distillery & Saloon (Main Street): Barback/Busser โรงกลั่นวิสกี้ดัง 17:30-23:30 น. (ทิปสด $80-$140/คืน)',
        '🍕 Red Banjo Pizza (Historic Main St): ล้างจาน/ผู้ช่วยครัว 18:00-23:00 น. ($16/ชม. + ทิป)',
        '🛒 Freshies Lobster Co. / Local Cafes: Food Runner 17:00-21:30 น. ($15/ชม. + ทิป)'
    ],

    # 8. MARYLAND (MD)
    [
        'Tier S', 'Maryland (MD)',
        'Premier Aquatics / High Sierra Pools (Summer Pools)',
        'Acadex, New Step, ALC, IEO, OEG',
        'Pool Lifeguard (Summer Only)',
        'ปกติ: 10:30 – 19:30 (9 ชม.)\nพีคซัมเมอร์: 10:00 – 20:30 (10.5 ชม. สระเปิดยาว)',
        'ฐาน $16.00 / OT $24.00', '-', '50 – 54 ชม./wk', '$120',
        'การันตีชั่วโมง OT แน่นอนสัปดาห์ละ 10-14 ชม., อพาร์ตเมนต์แชร์กับเพื่อน, รถไฟใต้ดิน Metro เข้า DC',
        '🛒 Giant Food / Safeway: พนักงานจัดสต็อกสินค้ากะดึก 20:30-01:00 น. ($16-$17.50/ชม. มีสาขาใกล้ที่พัก)',
        '🍜 Thai Tanic / Ruan Thai: ผู้ช่วยครัว/แพ็กอาหาร 20:00-23:30 น. (มีอาหารไทยฟรี)',
        '🎯 Target / CVS Pharmacy: แคชเชียร์/ปิดร้าน 20:00-23:30 น. ($16.00/ชม.)'
    ],
    [
        'Tier S', 'Maryland (MD)',
        'Ocean City Boardwalk Hotels & Resorts (Summer)',
        'IEE, New Step, OEG, IEO, ALC',
        'Housekeeping / Ride Operator',
        'ปกติ: 08:30 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 08:00 – 17:30 (9.5 ชม.)',
        'ฐาน $15.00 / OT $22.50', '-', '44 – 50 ชม./wk', '$125',
        'เมืองตากอากาศชายหาด Atlantic, รถบัส Coastal Highway วิ่ง 24 ชม., หางานสองง่ายมากช่วงซัมเมอร์',
        '🌴 Seacrets Jamaica USA (ผับริมหาดยักษ์ใหญ่): Barback/Busser 18:00-01:30 น. ($12/ชม. + ทิปสดมหาศาล $80-$150/คืน)',
        '🍟 Thrasher’s French Fries (ริมหาด): แคชเชียร์/ทอดเฟรนช์ฟรายส์ 18:00-23:00 น. ($15/ชม.)',
        '🍺 Shenanigans Irish Pub: ล้างจาน/ผู้ช่วยบาร์ 18:30-00:30 น. ($14/ชม. + ทิป)'
    ],
    [
        'Tier S', 'Maryland (MD)',
        'Jolly Roger Amusement Park & Splash Mountain (Ocean City)',
        'New Step, IEE, IEO',
        'Ride Operator / Lifeguard / Park Services',
        'ปกติ: 11:00 – 19:00 (8 ชม.)\nพีคซัมเมอร์: 10:00 – 23:00 (12 ชม.)',
        'ฐาน $15.00 / OT $22.50', '-', '45 – 52 ชม./wk', '$120',
        'สวนสนุกและสวนน้ำที่ใหญ่ที่สุดใน Ocean City, เล่นสวนสนุกฟรี, มีรถเมล์ผ่านหน้าสวนสนุก',
        '🦀 Higgins Crab House: Busser ร้านปูยักษ์ 19:30-00:30 น. ($13/ชม. + ทิปสด $60-$90/คืน)',
        '🍕 Dough Roller Pizza (Boardwalk): ล้างจาน/ทำพิซซ่ากะดึก 19:30-01:00 น. ($15/ชม.)',
        '🍦 Dumser’s Dairyland: ตักไอศกรีม/แคชเชียร์ 19:00-23:30 น. ($15/ชม.)'
    ],

    # 9. OHIO (OH)
    [
        'Tier S', 'Ohio (OH)',
        'Cedar Point Amusement Park & Resorts (Sandusky)',
        'OEG, IEE Thailand, IEO, ALC',
        'Ride Operator / Food Service',
        'ปกติ: 10:00 – 18:30 (8 ชม.)\nพีคซัมเมอร์: 09:30 – 22:30 (12 ชม. สวนสนุกปิดดึก)',
        'ฐาน $14.50 / OT $21.75', '-', '46 – 52 ชม./wk', '$80 (ถูกสุด)',
        'สวนสนุกเครื่องเล่นระดับโลก, หอพักราคาถูกที่สุดในอเมริกา ($80/wk), รถบัสรับส่งฟรี, เล่นสวนสนุกฟรี',
        '🏨 Hotel Breakers / Castaway Bay (ในสวนสนุก): ล้างจาน/แม่บ้านกะค่ำ 19:00-00:00 น. (ขอ OT ในสวนสนุก $21.75/ชม.)',
        '🍖 Famous Dave’s BBQ (Cedar Point Marina): Busser/Dishwasher 18:30-23:30 น. ($13/ชม. + ทิปสด)',
        '🐴 Thirsty Pony / Kalahari Sandusky: Barback/Busser ร้านอาหารใกล้เคียง 19:00-00:30 น.'
    ],
    [
        'Tier S', 'Ohio (OH)',
        'Kings Island Amusement Park (Mason / Cincinnati)',
        'OEG, IEE Thailand, IEO',
        'Ride Operator / Park Services / Culinary',
        'ปกติ: 10:00 – 18:30 (8 ชม.)\nพีคซัมเมอร์: 09:30 – 22:30 (12 ชม.)',
        'ฐาน $14.50 / OT $21.75', '-', '44 – 50 ชม./wk', '$90',
        'สวนสนุกชั้นนำเครือ Cedar Fair ใกล้เมือง Cincinnati, หอพักพนักงาน + รถรับส่งฟรี',
        '🍕 Mason Local Pizzerias & Diners: ล้างจาน/ผู้ช่วยครัวรอบดึก 19:00-00:00 น. ($14.50/ชม.)',
        '🍦 Greaters Ice Cream: พนักงานตักไอศกรีมชื่อดัง 19:00-23:00 น. ($14.50/ชม.)',
        '🏨 Great Wolf Lodge Mason (ข้างๆ สวนสนุก): แม่บ้าน/ผู้ช่วยครัวกะค่ำ (ขอทำเพิ่มได้)'
    ],

    # 10. COLORADO (CO)
    [
        'Tier S', 'Colorado (CO)',
        'YMCA of the Rockies (Estes Park Center)',
        'Higher, IEE, Acadex, IEO, ALC',
        'Housekeeping / Food Service',
        'ปกติ: 07:30 – 15:30 (8 ชม.)\nพีคซัมเมอร์: 07:00 – 16:30 (9 ชม.)',
        'ฐาน $15.50 / OT $23.25', '-', '42 – 48 ชม./wk', '$110 (รวมกิน)',
        'แคมป์รีสอร์ตกลางเทือกเขา Rocky Mountain NP, หอพัก+อาหารบุฟเฟต์ 3 มื้อ, รถชัตเติลบัสเข้าเมืองฟรี',
        '🏨 The Stanley Hotel (โรงแรมประวัติศาสตร์ The Shining): Busser/Steward ร้านอาหารหรู 17:30-23:00 น. (ทิปสด $50-$90)',
        '🍔 Penelope’s Old Time Burgers: ผู้ช่วยครัว/ทอดเบอร์เกอร์ 17:00-21:30 น. ($15/ชม. + กินฟรี)',
        '🍺 Estes Park Brewery / Rock Cut Brewing: ล้างแก้ว/ผู้ช่วยบาร์ 18:00-22:30 น. ($15/ชม.)'
    ],

    # 11. SOUTH CAROLINA (SC)
    [
        'Tier S', 'South Carolina (SC)',
        'Myrtle Beach Oceanfront Resorts & Boardwalk (Summer)',
        'OEG, IEE, New Step, IEO, ALC',
        'Housekeeping / Lifeguard / Attractions',
        'ปกติ: 08:30 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 08:00 – 17:30 (9.5 ชม.)',
        'ฐาน $14.50 / OT $21.75', '$15 - $30', '44 – 50 ชม./wk', '$115',
        'เมืองตากอากาศชายหาดยอดนิยมอันดับ 1 ฝั่งใต้, ชายหาดยาว 60 ไมล์, เมืองเดินเท้า/จักรยาน',
        '🦀 Sea Captain’s House (ร้านซีฟู้ดระดับตำนาน): Busser 17:30-23:00 น. (ทิปสด $70-$120/คืน)',
        '🍕 Broadway at the Beach Eateries: Barback/Runner ศูนย์การค้าเปิดโล่ง 18:30-00:30 น. (ทิปแน่น)',
        '🍦 Peaches Corner / Mad Myrtle’s Ice Cream: แคชเชียร์ริมหาด 18:00-23:30 น.'
    ],

    # 12. NORTH CAROLINA (NC)
    [
        'Tier S', 'North Carolina (NC)',
        'Outer Banks Coastal Resorts (Nags Head / Kill Devil Hills)',
        'IEE, New Step, Acadex, ALC',
        'Housekeeping / Beach Operations / F&B',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $15.50 / OT $23.25', '$20 - $40', '42 – 48 ชม./wk', '$125',
        'หมู่เกาะตากอากาศ Outer Banks ทะเลสวย สงบ คนรวยมาพักผ่อน, บ้านพักแชร์ J-1 ริมทะเล',
        '🦞 Owens’ Restaurant (ร้านซีฟู้ดประวัติศาสตร์): Busser 17:30-23:00 น. (ทิปสด $60-$110/คืน)',
        '🍺 Outer Banks Brewing Station: Barback ร้านคราฟต์เบียร์กังหันลม 18:00-00:30 น.',
        '🍕 Duck Donuts / Kill Devil Grill: ผู้ช่วยครัว/ทอดโดนัทกะเย็น ($15/ชม.)'
    ],

    # -------------------------------------------------------------------------
    # 🏅 TIER A STATES (19 States - Complete Authoritative Coverage)
    # -------------------------------------------------------------------------
    # 13. TEXAS (TX)
    [
        'Tier A', 'Texas (TX)',
        'Schlitterbahn Waterpark (New Braunfels / Galveston)',
        'OEG, Acadex, IEE, IEO',
        'Lifeguard / Park Operations',
        'ปกติ: 09:30 – 18:00 (8 ชม.)\nพีคซัมเมอร์: 09:00 – 19:30 (10 ชม.)',
        'ฐาน $15.00 / OT $22.50', '-', '44 – 50 ชม./wk', '$110',
        'สวนน้ำระดับตำนานของเท็กซัส, ปลอดภาษีเงินได้รัฐ 0%, เล่นสวนน้ำฟรี',
        '🥩 Gristmill River Restaurant (Gruene): Busser ร้านอาหารริมแม่น้ำสุดคึกคัก 18:30-23:30 น. ($12/ชม. + ทิปสด $60-$100)',
        '🦫 Buc-ee’s New Braunfels (ใหญ่ที่สุดในโลก): แคชเชียร์/Food Prep กะดึก 19:00-00:00 น. ($17-$19/ชม. จ่ายหนักมาก)',
        '🍺 Krause’s Cafe & Biergarten: Barback/Runner ร้านเบียร์เยอรมัน 18:00-23:00 น. ($13/ชม. + ทิป)'
    ],
    [
        'Tier A', 'Texas (TX)',
        'Kalahari Resorts & Conventions Round Rock (Austin, TX)',
        'OEG, Acadex, IEO, ALC',
        'Lifeguard / Housekeeping / F&B',
        'ปกติ: 09:30 – 18:00 (8 ชม.)\nพีคซัมเมอร์: 09:00 – 19:30 (10 ชม.)',
        'ฐาน $15.50 / OT $23.25', '-', '42 – 48 ชม./wk', '$120',
        'สวนน้ำในร่มใหญ่ที่สุดในอเมริกา สาขาเท็กซัส, ปลอดภาษีรัฐ 0%, ใกล้ออสติน',
        '🥩 Double Cut Steak House (ในรีสอร์ต): Busser ร้านสเต๊กหรู 17:30-23:00 น. ($13/ชม. + ทิปสด $70-$120)',
        '🍕 Tom Foolerys Adventure Park (ในรีสอร์ต): คุมเครื่องเล่น/เกมรอบค่ำ 18:00-23:00 น. (ขอ OT $23.25)',
        '🍔 Round Rock Local Eateries: Busser/ล้างจานร้านอาหารรอบนอก 18:30-23:30 น.'
    ],
    [
        'Tier A', 'Texas (TX)',
        'Six Flags Fiesta Texas & SeaWorld San Antonio',
        'New Step, Higher, IEE, IEO',
        'Ride Operator / Lifeguard / Culinary',
        'ปกติ: 10:00 – 18:30 (8 ชม.)\nพีคซัมเมอร์: 09:30 – 21:30 (11.5 ชม.)',
        'ฐาน $14.50 / OT $21.75', '-', '42 – 48 ชม./wk', '$115',
        'สวนสนุกและสวนน้ำระดับโลก ซานอันโตนิโอ, ปลอดภาษีรัฐ 0%, หอพักพนักงาน',
        '🥩 The County Line BBQ (River Walk): Busser ร้านบาร์บีคิวริมแม่น้ำ 19:00-00:00 น. (ทิปสด $60-$100/คืน)',
        '🎸 Hard Rock Cafe San Antonio: Food Runner/Busser 19:00-00:30 น. ($13/ชม. + ทิป)',
        '🌮 Boudro’s on the Riverwalk: ล้างจาน/ผู้ช่วยครัว 19:00-01:00 น. ($15/ชม.)'
    ],
    [
        'Tier A', 'Texas (TX)',
        'Kemah Boardwalk & Galveston Pleasure Pier',
        'OEG, New Step, IEO',
        'Ride Operator / Retail / F&B',
        'ปกติ: 10:30 – 18:30 (8 ชม.)\nพีคซัมเมอร์: 10:00 – 22:30 (12 ชม.)',
        'ฐาน $14.50 / OT $21.75', '$15 - $30', '42 – 48 ชม./wk', '$110',
        'สวนสนุกริมอ่าวเม็กซิโก เครือ Landry’s, ปลอดภาษีรัฐ 0%, บรรยากาศชายทะเล',
        '🦞 Aquarium Restaurant Kemah (ในเครือ): Busser ร้านอาหารใต้น้ำ 18:30-23:30 น. (ทิปสด $60-$100/คืน)',
        '🍤 Bubba Gump Shrimp Co. (Galveston Pier): Food Runner/Busser 18:30-00:00 น. (ทิปดี)',
        '🏖️ The Spot (Galveston Seawall): Barback/Busser ร้านอาหารริมหาดคนแน่น 19:00-01:00 น.'
    ],

    # 14. FLORIDA (FL)
    [
        'Tier A', 'Florida (FL)',
        'Universal Orlando Resort & Volcano Bay',
        'OEG, IEE, Acadex, IEO',
        'Attractions Attendant / Culinary / Lifeguard',
        'ปกติ: 09:30 – 18:00 (8 ชม.)\nพีคซัมเมอร์: 09:00 – 22:00 (12 ชม.)',
        'ฐาน $15.50 / OT $23.25', '-', '42 – 48 ชม./wk', '$130',
        'สวนสนุกระดับโลก ยูนิเวอร์แซล ออร์แลนโด, ปลอดภาษีเงินได้รัฐ 0%, บัตรเข้าสวนสนุกฟรี',
        '🎸 Universal CityWalk Eateries: Food Runner/Busser บาร์ดึก 18:30-01:00 น. (ทิปสด $60-$100/คืน)',
        '🍔 The Cowfish Sushi Burger Bar: ล้างจาน/ผู้ช่วยครัว 19:00-01:00 น. ($15/ชม. + ทิป)',
        '🍕 Red Oven Pizza Bakery: ผู้ช่วยทำพิซซ่ากะดึก 18:30-00:30 น.'
    ],
    [
        'Tier A', 'Florida (FL)',
        'Busch Gardens Tampa Bay & Adventure Island',
        'New Step, Acadex, IEO',
        'Ride Operator / Lifeguard / Food Service',
        'ปกติ: 09:30 – 18:00 (8 ชม.)\nพีคซัมเมอร์: 09:00 – 21:30 (11.5 ชม.)',
        'ฐาน $15.00 / OT $22.50', '-', '42 – 48 ชม./wk', '$120',
        'สวนสนุกโรลเลอร์โคสเตอร์อันดับ 1 ในแทมปาและสวนน้ำ, ปลอดภาษีรัฐ 0%',
        '🍺 Ybor City Historic Bars (แทมปา): Barback ผับประวัติศาสตร์ 19:00-01:30 น. (ทิปสด $60-$110/คืน)',
        '🦀 Columbia Restaurant (ร้านสเปนชื่อดังที่สุด): Busser 18:30-23:30 น. (ทิปดี)',
        '🍔 Portillo’s Hot Dogs Tampa: ครัว/แคชเชียร์รอบดึก 18:30-00:00 น. ($15/ชม.)'
    ],
    [
        'Tier A', 'Florida (FL)',
        'Gaylord Palms Resort & Convention Center (Kissimmee)',
        'OEG, Acadex, Higher, ALC',
        'Housekeeping / Banquet Server / Steward',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00', '$20 - $50', '44 – 50 ชม./wk', '$125',
        'รีสอร์ตศูนย์ประชุมโดมกระจกยักษ์ระดับ 4 ดาว Marriott, ปลอดภาษีรัฐ 0%',
        '🥩 Old Hickory Steakhouse (ในรีสอร์ต): Busser ร้านสเต๊กหรู 17:30-23:00 น. (ทิปสด $70-$120)',
        '🌴 Wreckers Sports Bar (ในรีสอร์ต): Barback ผับกีฬาจอ 2 ชั้น 18:30-00:30 น. (ขอ OT ในรีสอร์ต $24/ชม.)',
        '🛍️ Disney Springs Eateries: Food Runner ร้านอาหารฝั่งดิสนีย์ 19:00-01:00 น.'
    ],

    # 15. NEW JERSEY (NJ)
    [
        'Tier A', 'New Jersey (NJ)',
        'Morey’s Piers & Beachfront Waterparks (Wildwood, NJ)',
        'OEG, IEE, New Step, IEO',
        'Ride Operator / Lifeguard / Pier Services',
        'ปกติ: 11:00 – 19:00 (8 ชม.)\nพีคซัมเมอร์: 10:30 – 23:30 (12 ชม.)',
        'ฐาน $15.50 / OT $23.25', '-', '45 – 52 ชม./wk', '$120',
        'สวนสนุกริมสะพานปลาชานหาดที่ใหญ่ที่สุดในฝั่ง East Coast เปิดเฉพาะซัมเมอร์, เล่นเครื่องเล่นฟรี',
        '🍕 Mack’s Pizza / Sam’s Pizza (Boardwalk): ล้างจาน/ทำพิซซ่ากะดึก 19:30-01:30 น. ($15/ชม.)',
        '🍺 The Wharf Restaurant & Bar: Barback/Busser ร้านอาหารริมน้ำ 19:00-01:00 น. (ทิปสด $70-$120/คืน)',
        '🍦 Curley’s Fries / Kohr Brothers: แคชเชียร์/ตักไอศกรีม 19:00-23:30 น. ($15.50/ชม.)'
    ],

    # 16. SOUTH DAKOTA (SD)
    [
        'Tier A', 'South Dakota (SD)',
        'Xanterra Mount Rushmore / Keystone Lodges',
        'OEG, IEE, Higher, IEO, ALC',
        'Retail / Food Service / Housekeeping',
        'ปกติ: 08:30 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 08:00 – 17:30 (9.5 ชม.)',
        'ฐาน $15.50 / OT $23.25', '-', '44 – 50 ชม./wk', '$105 (รวมกิน)',
        'ทำงานหน้าอนุสรณ์สถานแห่งชาติ Mount Rushmore, ปลอดภาษีรัฐ 0%, หอพัก+อาหาร EDR',
        '🍔 Carver’s Cafe at Mt Rushmore: ล้างจาน/ปิดครัว 17:00-21:30 น. (ขอ OT ในอุทยาน $23.25/ชม.)',
        '🥩 Ruby House Restaurant (Keystone): Busser ร้านอาหารธีมคาวบอยย้อนยุค 17:30-22:30 น. ($13/ชม. + ทิป)',
        '🚂 1880 Train / Keystone Gift Shops: พนักงานร้านของฝาก/สถานีรถไฟโบราณ 17:00-21:30 น. ($15/ชม.)'
    ],
    [
        'Tier A', 'South Dakota (SD)',
        'Custer State Park Resorts (State Game Lodge / Sylvan)',
        'Higher, Acadex, IEO',
        'Guest Service / Housekeeping',
        'ปกติ: 07:30 – 15:30 (8 ชม.)\nพีคซัมเมอร์: 07:00 – 16:30 (9 ชม.)',
        'ฐาน $15.50 / OT $23.25', '-', '42 – 48 ชม./wk', '$105 (รวมกิน)',
        'อุทยานธรรมชาติฝูงควายไบซัน Custer SP, ปลอดภาษีรัฐ 0%, หอพัก+อาหาร EDR',
        '🥩 State Game Lodge Dining Room: Busser ร้านสเต๊กควายไบซันหรู 17:00-22:00 น. ($13/ชม. + ทิปสด $50-$80)',
        '🍔 Black Hills Burger & Bun (เมือง Custer): ล้างจาน/ครัว 17:00-21:30 น. ($15/ชม. + กินฟรี)',
        '🏕️ Sylvan Lake General Store: พนักงานมินิมาร์ท/เช่าเรือแคนู 16:30-21:00 น.'
    ],
    [
        'Tier A', 'South Dakota (SD)',
        'Wall Drug Store (Wall, SD)',
        'IEE, Acadex, IEO',
        'Retail / Restaurant Staff / Fast Food',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $15.50 / OT $23.25', '-', '45 – 50 ชม./wk', '$85 (ถูกมาก)',
        'ห้างคาวบอยระดับตำนานของอเมริกา จุดแวะพักยอดฮิตก่อนเข้า Badlands NP, หอพักราคาถูก',
        '☕ Wall Drug Western Art Dining Room: Busser/Steward 17:00-22:00 น. (ขอ OT ในตัว $23.25)',
        '🍩 Wall Drug Famous Donut Kitchen: ช่วยทำโดนัท/เบเกอรี่รอบเย็น 16:30-21:00 น.',
        '🌵 Badlands Saloon & Grille: Barback/ล้างจาน 18:00-23:00 น. ($14.50/ชม. + ทิป)'
    ],
    [
        'Tier A', 'South Dakota (SD)',
        'Deadwood Historic Hotels & Casinos (The Lodge at Deadwood)',
        'Higher, New Step, IEO',
        'Housekeeping / Food & Beverage',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $15.50 / OT $23.25', '$20 - $50', '42 – 48 ชม./wk', '$100',
        'เมืองคาวบอยคาสิโนประวัติศาสตร์ ปลอดภาษีรัฐ 0%, มีรถราง Deadwood Trolley $1',
        '🥩 Deadwood Grille / O’Shea’s: Busser/Runner 17:30-23:00 น. ($13/ชม. + ทิปสด $50-$90/คืน)',
        '🎰 Mineral Palace / Silverado Casino: Barback บาร์ในคาสิโน 18:30-01:00 น. (ทิปดี)',
        '🍕 Mustang Sally’s Sports Bar: ผู้ช่วยครัว/ล้างจาน 18:00-00:00 น. ($14.50/ชม.)'
    ],

    # 17. VIRGINIA (VA)
    [
        'Tier A', 'Virginia (VA)',
        'Busch Gardens Williamsburg & Water Country USA',
        'New Step, Acadex, IEO, OEG',
        'Ride Operator / Culinary Operations',
        'ปกติ: 09:30 – 18:00 (8 ชม.)\nพีคซัมเมอร์: 09:00 – 21:30 (12 ชม. สวนสนุกเปิดดึก)',
        'ฐาน $14.50 / OT $21.75', '-', '44 – 50 ชม./wk', '$115',
        'สวนสนุกธีมยุโรปชื่อดัง, บัตรเข้าสวนสนุกและสวนน้ำฟรี, หอพักพนักงาน Williamsburg',
        '🏰 Kingsmill Resort (ริมแม่น้ำ James River): Banquet Server/Busser งานจัดเลี้ยง 18:30-23:00 น. (ทิปสด $50-$90/คืน)',
        '🦀 Captain George’s Seafood Buffet: Busser/Dishwasher บุฟเฟต์ซีฟู้ดยักษ์ใหญ่ 18:30-23:30 น. (คนแน่นมาก ทิปดี)',
        '🥞 Cracker Barrel / Pancake House: ผู้ช่วยครัว/ล้างจานรอบค่ำ 18:00-22:00 น. ($14.50/ชม.)'
    ],
    [
        'Tier A', 'Virginia (VA)',
        'Virginia Beach Oceanfront Resorts & Boardwalk',
        'IEE, New Step, Acadex, IEO, ALC',
        'Housekeeping / Beach Attendant',
        'ปกติ: 08:30 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 08:00 – 17:30 (9.5 ชม.)',
        'ฐาน $15.00 / OT $22.50', '$15 - $30', '42 – 48 ชม./wk', '$130',
        'เมืองตากอากาศชายทะเลเวอร์จิเนีย มีทางเดินเลียบหาดยาว 3 ไมล์, รถราง Wave Trolley สะดวก',
        '🍺 Waterman’s Surfside Grille: Barback/Busser ร้านริมหาดคนแน่น 18:00-00:30 น. (ทิปสด $70-$120/คืน)',
        '🦀 Catch 31 Fish Bar: Food Runner/Busser 18:00-23:30 น. (ทิปดี)',
        '🍕 Dough Boy’s California Pizza: ผู้ช่วยครัว/ล้างจาน 18:30-00:00 น. ($14.50/ชม.)'
    ],

    # 18. MASSACHUSETTS (MA)
    [
        'Tier A', 'Massachusetts (MA)',
        'Cape Cod Oceanfront Resorts & Inns (Hyannis / Yarmouth)',
        'OEG, IEE, Acadex, Higher, ALC',
        'Housekeeping / Banquet / F&B',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75', '$20 - $50', '42 – 48 ชม./wk', '$135',
        'แหลมตากอากาศระดับตำนานของตระกูลเคนเนดี้ Cape Cod, ปั่นจักรยานเลียบหาดสะดวก',
        '🦞 The Lobster Pot (Provincetown): Busser/Steward ร้านซีฟู้ดดัง 17:30-23:30 น. (ทิปสด $70-$130/คืน)',
        '🍔 The Black Cat Tavern (Hyannis Harbor): Food Runner/Busser 18:00-00:00 น. (ทิปดี)',
        '🍦 Four Seas Ice Cream: ตักไอศกรีมกะค่ำ 18:00-22:30 น. ($16.00/ชม.)'
    ],

    # 19. NEW HAMPSHIRE (NH)
    [
        'Tier A', 'New Hampshire (NH)',
        'Omni Mount Washington Resort (Bretton Woods)',
        'OEG, Acadex, IEO, ALC',
        'Housekeeping / Culinary / Steward',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00', '$15 - $35', '44 – 50 ชม./wk', '$110 (รวมกิน)',
        'โรงแรมปราสาทประวัติศาสตร์ระดับ 4 ดาวหน้าเทือกเขา White Mountains, ปลอดภาษีซื้อ 0% Sales Tax',
        '🥩 Main Dining Room (ในโรงแรม): Busser ร้าน Fine Dining 17:30-23:00 น. (ทิปสด $60-$100/คืน)',
        '🍺 The Cave (ผับใต้ดินในโรงแรม): Barback บาร์ยุค Prohibition 19:00-01:00 น. (ขอ OT ในรีสอร์ต $24)',
        '🍕 Fabyan’s Station Restaurant: ล้างจาน/ผู้ช่วยครัว 17:30-22:30 น. ($15/ชม.)'
    ],

    # 20. MISSOURI (MO)
    [
        'Tier A', 'Missouri (MO)',
        'Silver Dollar City Theme Park & Showboat Branson Belle',
        'New Step, IEE, IEO',
        'Ride Operator / Attractions Host / Culinary',
        'ปกติ: 09:30 – 18:00 (8 ชม.)\nพีคซัมเมอร์: 09:00 – 21:30 (12 ชม.)',
        'ฐาน $14.50 / OT $21.75', '-', '44 – 50 ชม./wk', '$95',
        'สวนสนุกธีมยุคคาวบอย 1880s และเรือสำราญดินเนอร์โชว์ Branson, ค่าครองชีพถูกมาก',
        '🚢 Showboat Branson Belle (เรือสำราญ): Banquet Server/Busser 18:00-22:30 น. (ทิปสด $50-$90/รอบ)',
        '🥩 Guy Fieri’s Branson Kitchen: Food Runner/Busser 18:30-23:30 น. ($13/ชม. + ทิป)',
        '🥞 Billy Gail’s Cafe: ผู้ช่วยเตรียมวัตถุดิบ/ล้างจานรอบบ่าย-เย็น ($14.50/ชม.)'
    ],

    # 21. PENNSYLVANIA (PA)
    [
        'Tier A', 'Pennsylvania (PA)',
        'Hersheypark & Hershey Resorts (Hershey, PA)',
        'Higher, OEG, IEE, IEO, ALC',
        'Ride Operator / Food Service / Retail Associate',
        'ปกติ: 10:00 – 18:30 (8 ชม.)\nพีคซัมเมอร์: 09:30 – 22:30 (12 ชม.)',
        'ฐาน $15.00 / OT $22.50', '-', '44 – 50 ชม./wk', '$100',
        'สวนสนุกช็อกโกแลตเฮอร์ชีย์ระดับโลก, หอพักพนักงาน Hershey Housing พร้อมรถรับส่งฟรี, เข้าสวนสนุกฟรี',
        '🍫 The Chocolatier Restaurant (ในสวนสนุก): Food Runner/Busser 18:30-23:30 น. (ทิปสด $50-$90/คืน)',
        '🏨 The Hotel Hershey (โรงแรม 5 ดาว): Banquet Server/Steward กะค่ำ 18:00-23:30 น. (ขอ OT $22.50)',
        '🍕 Phillip Arthur’s Cafe & Pizzeria: ล้างจาน/ผู้ช่วยครัว 18:00-22:30 น. ($14.50/ชม.)'
    ],
    [
        'Tier A', 'Pennsylvania (PA)',
        'Dorney Park & Wildwater Kingdom (Allentown, PA)',
        'OEG, IEE, IEO',
        'Ride Operator / Lifeguard / Food & Beverage',
        'ปกติ: 10:00 – 18:30 (8 ชม.)\nพีคซัมเมอร์: 09:30 – 22:00 (11.5 ชม.)',
        'ฐาน $14.75 / OT $22.12', '-', '44 – 50 ชม./wk', '$95',
        'สวนสนุกและสวนน้ำเครือ Cedar Fair ใน Allentown ใกล้ฟิลาเดลเฟียและนิวยอร์ก, หอพักพนักงาน + รถบัส',
        '🥩 Lehigh Valley Local Steakhouses: Busser/Barback 18:30-23:30 น. ($13/ชม. + ทิปสด $60-$90/คืน)',
        '🍕 Vince’s Cheesesteaks & Pizza: ผู้ช่วยครัว/แพ็กอาหาร 18:00-23:00 น. ($15/ชม.)',
        '🛒 Target / Walmart Allentown: พนักงานจัดสต็อกสินค้ากะดึก 20:00-00:30 น. ($16.50/ชม.)'
    ],
    [
        'Tier A', 'Pennsylvania (PA)',
        'Kalahari Resorts & Conventions Pocono Manor (Poconos, PA)',
        'OEG, Acadex, Higher, ALC',
        'Lifeguard / Housekeeping / Food & Beverage',
        'ปกติ: 09:30 – 18:00 (8 ชม.)\nพีคซัมเมอร์: 09:00 – 20:00 (10.5 ชม.)',
        'ฐาน $15.50 / OT $23.25', '-', '42 – 48 ชม./wk', '$115',
        'สวนน้ำในร่มขนาดใหญ่ในเทือกเขา Poconos, เมืองตากอากาศซัมเมอร์ของคนนิวยอร์ก, หอพักพนักงานในรีสอร์ต',
        '🥩 Double Cut Steakhouse Pocono: Busser ร้านสเต๊กหรู 17:30-23:00 น. ($13/ชม. + ทิปสดเศรษฐี $70-$120)',
        '🍕 Sortino’s Italian Kitchen (ในรีสอร์ต): Food Runner/ล้างจาน 17:30-22:30 น. (ขอ OT $23.25/ชม.)',
        '🛒 Pocono Premium Outlets: จัดสต็อก/ปิดร้าน 18:00-21:30 น. ($15/ชม.)'
    ],

    # 22. MICHIGAN (MI)
    [
        'Tier A', 'Michigan (MI)',
        'Grand Hotel Mackinac Island (Historic Luxury Hotel)',
        'ALC, Acadex, Higher, IEO',
        'Housekeeping / Culinary / Dining Room Server Assistant',
        'ปกติ: 07:30 – 15:30 (8 ชม.)\nพีคซัมเมอร์: 07:00 – 17:00 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00', '$20 - $50', '46 – 52 ชม./wk', '$110 (รวมกิน)',
        'โรงแรมหรูประวัติศาสตร์ระดับโลกบนเกาะ Mackinac Island ไร้รถยนต์ (เดินทางด้วยจักรยานและม้า), อาหาร 3 มื้อฟรี',
        '🍽️ Main Dining Room Grand Hotel: Busser กะค่ำดินเนอร์หรู 18:00-22:30 น. (ขอ OT $24/ชม. + ทิป)',
        '🍦 Mackinac Island Fudge Shops: พนักงานกวนขนมฟัดจ์/แคชเชียร์ 18:00-22:30 น. ($15.50/ชม.)',
        '🐴 Carriage Tour Stable Maintenance: ช่วยล้างทำความสะอาดรถม้าและคอกม้า 17:00-21:00 น. ($16/ชม.)'
    ],
    [
        'Tier A', 'Michigan (MI)',
        'Mission Point Resort (Mackinac Island, MI)',
        'Acadex, Higher, IEO',
        'Housekeeping / F&B Attendant / Activities Host',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $15.50 / OT $23.25', '$15 - $35', '44 – 50 ชม./wk', '$110 (รวมกิน)',
        'รีสอร์ตริมทะเลสาบ Lake Huron บนเกาะ Mackinac Island, บรรยากาศธรรมชาติ ปั่นจักรยานเลียบเกาะ, อาหาร 3 มื้อ',
        '🥩 Chianti Restaurant (ในรีสอร์ต): Busser ร้าน Fine Dining 17:30-23:00 น. (ทิปสด $60-$100/คืน)',
        '🍔 Bistro on the Greens: Food Runner ร้านอาหารสนามมินิกอล์ฟ 17:00-22:00 น. (ขอ OT $23.25/ชม.)',
        '🚲 Island Bicycle Rental Base: ล้าง/ซ่อมบำรุงจักรยานเช่ารอบเย็น 17:00-21:00 น. ($15/ชม.)'
    ],

    # 23. NEW YORK (NY)
    [
        'Tier A', 'New York (NY)',
        'The Sagamore Resort (Lake George / Bolton Landing)',
        'Acadex, Higher, IEO, ALC',
        'Housekeeping / Culinary / Banquet Steward',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75', '$20 - $50', '44 – 50 ชม./wk', '$125',
        'รีสอร์ตหรูระดับ 4 เพชร AAA บนเกาะส่วนตัวในทะเลสาบ Lake George, เมืองตากอากาศเศรษฐีนิวยอร์ก',
        '🥩 La Bella Vita / Club Grill: Busser ร้านอาหารอิตาเลียนหรู 17:30-23:00 น. (ทิปสด $70-$120/คืน)',
        '🚢 The Morgan Boat Dining: Banquet Server บนเรือสำราญดินเนอร์ 18:00-22:30 น. (ทิปดี)',
        '🍕 Bolton Landing Local Pizzerias: ผู้ช่วยครัว/ล้างจาน 18:00-23:00 น. ($15.50/ชม.)'
    ],
    [
        'Tier A', 'New York (NY)',
        'Six Flags Great Escape & Splashwater Kingdom (Lake George)',
        'IEE, New Step, IEO, OEG',
        'Ride Operator / Lifeguard / Culinary Operations',
        'ปกติ: 10:00 – 18:30 (8 ชม.)\nพีคซัมเมอร์: 09:30 – 21:30 (11.5 ชม.)',
        'ฐาน $15.00 / OT $22.50', '-', '42 – 48 ชม./wk', '$110',
        'สวนสนุกและสวนน้ำยอดนิยมในเมือง Queensbury ใกล้ Lake George, หอพักพนักงาน + รถรับส่ง',
        '🏨 Great Escape Lodge & Indoor Waterpark: แม่บ้าน/บัสเซอร์กะค่ำ (ขอ OT ในเครือ $22.50/ชม.)',
        '🍔 Adirondack Pub & Brewery: Barback/Busser ร้านคราฟต์เบียร์ 18:30-23:30 น. (ทิปสด $50-$90/คืน)',
        '🍦 Martha’s Dandee Creme: พนักงานตักไอศกรีมชื่อดังคิวยาว 18:00-23:00 น. ($15.50/ชม.)'
    ],

    # 24. WASHINGTON (WA)
    [
        'Tier A', 'Washington (WA)',
        'Mount Rainier National Park Lodges (Paradise Inn)',
        'Higher, Acadex, IEE, ALC',
        'Housekeeping / Dining Room / Kitchen Steward',
        'ปกติ: 07:30 – 15:30 (8 ชม.)\nพีคซัมเมอร์: 07:00 – 17:00 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75', '$15 - $35', '45 – 50 ชม./wk', '$110 (รวมกิน)',
        'โรงแรมประวัติศาสตร์ท่ามกลางทุ่งดอกไม้ป่าและยอดเขาหิมะ Mount Rainier, อาหาร 3 มื้อฟรีใน EDR',
        '🥩 Paradise Inn Dining Room: Busser ร้านอาหารหรู 17:00-22:30 น. (ขอ OT $24.75/ชม. + ทิปสด)',
        '☕ Tatoosh Cafe (ในโรงแรม): แคชเชียร์/ชงกาแฟ 16:30-21:30 น. (ขอ OT $24.75/ชม.)',
        '🥾 National Park Visitor Center: จัดสต็อกของที่ระลึก 16:30-20:30 น. ($16.50/ชม.)'
    ],
    [
        'Tier A', 'Washington (WA)',
        'Olympic National Park Lodges (Lake Quinault / Kalaloch)',
        'OEG, Acadex, Higher, IEO',
        'Housekeeping / Front Desk / Food Service',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75', '$15 - $30', '44 – 50 ชม./wk', '$115 (รวมกิน)',
        'รีสอร์ตริมทะเลสาบและป่าฝนเขตอบอุ่น Olympic NP, ธรรมชาติอุดมสมบูรณ์, หอพักพร้อมอาหาร',
        '🦞 Roosevelt Dining Room: Busser ร้านอาหารริมทะเลสาบ 17:30-22:30 น. (ทิปสด $50-$90/คืน)',
        '🛶 Quinault Marina & Boat Rental: ช่วยยกเรือแคนู/ล้างเรือ 16:30-20:30 น. (ขอ OT $24.75)',
        '☕ Rain Forest Mercantile: แคชเชียร์ร้านของฝาก 17:00-21:30 น. ($16/ชม.)'
    ],

    # 25. ARIZONA (AZ)
    [
        'Tier A', 'Arizona (AZ)',
        'Grand Canyon National Park South Rim Lodges (Xanterra)',
        'OEG, IEE, Acadex, IEO, ALC',
        'Hospitality Crew / Housekeeping / Culinary',
        'ปกติ: 07:00 – 15:30 หรือ 15:00 – 23:30\nพีคซัมเมอร์: 06:30 – 16:30 (10 ชม.)',
        'ฐาน $15.50 / OT $23.25', '$15 - $35', '45 – 52 ชม./wk', '$110 (รวมกิน)',
        'สิ่งมหัศจรรย์ของโลก Grand Canyon South Rim, อาหาร 3 มื้อฟรีใน EDR, รถบัสฟรีทั่วขอบเหว',
        '🥩 El Tovar Dining Room (โรงแรมประวัติศาสตร์ริมผา): Busser 17:30-23:00 น. (ทิปสดมหาศาล $70-$130/คืน)',
        '🍺 Bright Angel Arizona Room: Food Runner/Steward 17:00-22:30 น. (ขอ OT $23.25/ชม.)',
        '🛍️ Yavapai General Store: แคชเชียร์/เติมของมินิมาร์ท 17:00-22:00 น. ($15.50/ชม.)'
    ],
    [
        'Tier A', 'Arizona (AZ)',
        'Grand Canyon National Park North Rim Lodge (Summer Only)',
        'Higher, Acadex, IEO',
        'Housekeeping / Dining Room / Kitchen',
        'ปกติ: 07:30 – 15:30 (8 ชม.)\nพีคซัมเมอร์: 07:00 – 17:00 (9.5 ชม.)',
        'ฐาน $15.50 / OT $23.25', '$20 - $40', '46 – 52 ชม./wk', '$105 (รวมกิน)',
        'เปิดเฉพาะซัมเมอร์ (พ.ค.-ต.ค.), อากาศเย็นสบายบนที่สูง 8,000 ฟุต, หอพัก+อาหาร 3 มื้อ EDR',
        '🥩 Grand Canyon North Rim Dining Room: Busser วิวขอบเหว 17:00-22:30 น. (ทิปสด $60-$100/คืน)',
        '☕ Deli in the Pines: ผู้ช่วยเตรียมแซนด์วิช/เครื่องดื่ม 16:30-21:30 น. (ขอ OT $23.25)',
        '🏕️ North Rim Campground Store: แคชเชียร์/มินิมาร์ท 17:00-21:00 น. ($15/ชม.)'
    ],

    # 26. NEVADA (NV)
    [
        'Tier A', 'Nevada (NV)',
        'Hyatt Regency Lake Tahoe Resort & Casino (Incline Village)',
        'Acadex, Higher, IEO, ALC',
        'Housekeeping / Culinary / Banquet Steward',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75', '$20 - $50', '44 – 50 ชม./wk', '$135',
        'รีสอร์ตหรู 4 ดาวริมหาด Lake Tahoe ฝั่งเนวาดา ปลอดภาษีเงินได้รัฐ 0%, หอพักพนักงาน Incline Village',
        '🥩 Lone Eagle Grille (ร้านหรูริมหาด): Busser ร้าน Fine Dining 17:30-23:00 น. (ทิปสด $80-$140/คืน)',
        '🌴 Pier 111 Bar (บาร์บนสะพานยื่นลงทะเลสาบ): Barback 17:00-22:30 น. (ทิปสดแน่นมาก)',
        '🎰 Casino Food & Beverage: Food Runner กะค่ำในคาสิโน 18:30-01:00 น. ($15/ชม. + ทิป)'
    ],

    # 27. CALIFORNIA (CA)
    [
        'Tier A', 'California (CA)',
        'Yosemite National Park Lodges (Aramark / Yosemite Hospitality)',
        'OEG, Acadex, Higher, IEO, ALC',
        'Housekeeping / Food Service / Retail Associate',
        'ปกติ: 07:30 – 15:30 หรือ 15:30 – 23:30\nพีคซัมเมอร์: 07:00 – 17:00 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75', '-', '45 – 52 ชม./wk', '$115 (รวมกิน)',
        'อุทยานระดับโลก Yosemite NP, หอพักพนักงานในหุบเขา Valley พร้อมอาหาร EDR, รถบัสฟรีทั่วอุทยาน',
        '🏨 The Ahwahnee Dining Room (โรงแรมหรูระดับตำนาน): Busser 17:30-23:00 น. (ทิปสดเศรษฐี $80-$150/คืน)',
        '🍕 Curry Village Pizza Deck: ล้างจาน/ทำพิซซ่าคนแน่น 17:30-23:30 น. (ขอ OT ในอุทยาน $24.75/ชม.)',
        '🌲 Yosemite Valley Village Store: แคชเชียร์/จัดของ 17:00-22:00 น. ($16.50/ชม.)'
    ],
    [
        'Tier A', 'California (CA)',
        'Tenaya Lodge at Yosemite (Fish Camp, CA)',
        'ALC, Acadex, Higher, IEO',
        'Housekeeping / Culinary / F&B Attendant',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75', '$15 - $35', '44 – 50 ชม./wk', '$125',
        'รีสอร์ตหรู 4 เพชร AAA หน้าปากทางเข้าทิศใต้ของ Yosemite NP, หอพักพนักงาน Fish Camp',
        '🥩 Embers / Jackalope’s Bar & Grill (ในรีสอร์ต): Busser/Barback 17:30-23:00 น. (ทิปสด $60-$110/คืน)',
        '🍕 Timberloft Pizzeria (ในรีสอร์ต): ผู้ช่วยทำพิซซ่า/ล้างจาน 17:00-22:30 น. (ขอ OT $24.75)',
        '🛒 South Gate General Store: แคชเชียร์รอบค่ำ 17:00-21:30 น. ($16/ชม.)'
    ],

    # 28. DELAWARE (DE)
    [
        'Tier A', 'Delaware (DE)',
        'Rehoboth Beach Boardwalk Hotels & Resorts',
        'Acadex, Higher, IEE, IEO, ALC',
        'Housekeeping / Front Desk / Boardwalk Staff',
        'ปกติ: 08:30 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 08:00 – 17:30 (9.5 ชม.)',
        'ฐาน $15.50 / OT $23.25', '$15 - $35', '44 – 50 ชม./wk', '$125',
        'เมืองตากอากาศชายหาดยอดนิยม ปลอดภาษีซื้อ 0% Tax-Free State, เมืองเดินเท้า/จักรยาน ปลอดภัยสูง',
        '🍕 Grotto Pizza (สาขา Boardwalk): ผู้ช่วยทำพิซซ่า/ล้างจาน 18:30-00:30 น. ($15/ชม. + ทิปสด)',
        '🎡 Funland Rehoboth Beach: คุมเครื่องเล่น/เกมงานวัดโบราณ 18:00-23:00 น. ($15.50/ชม.)',
        '🦀 The Crab House / Claws Seafood: Busser ร้านปูและซีฟู้ด 17:30-23:00 น. (ทิปสด $60-$100/คืน)'
    ],

    # 29. RHODE ISLAND (RI)
    [
        'Tier A', 'Rhode Island (RI)',
        'Block Island Historic Hotels & Inns (The National Hotel)',
        'Higher, Acadex, IEO',
        'Housekeeping / Banquet Server / Busser',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00', '$30 - $70', '44 – 50 ชม./wk', '$120',
        'เกาะตากอากาศ Block Island ธรรมชาติบริสุทธิ์ นักท่องเที่ยวไฮเอนด์นั่งเรือเฟอร์รีมาพักผ่อน',
        '🦞 The Oar Restaurant (ริมท่าเรือ): Busser/Runner ร้านอาหารริมน้ำยอดฮิต 17:30-23:30 น. (ทิปสด $70-$130/คืน)',
        '🍸 Spring House Hotel Bar: Barback/ล้างแก้วบาร์วิวทะเล 18:00-00:30 น. (ทิปสดดีมาก)',
        '🍦 Aldo’s Bakery & Ice Cream: แคชเชียร์/ตักไอศกรีม 18:00-22:30 น. ($15.50/ชม.)'
    ],

    # 30. OREGON (OR)
    [
        'Tier A', 'Oregon (OR)',
        'Crater Lake National Park Lodges (Crater Lake Hospitality)',
        'OEG, Acadex, Higher, IEO, ALC',
        'Housekeeping / Dining Room / Kitchen Steward',
        'ปกติ: 07:30 – 15:30 (8 ชม.)\nพีคซัมเมอร์: 07:00 – 17:00 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00', '$15 - $35', '45 – 50 ชม./wk', '$115 (รวมกิน)',
        'ทะเลสาบปล่องภูเขาไฟสีน้ำเงินครามลึกที่สุดในอเมริกา Crater Lake, ปลอดภาษีซื้อ 0% Sales Tax, อาหาร 3 มื้อ',
        '🥩 Crater Lake Lodge Dining Room: Busser ร้านอาหารหรูริมผา 17:00-22:30 น. (ทิปสด $60-$100/คืน)',
        '🍔 Annie Creek Restaurant (Mazama Village): ล้างจาน/ผู้ช่วยครัว 17:00-22:00 น. (ขอ OT $24/ชม.)',
        '🌲 Mazama Village Store & Camper Services: แคชเชียร์ 16:30-21:00 น. ($16/ชม.)'
    ],
    [
        'Tier A', 'Oregon (OR)',
        'Timberline Lodge & Mount Hood (Historic Mountain Lodge)',
        'Higher, Acadex, IEO',
        'Housekeeping / Culinary / Mountain Host',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75', '$15 - $35', '44 – 50 ชม./wk', '$120 (รวมกิน)',
        'โรงแรมปราสาทไม้ประวัติศาสตร์บนยอดเขา Mount Hood มีหิมะให้เล่นซัมเมอร์, ปลอดภาษีซื้อ 0% Sales Tax',
        '🥩 Cascade Dining Room: Busser ร้าน Fine Dining 17:30-23:00 น. (ขอ OT $24.75 + ทิปสด)',
        '🍺 Ram’s Head Bar: Barback/ล้างแก้วบาร์ชั้นลอย 18:00-00:00 น. (ทิปสด $50-$90/คืน)',
        '🍕 Government Camp Local Eateries: ผู้ช่วยครัว/ล้างจาน 18:00-22:30 น. ($15.50/ชม.)'
    ],

    # 31. VERMONT (VT)
    [
        'Tier A', 'Vermont (VT)',
        'Stowe Mountain Resort & Spruce Peak (Vail Resorts)',
        'OEG, Acadex, IEO, ALC',
        'Mountain Host / Housekeeping / Culinary',
        'ปกติ: 08:30 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 08:00 – 17:30 (9.5 ชม.)',
        'ฐาน $17.00 / OT $25.50', '-', '42 – 48 ชม./wk', '$135',
        'รีสอร์ตภูเขาหรูหราเมือง Stowe รัฐเวอร์มอนต์ ซัมเมอร์มีกิจกรรมซิปไลน์และเดินป่า, หอพักพนักงาน',
        '🥩 Solstice Restaurant (ใน The Lodge at Spruce Peak): Busser ร้านหรู 17:30-23:00 น. (ทิปสด $70-$120)',
        '🍺 The Matterhorn Bar & Grill: Barback/Busser ร้านอาหารริมลำธาร 18:30-00:30 น. (ทิปดี)',
        '🧀 Stowe Local Artisan Cafes: ผู้ช่วยครัว/เบเกอรี่ช่วงเช้าตรู่หรือเย็น ($16/ชม.)'
    ],
    [
        'Tier A', 'Vermont (VT)',
        'Trapp Family Lodge (Stowe, VT)',
        'Higher, Acadex, IEO',
        'Housekeeping / Bakery Assistant / Dining Room',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75', '$20 - $40', '42 – 48 ชม./wk', '$120 (รวมกิน)',
        'รีสอร์ตต้นกำเนิดครอบครัว The Sound of Music สไตล์ออสเตรียแท้ๆ, หอพักพร้อมอาหาร 3 มื้อ',
        '🍺 von Trapp Brewery & Bierhall: Busser/Runner โรงเบียร์สไตล์ออสเตรียคนแน่น 17:00-22:30 น. (ทิปสดดีมาก)',
        '🥨 Trapp Kaffeehaus: ช่วยอบเพรตเซล/เบเกอรี่ 16:30-21:30 น. (ขอ OT $24.75)',
        '🥩 Dining Room at Trapp Family Lodge: Busser 17:30-22:30 น. (ทิปสด $50-$90/คืน)'
    ]
]

# ==============================================================================
# 📊 SHEET 1: Top Employers (Summer Only - 11 Clean Columns)
# ==============================================================================
ws1 = wb.active
ws1.title = 'Top Employers (Summer Only)'
ws1.views.sheetView[0].showGridLines = True

headers1 = [
    'ระดับ Tier', 'รัฐ (State)', 'ชื่องาน / สถานที่ทำงาน Summer', 'Agency ที่ถือสัญญา',
    'ตำแหน่งงาน Summer', '⏱️ เวลาทำงานจริง ปกติ/พีค', 'ค่าแรงฐาน / OT', 'ทิป/wk',
    'ชม. ทำงานจริงเฉลี่ยซัมเมอร์', 'ค่าที่พัก ($/สัปดาห์)', 'สวัสดิการซัมเมอร์'
]

ws1.append(headers1)

for job in master_summer_jobs:
    # 11 columns overview
    row_11 = job[:11]
    ws1.append(row_11)

for col_num in range(1, len(headers1) + 1):
    cell = ws1.cell(row=1, column=col_num)
    cell.fill = header_fill
    cell.font = header_font
    cell.alignment = Alignment(horizontal='center', vertical='center', wrap_text=True)

for row_idx, row in enumerate(ws1.iter_rows(min_row=2, max_row=len(master_summer_jobs)+1, min_col=1, max_col=len(headers1)), start=2):
    tier_val = ws1.cell(row=row_idx, column=1).value
    for col_idx, cell in enumerate(row, start=1):
        cell.font = regular_font
        cell.border = thin_border
        if col_idx == 1:
            cell.alignment = Alignment(horizontal='center', vertical='center')
            cell.font = bold_font
            if 'Tier S' in str(tier_val):
                cell.fill = tier_s_fill
            elif 'Tier A' in str(tier_val):
                cell.fill = tier_a_fill
        elif col_idx in [2, 4, 8, 9, 10]:
            cell.alignment = Alignment(horizontal='center', vertical='center', wrap_text=True)
        elif col_idx in [6, 7]:
            cell.alignment = Alignment(horizontal='center', vertical='center', wrap_text=True)
        else:
            cell.alignment = Alignment(horizontal='left', vertical='center', wrap_text=True)

for col in ws1.columns:
    max_len = 0
    col_letter = get_column_letter(col[0].column)
    for cell in col:
        val_str = str(cell.value or '')
        length = len(val_str.encode('utf-8')) // 2 if any(ord(c) > 127 for c in val_str) else len(val_str)
        if length > max_len:
            max_len = length
    ws1.column_dimensions[col_letter].width = max(max_len + 4, 13)

ws1.freeze_panes = 'D2'


# ==============================================================================
# 📊 SHEET 2: Tier S-A Summer Jobs (14 Detailed Columns with 2nd Job Options)
# ==============================================================================
ws2 = wb.create_sheet(title='Tier S-A Summer Jobs')
ws2.views.sheetView[0].showGridLines = True

headers2 = [
    'ระดับ Tier', 'รัฐ (State)', 'ชื่องาน / สถานที่ทำงาน Summer', 'Agency ที่ถือสัญญา',
    'ตำแหน่งงาน Summer', '⏱️ เวลาทำงานจริง ปกติ/พีค', 'ค่าแรงฐาน / OT', 'ทิป/wk',
    'ชม. ทำงานจริงเฉลี่ยซัมเมอร์', 'ค่าที่พัก ($/สัปดาห์)', 'สวัสดิการซัมเมอร์',
    '💡 ตัวเลือกงานที่ 2 (กะค่ำ 1)', '💡 ตัวเลือกงานที่ 2 (กะค่ำ 2)', '💡 ตัวเลือกงานที่ 2 (กะค่ำ 3)'
]

ws2.append(headers2)

for job in master_summer_jobs:
    ws2.append(job)

for col_num in range(1, len(headers2) + 1):
    cell = ws2.cell(row=1, column=col_num)
    cell.fill = header_fill
    cell.font = header_font
    cell.alignment = Alignment(horizontal='center', vertical='center', wrap_text=True)

for row_idx, row in enumerate(ws2.iter_rows(min_row=2, max_row=len(master_summer_jobs)+1, min_col=1, max_col=len(headers2)), start=2):
    tier_val = ws2.cell(row=row_idx, column=1).value
    for col_idx, cell in enumerate(row, start=1):
        cell.font = regular_font
        cell.border = thin_border
        if col_idx == 1:
            cell.alignment = Alignment(horizontal='center', vertical='center')
            cell.font = bold_font
            if 'Tier S' in str(tier_val):
                cell.fill = tier_s_fill
            elif 'Tier A' in str(tier_val):
                cell.fill = tier_a_fill
        elif col_idx in [2, 4, 8, 9, 10]:
            cell.alignment = Alignment(horizontal='center', vertical='center', wrap_text=True)
        elif col_idx in [6, 7]:
            cell.alignment = Alignment(horizontal='center', vertical='center', wrap_text=True)
        else:
            cell.alignment = Alignment(horizontal='left', vertical='center', wrap_text=True)

for col in ws2.columns:
    max_len = 0
    col_letter = get_column_letter(col[0].column)
    for cell in col:
        val_str = str(cell.value or '')
        length = len(val_str.encode('utf-8')) // 2 if any(ord(c) > 127 for c in val_str) else len(val_str)
        if length > max_len:
            max_len = length
    ws2.column_dimensions[col_letter].width = max(max_len + 4, 13)

ws2.freeze_panes = 'D2'


# ==============================================================================
# 📊 SHEET 3: Agency Directory & Contacts (7 Thai Agencies)
# ==============================================================================
ws3 = wb.create_sheet(title='Summer Agency Directory')
ws3.views.sheetView[0].showGridLines = True

headers3 = [
    'ชื่อเอเจนซี่ (Agency)', 'ระดับ (Tier)', 'ค่าโครงการ Summer โดยประมาณ', 'สปอนเซอร์สหรัฐฯ',
    'งานเด่น Summer ใน Tier S & Tier A', 'เบอร์โทรศัพท์', 'LINE Official',
    'ที่ตั้งสำนักงาน (Office Address)', 'จุดเด่น & คำแนะนำสำหรับ Summer'
]

data3 = [
    ['OEG (Overseas Ed Group)', 'Tier S (Mass)', '106,900 - 111,900 ฿', 'CIEE (อันดับ 1 สหรัฐฯ), Spirit', 'Grand Teton (WY), Yellowstone (WY), Denali (AK), Kalahari (WI/PA/TX), Cedar Point (OH), Yosemite (CA), Schlitterbahn (TX)', '02-263-3666', '@oegworkandtravel', 'อาคารสินธร ทาวเวอร์ 1 ชั้น 7 ถ.วิทยุ กทม. & เชียงใหม่', 'สปอนเซอร์ CIEE มั่นคงที่สุดในอเมริกา ระบบติวสัมภาษณ์และดูแลมาตรฐานสูงสุดช่วง Summer'],
    ['Acadex Thailand', 'Tier S (Boutique)', '69,000 - 82,000 ฿', 'Intrax, CCUSA, CHI, IENA', 'Grand Teton (WY), Denali Princess & Bluffs (AK), Kalahari (WI), Dollywood (TN), Lifeguards (MD), Cape Cod (MA), Grand Hotel (MI)', '086-390-0333', '@AcadexThailand', 'อาคาร ซี.ซี.ที. (CCT Bldg) ชั้น 12A ถ.สุรวงศ์ บางรัก กทม.', 'พอร์ตงานอลาสกา ไวโอมิง และแคลิฟอร์เนียครบที่สุด มีทั้ง Princess และ Bluffs ค่าโครงการคุ้มค่า'],
    ['IEE Thailand', 'Tier S (Boutique)', '68,000 - 78,000 ฿', 'CCUSA, InterExchange, GeoVisions', 'Xanterra Yellowstone (WY), Mount Rushmore (SD), Chula Vista (WI), Gatlinburg (TN), Cedar Point (OH), Morey’s Piers (NJ), Grand Canyon (AZ)', '02-612-9511', '@IEEThailand', 'อาคารพญาไทพลาซ่า ชั้น 12 ถ.พญาไท ราชเทวี กทม.', 'ค่าโครงการย่อมเยา เครือข่ายสปอนเซอร์ CCUSA แน่นแฟ้นกับงานอุทยานและรีสอร์ตช่วง Summer'],
    ['IEO Abroad (I.E.O.)', 'Tier S (Boutique)', '68,000 - 79,000 ฿', 'CIEE, Intrax, InterExchange', 'Denali (AK), Yellowstone (WY), Kalahari (WI), Dollywood (TN), Morey’s Piers (NJ), Universal (FL), Lake George (NY), Yosemite (CA)', '061-426-2299', '@ieoworkandtravel', 'อาคาร K.A.N Place ซ.นราธิวาสราชนครินทร์ 8 สาทร กทม.', 'พอร์ตงานหลากหลาย มีงานสวนสนุกและรีสอร์ตทั้งฝั่งตะวันตกและตะวันออก'],
    ['Higher Education (Higher)', 'Tier S (Boutique)', '66,000 - 76,000 ฿', 'IENA, Spirit, Janus', 'Grand Teton (WY), Under Canvas (WY/MT), Mt. McKinley (AK), Custer State Park (SD), Estes Park (CO), Hersheypark (PA), Rehoboth (DE)', '02-054-9544', '@HigherEducation', 'อาคารจัตุรัสจามจุรี (Chamchuri Square) ชั้น 24 ปทุมวัน กทม.', 'ดูแลนักศึกษาใกล้ชิดเป็นกันเอง ตอบแชทเร็ว ค่าโครงการสบายกระเป๋า เชี่ยวชาญงานอุทยานและแกลมปิ้ง'],
    ['New Step Thailand', 'Tier S (Boutique)', '67,000 - 79,000 ฿', 'Intrax, CHI, AWA', 'Dollywood (TN), The Island (TN), Busch Gardens (VA/FL), Ocean City (MD), Six Flags (TX/NJ/MO), Morey’s Piers (NJ)', '063-535-9463', '@newstepworktravel', 'อาคาร SiamScape ชั้น 19 ห้อง 1910 สยามสแควร์ กทม.', 'เชี่ยวชาญงานสายสวนสนุกและงานชายฝั่งทะเล ออฟฟิศสยามเดินทางสะดวก'],
    ['American Learning (ALC)', 'Tier S (Boutique)', '69,000 - 81,000 ฿', 'Intrax, Spirit, CCUSA', 'Premier Aquatics Lifeguard (MD/VA), Great Wolf Lodge (PA), Grand Hotel Mackinac (MI), Tenaya Lodge Yosemite (CA), Grand Canyon (AZ)', '02-619-8800', '@americanlearning', 'อาคารพหลโยธินเพลส ชั้น 39 (BTS อารีย์ ทางออก 4) พญาไท กทม.', 'เด่นงาน Lifeguard การันตีชั่วโมง OT และงานรีสอร์ทระดับพรีเมียมในรัฐยอดฮิต']
]

ws3.append(headers3)
for row in data3:
    ws3.append(row)

for col_num in range(1, len(headers3) + 1):
    cell = ws3.cell(row=1, column=col_num)
    cell.fill = header_fill
    cell.font = header_font
    cell.alignment = Alignment(horizontal='center', vertical='center', wrap_text=True)

for row_idx, row in enumerate(ws3.iter_rows(min_row=2, max_row=len(data3)+1, min_col=1, max_col=len(headers3)), start=2):
    for col_idx, cell in enumerate(row, start=1):
        cell.font = regular_font
        cell.border = thin_border
        if col_idx in [2, 6, 7]:
            cell.alignment = Alignment(horizontal='center', vertical='center')
        else:
            cell.alignment = Alignment(horizontal='left', vertical='center')

for col in ws3.columns:
    max_len = 0
    col_letter = get_column_letter(col[0].column)
    for cell in col:
        val_str = str(cell.value or '')
        length = len(val_str.encode('utf-8')) // 2 if any(ord(c) > 127 for c in val_str) else len(val_str)
        if length > max_len:
            max_len = length
    ws3.column_dimensions[col_letter].width = max(max_len + 4, 15)

ws3.freeze_panes = 'B2'

# Save both files
for p in [excel_path, excel_clean_path]:
    try:
        wb.save(p)
        print('Successfully saved unified Master Excel to:', p)
    except PermissionError:
        print('Locked path:', p)
