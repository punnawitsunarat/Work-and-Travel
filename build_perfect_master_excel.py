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
zebra_fill = PatternFill(start_color='F8FAFC', end_color='F8FAFC', fill_type='solid')
thin_border = Border(
    left=Side(style='thin', color='CBD5E1'),
    right=Side(style='thin', color='CBD5E1'),
    top=Side(style='thin', color='CBD5E1'),
    bottom=Side(style='thin', color='CBD5E1')
)

# ==============================================================================
# 📊 SHEET 1: Top Employers Masterlist (11 คอลัมน์ แยก Tier และ State ชัดเจน)
# ==============================================================================
ws1 = wb.active
ws1.title = 'Top Employers Masterlist'
ws1.views.sheetView[0].showGridLines = True

headers1 = [
    'ระดับ Tier',
    'รัฐ (State)',
    'ชื่องาน / สถานที่ทำงาน (Employer)',
    'Agency ที่ถือสัญญา',
    'ตำแหน่ง (Position / Role)',
    '⏱️ เวลาทำงานจริง (ช่วงปกติ / ช่วงพีค)',
    'ค่าแรงฐาน / OT ($/ชม.)',
    'ทิป ($/สัปดาห์)',
    'ชั่วโมงทำงานจริง (คิดเผื่อหัว-ท้ายซีซัน)',
    'ค่าที่พัก ($/สัปดาห์)',
    'สวัสดิการ (อาหาร ฟรี หรือ อื่นๆ)'
]

rows1 = [
    [
        'Tier S',
        'Alaska (AK)',
        'Denali Princess Wilderness Lodge',
        'Acadex, OEG, IEE, Higher, IEO',
        'Housekeeping / Room Attendant',
        'ปกติ: 07:30 – 15:30 (8 ชม.)\nพีค: 07:00 – 17:30 (10 ชม. ควงกะ)',
        'ฐาน $16.00 / OT $24.00',
        '$15 - $30',
        '50 – 54 ชม./สัปดาห์ (พีค 58-62 ชม. / หัวท้าย 35-42 ชม.)',
        '$105',
        'อาหารบุฟเฟต์ 3 มื้อฟรีใน EDR ตักไม่อั้น 7 วัน, ทิปหัวเตียง, รถรับส่งพนักงาน, ส่วนลดทัวร์/รถไฟ 50%'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Denali Princess Wilderness Lodge',
        'Acadex, OEG, IEE, Higher, IEO',
        'Kitchen Stewarding / Dishwasher (ล้างจาน)',
        'ปกติ: 16:00 – 00:00 (8 ชม.)\nพีค: 15:00 – 01:30 (10.5 ชม.)',
        'ฐาน $16.00 / OT $24.00',
        '-',
        '50 – 55 ชม./สัปดาห์ (ควงกะค่ำได้ง่าย)',
        '$105',
        'อาหารบุฟเฟต์ 3 มื้อใน EDR + เชฟทำสเต๊ก/เบอร์เกอร์เลี้ยงในครัวฟรีทุกกะ'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Denali Princess Wilderness Lodge',
        'Acadex, OEG, IEE, Higher, IEO',
        'Luggage Handler (พนักงานยกกระเป๋าทัวร์)',
        'ปกติ: 08:00 – 16:30 หรือ 12:00 – 20:30\nพีค: 07:00 – 18:30 (ตามรอบรถไฟ)',
        'ฐาน $15.50 / OT $23.25',
        '$40 - $70',
        '46 – 52 ชม./สัปดาห์',
        '$105',
        'อาหารบุฟเฟต์ 3 มื้อฟรีใน EDR, ทิปเงินสดจากกรุ๊ปทัวร์ผู้สูงอายุ'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Denali Princess Wilderness Lodge',
        'ขอทำเพิ่มหน้างาน (Internal 2nd Job)',
        'Fleet Detailer (งานเสริมล้างรถทัวร์กะดึก)',
        'ปกติ: 21:00 – 01:30 (4.5 ชม.)\nพีค: 21:00 – 02:30 (5.5 ชม.)',
        'คิดเรต OT $24.00/ชม. ทันที',
        '-',
        '20 – 25 ชม./สัปดาห์ (ทำควบหลังงานหลักแม่บ้าน)',
        '-',
        'นับเป็นชั่วโมง OT $24.00 ทั้งหมด, ทำงานในอู่รถบัส Princess, อาหาร EDR 3 มื้อ'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Denali Bluffs Hotel',
        'Acadex Thailand, IEO',
        'Housekeeping / Laundry',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีค: 08:00 – 17:00 (9 ชม.)',
        'ฐาน $15.00 / OT $22.50',
        '-',
        '40 – 45 ชม./สัปดาห์ (หัวท้าย 32-38 ชม.)',
        '$140',
        'โบนัสพิเศษ +$1.00/ชม. ท้ายทริป (ครบสัญญา), รถชัตเติลบัสขึ้น-ลงเขา Sugarloaf, ส่วนลดอาหารร้าน The Perk'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Grande Denali Lodge',
        'Acadex Thailand, IEO',
        'Housekeeping / Public Area Cleaner',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีค: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $15.50 / OT $23.25',
        '-',
        '42 – 46 ชม./สัปดาห์ (หัวท้าย 35-40 ชม.)',
        '$140',
        'โบนัสพิเศษ +$1.00/ชม. ท้ายทริป (ครบสัญญา), โรงแรมหรู 4 ดาว, รถชัตเติลบัส, ส่วนลดอาหารห้องอาหาร Alpenglow'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Grande Denali Lodge',
        'Acadex Thailand, IEO',
        'Busser / Food Runner (Alpenglow Restaurant)',
        'ปกติ: 16:30 – 22:30 (6 ชม.)\nพีค: 16:00 – 23:30 (7.5 ชม.)',
        'ฐาน $14.00 / OT $21.00',
        '$200 - $350',
        '40 – 45 ชม./สัปดาห์',
        '$140',
        'โบนัสพิเศษ +$1.00/ชม. ท้ายทริป, ทิปเงินสดจากแขกไฮเอนด์ร้านอาหารวิวพาโนรามา ($40-$70/คืน)'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Mt. McKinley Princess Lodge',
        'Higher, OEG, Acadex, IEO',
        'Housekeeping / Kitchen / Laundry',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีค: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00',
        '$10 - $20',
        '44 – 48 ชม./สัปดาห์ (หัวท้าย 35-40 ชม.)',
        '$105',
        'อาหารบุฟเฟต์ 3 มื้อฟรีใน EDR, รถรับส่งพนักงาน, ชมวิวยอดเขาเดนาลี บรรยากาศสงบ'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Fairbanks Princess Riverside Lodge',
        'IEE, Acadex, Higher, IEO',
        'Food Runner / Laundry / Steward',
        'ปกติ: 06:30 – 14:30 หรือ 15:00 – 23:00\nพีค: กะสลับตามรอบรถไฟ 8 ชม.',
        'ฐาน $15.50 / OT $23.25',
        '$20 - $40',
        '36 – 40 ชม./สัปดาห์ (ไม่ค่อยมี OT)',
        '$105',
        'หอพักในเมืองแฟร์แบงก์ส + รถชัตเติลบัส, ใกล้ Walmart และร้านอาหารไทย หางาน 2 ง่าย'
    ],
    [
        'Tier S',
        'Wyoming (WY)',
        'Grand Teton Lodge Company (GTLC)',
        'Acadex, Higher, OEG, IEE, IEO',
        'Housekeeping / Crew Member',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีค: 07:00 – 17:30 (10 ชม. ควงกะ)',
        'ฐาน $17.75 / OT $26.62',
        '-',
        '54 – 60 ชม./สัปดาห์ (พีค 60-64 ชม. / หัวท้าย 40 ชม.)',
        '$0',
        'หอพักฟรี 100%! + อาหารบุฟเฟต์ 3 มื้อ EDR ($105/wk), ส่วนลดซื้อของ 40%, เข้าอุทยาน Grand Teton & Yellowstone ฟรี'
    ],
    [
        'Tier S',
        'Wyoming (WY)',
        'Grand Teton Lodge Company (GTLC)',
        'Acadex, Higher, OEG, IEE, IEO',
        'Kitchen Crew / Dishwasher / Food Prep',
        'ปกติ: 06:00 – 14:30 หรือ 15:00 – 23:00\nพีค: 14:00 – 00:30 (ช่วย Banquet)',
        'ฐาน $17.75 / OT $26.62',
        '-',
        '52 – 58 ชม./สัปดาห์ (ควงกะ Banquet ได้)',
        '$0',
        'หอพักฟรี 100%! + อาหาร 3 มื้อ EDR + กินฟรีในครัว, สิทธิประโยชน์เครือ Vail Resorts'
    ],
    [
        'Tier S',
        'Wyoming (WY)',
        'Xanterra Yellowstone Lodges',
        'OEG, IEE Thailand, IEO',
        'Hospitality Crew / Kitchen / Steward',
        'ปกติ: 07:00 – 15:30 หรือ 15:00 – 23:30\nพีค: 06:30 – 16:30 (10 ชม.)',
        'ฐาน $15.70 / OT $23.55',
        '-',
        '46 – 52 ชม./สัปดาห์ (หัวท้าย 38-42 ชม.)',
        '$120',
        'รวมหอพัก + อาหารบุฟเฟต์ 3 มื้อ EDR, หอพักใหม่ Arnica, เที่ยวบ่อน้ำพุร้อนและไกเซอร์ Yellowstone ฟรี'
    ],
    [
        'Tier S',
        'Wyoming (WY)',
        'Under Canvas Grand Teton / Yellowstone',
        'Higher Education, IEO',
        'Housekeeping / Guest Service',
        'ปกติ: 08:30 – 16:30 (8 ชม.)\nพีค: 08:00 – 17:30 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75',
        '$50 - $100',
        '42 – 46 ชม./สัปดาห์',
        '$100',
        'แคมป์กระโจมซาฟารีหรู, อาหารพนักงาน, ทิปเงินสดจากแขกไฮเอนด์ บรรยากาศเป็นกันเอง'
    ],
    [
        'Tier S',
        'Wisconsin (WI)',
        'Kalahari Resorts & Conventions',
        'OEG, Acadex, Higher, IEO, New Step',
        'Lifeguard / Housekeeping (งานหลัก)',
        'ปกติ: 09:30 – 18:00 หรือ 12:00 – 20:30\nพีค: 09:00 – 19:30 (10 ชม.)',
        'ฐาน $15.00 / OT $22.50',
        '-',
        '38 – 44 ชม./สัปดาห์ (เกลี่ยกะ 40 ชม.)',
        '$105',
        'หอพัก Kalahari Village, บัตรเล่นสวนน้ำฟรี, เมืองปั่นจักรยาน 100%, หางาน 2 ร้านอาหารง่าย'
    ],
    [
        'Tier S',
        'Wisconsin (WI)',
        'Wisconsin Dells Riverfront Eateries',
        'Walk-in สมัครเองหน้างาน',
        'Barback / Busser / Runner (งานที่สอง)',
        'ปกติ: 17:30 – 22:30 (5 ชม.)\nพีค: 17:00 – 00:30 (7.5 ชม.)',
        'ฐาน $12.00 – $14.00',
        '$250 - $500',
        '20 – 25 ชม./สัปดาห์ (กะค่ำ 17:30-23:00)',
        '-',
        'รับทิปเงินสดทุกคืน ยัดกระเป๋ากลับห้องทันที ($50-$100/คืน), อาหารพนักงานในกะ (ทำควบกับงานหลัก)'
    ],
    [
        'Tier S',
        'Tennessee (TN)',
        'Dollywood Theme Park & Resorts',
        'New Step, Acadex, IEO',
        'Ride Operator / Food Service / Retail',
        'ปกติ: 09:30 – 18:00 (8 ชม.)\nพีค: 09:00 – 21:30 (12 ชม. สวนสนุกเปิดดึก)',
        'ฐาน $15.00 / OT $22.50',
        '-',
        '44 – 50 ชม./สัปดาห์ (หัวท้าย 35-40 ชม.)',
        '$110',
        'ปลอดภาษีเงินได้รัฐ 0%, นั่งรถราง Pigeon Forge Trolley $1-$2.50/วัน, บัตรเข้าสวนสนุก Dollywood & Splash Country ฟรี'
    ],
    [
        'Tier S',
        'Maryland (MD)',
        'Premier Aquatics / High Sierra Pools',
        'Acadex, New Step, ALC, IEO',
        'Pool Lifeguard',
        'ปกติ: 10:30 – 19:30 (9 ชม.)\nพีค: 10:00 – 20:30 (10.5 ชม. สระเปิดยาว)',
        'ฐาน $16.00 / OT $24.00',
        '-',
        '50 – 54 ชม./สัปดาห์ (การันตี OT 10-14 ชม.)',
        '$120',
        'การันตีชั่วโมง OT สม่ำเสมอ 10-14 ชม./สัปดาห์ ไม่ผันผวนตามนักท่องเที่ยว, อพาร์ตเมนต์แชร์กับเพื่อน'
    ],
    [
        'Tier S',
        'Ohio (OH)',
        'Cedar Point Amusement Park',
        'OEG, IEE Thailand, IEO',
        'Ride Operator / Food Service',
        'ปกติ: 10:00 – 18:30 (8 ชม.)\nพีค: 09:30 – 22:30 (12 ชม. สวนสนุกปิดดึก)',
        'ฐาน $14.50 / OT $21.75',
        '-',
        '46 – 52 ชม./สัปดาห์ (หัวท้าย 38-42 ชม.)',
        '$80',
        'หอพักราคาถูกมาก ($80/wk), รถบัสรับส่งฟรี, บัตรเล่นเครื่องเล่นสวนสนุกระดับโลกฟรี'
    ]
]

ws1.append(headers1)
for r in rows1:
    ws1.append(r)

for col_idx in range(1, len(headers1) + 1):
    cell = ws1.cell(row=1, column=col_idx)
    cell.fill = header_fill
    cell.font = header_font
    cell.alignment = Alignment(horizontal='center', vertical='center', wrap_text=True)

for row_idx, row in enumerate(ws1.iter_rows(min_row=2, max_row=len(rows1)+1, min_col=1, max_col=len(headers1)), start=2):
    tier_text = str(row[0].value or '')
    row_fill = tier_s_fill if 'Tier S' in tier_text else tier_a_fill
    fill = row_fill if row_idx % 2 == 0 else PatternFill(fill_type=None)
    for col_idx, cell in enumerate(row, start=1):
        cell.font = regular_font
        cell.border = thin_border
        if fill.fill_type:
            cell.fill = fill
        if col_idx in [1, 2, 7, 8, 10]:
            cell.alignment = Alignment(horizontal='center', vertical='center')
        elif col_idx == 6:
            cell.alignment = Alignment(horizontal='left', vertical='center', wrap_text=True)
        else:
            cell.alignment = Alignment(horizontal='left', vertical='center')

for col in ws1.columns:
    max_len = 0
    col_letter = get_column_letter(col[0].column)
    for cell in col:
        val_str = str(cell.value or '')
        lines = val_str.split('\n')
        for l in lines:
            length = len(l.encode('utf-8')) // 2 if any(ord(c) > 127 for c in l) else len(l)
            if length > max_len:
                max_len = length
    ws1.column_dimensions[col_letter].width = min(max(max_len + 4, 12), 45)

ws1.freeze_panes = 'D2'


# ==============================================================================
# 📊 SHEET 2: Tier S-A Jobs & 2nd Options (14 คอลัมน์ แยก Tier และ State ชัดเจน 100% ตรงตาม data.js)
# ==============================================================================
ws2 = wb.create_sheet(title='Tier S-A Jobs & 2nd Options')
ws2.views.sheetView[0].showGridLines = True

headers2 = [
    'ระดับ Tier (ตามเว็บ)',
    'รัฐ (State)',
    'ชื่องาน / สถานที่ทำงานหลัก (Employer)',
    'Agency ที่ถือสัญญา',
    'ตำแหน่งงานหลัก (Role)',
    '⏱️ เวลาทำงานหลัก (ปกติ / พีค)',
    'ค่าแรงฐาน / OT ($/ชม.)',
    'ทิป ($/สัปดาห์)',
    'ชั่วโมงงานหลัก (ชม./wk)',
    'ค่าที่พัก ($/สัปดาห์)',
    'สวัสดิการ (อาหาร ฟรี หรือ อื่นๆ)',
    '🔥 งานที่สองที่ทำต่อได้จริง (ตัวเลือกที่ 1)',
    '🔥 งานที่สองที่ทำต่อได้จริง (ตัวเลือกที่ 2)',
    '🔥 งานที่สองที่ทำต่อได้จริง (ตัวเลือกที่ 3)'
]

rows2 = [
    # -------------------------------------------------------------------------
    # 🌟 TIER S STATES (12 รัฐตาม data.js ในเว็บ)
    # -------------------------------------------------------------------------
    # 1. ALASKA (AK) - Tier S
    [
        'Tier S',
        'Alaska (AK)',
        'Denali Princess Wilderness Lodge (Denali NP)',
        'Acadex, OEG, IEE, Higher, IEO',
        'Housekeeping / Room Attendant',
        'ปกติ: 07:30 – 15:30 (8 ชม.)\nพีค: 07:00 – 17:30 (10 ชม. ควงกะ)',
        'ฐาน $16.00 / OT $24.00',
        '$15 - $30',
        '50 – 54 ชม./wk',
        '$105',
        'อาหารบุฟเฟต์ 3 มื้อฟรีใน EDR ตักไม่อั้น 7 วัน, ทิปหัวเตียง, รถรับส่งพนักงาน, ส่วนลดทัวร์ 50%',
        '🚌 Fleet Detailer (ในโรงแรม): ล้างรถทัวร์กะดึก 21:00-01:30 น. ได้เรต OT $24.00/ชม. ทันที (ไม่ต้องขอสปอนเซอร์)',
        '🍕 Prospectors Pizzeria: เดิน 10 นาที ล้างจาน/Barback 18:30-00:30 น. ($15/ชม. + ทิปสด $40-$70/คืน)',
        '🍽️ Fannie Q’s Saloon (ในโรงแรม): ช่วยจัดเลี้ยง/Runner 17:00-22:00 น. ได้เรต OT $24/ชม. + ทิป'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Denali Princess Wilderness Lodge (Denali NP)',
        'Acadex, OEG, IEE, Higher, IEO',
        'Kitchen Stewarding / Dishwasher',
        'ปกติ: 16:00 – 00:00 (8 ชม.)\nพีค: 15:00 – 01:30 (10.5 ชม.)',
        'ฐาน $16.00 / OT $24.00',
        '-',
        '50 – 55 ชม./wk',
        '$105',
        'อาหารบุฟเฟต์ 3 มื้อใน EDR + เชฟทำสเต๊ก/เบอร์เกอร์เลี้ยงในครัวฟรีทุกกะ',
        '🧹 เช้าช่วยแม่บ้าน (Housekeeping): 08:30-14:30 น. ขอกะเช้าเพิ่มในโรงแรม ได้เรต OT $24/ชม.',
        '🧳 Luggage Handler: ช่วยยกกระเป๋ารอบรถไฟเช้า 08:00-12:00 น. ได้ทิปสดจากทัวร์',
        '🛍️ Denali Boardwalk Gift Shops: แคชเชียร์/จัดของกะสาย 09:00-14:00 น. ($15/ชม.)'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Grande Denali Lodge & Denali Bluffs Hotel',
        'Acadex Thailand, IEO',
        'Housekeeping / Public Area',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีค: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $15.50 / OT $23.25',
        '-',
        '42 – 46 ชม./wk',
        '$140',
        'โบนัส +$1.00/ชม. ท้ายทริป, โรงแรมหรู 4 ดาวบนยอดเขา, รถชัตเติลบัส, ส่วนลดอาหาร',
        '🍷 Alpenglow Restaurant (ในโรงแรม): Busser 17:00-23:00 น. ($14/ชม. + ทิปสดเศรษฐี $50-$80/คืน)',
        '🥪 Subway Denali / The Black Bear: นั่งชัตเติลลงเขาไปทำกะเย็น 17:00-22:00 น. ($15/ชม.)',
        '🍽️ Denali Princess Kitchens: เดินลงเขา 15 นาที ล้างจานกะค่ำ 18:00-00:00 น. ($16/ชม.)'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Seward Windsong Lodge & Kenai Fjords Tours (Pursuit)',
        'OEG, Acadex, ALC, IEO',
        'Housekeeping / Tour Operations / F&B',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีค: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00',
        '$20 - $50',
        '44 – 50 ชม./wk',
        '$120',
        'เมืองตากอากาศชายทะเล Seward ท่าเรือล่องเรือชมวาฬและธารน้ำแข็ง, หอพักพนักงาน, ล่องเรือฟรี',
        '🦀 Ray’s Waterfront (ริมท่าเรือ Seward): Busser/Steward ร้านซีฟู้ดดัง 17:30-23:00 น. ($14/ชม. + ทิปสด $60-$100)',
        '🍺 Seward Brewing Company: Barback/Dishwasher กะค่ำ 18:00-00:00 น. ($15/ชม. + ทิป)',
        '🛥️ Kenai Fjords Boat Cleaning: ล้างทำความสะอาดเรือทัวร์รอบเย็น 18:00-21:30 น. ($16.50/ชม.)'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Talkeetna Alaskan Lodge (Pursuit Collection)',
        'OEG, Acadex, Higher, IEO',
        'Housekeeping / Kitchen / Steward',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีค: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00',
        '$15 - $30',
        '44 – 50 ชม./wk',
        '$115',
        'โรงแรมหรูชมวิวยอดเขา Denali ในเมืองคาวบอย Talkeetna, หอพักพนักงาน + รถรับส่ง',
        '🥩 Foraker Dining Room (ในโรงแรม): Busser ร้านอาหาร Fine Dining 17:30-23:00 น. (ทิปสด $50-$90/คืน)',
        '🍕 Mountain High Pizza Pie: ผู้ช่วยทำพิซซ่า/ล้างจาน 18:00-23:30 น. ($15/ชม. + ทิป)',
        '🍺 Denali Brewing Company (Talkeetna Pub): Barback กะค่ำ 18:30-00:30 น. ($14/ชม. + ทิปสด)'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Alyeska Resort & Hotel Alyeska (Girdwood)',
        'OEG, Higher, Acadex',
        'Housekeeping / Culinary / Lift Ops',
        'ปกติ: 08:30 – 16:30 (8 ชม.)\nพีค: 08:00 – 17:30 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75',
        '-',
        '42 – 48 ชม./wk',
        '$135',
        'รีสอร์ตหรูระดับโลก นั่งกระเช้าชมวิวภูเขาและธารน้ำแข็ง, หอพักพนักงาน Glacier Valley',
        '🥩 Seven Glaciers Restaurant (บนยอดเขา): Busser 17:30-23:00 น. (ร้าน 4 ดาว AAA ทิปมหาศาล $70-$120)',
        '🍕 Coast Pizza / Girdwood Brewing: ผู้ช่วยครัว/Barback 18:00-23:00 น. ($15/ชม. + ทิป)',
        '🥖 The Bake Shop Girdwood: ช่วยเตรียมเบเกอรี่/ล้างจานช่วงเช้าตรู่หรือเย็น'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Mt. McKinley Princess Lodge (Trapper Creek)',
        'Higher, OEG, Acadex, IEO',
        'Housekeeping / Kitchen',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีค: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00',
        '$10 - $20',
        '44 – 48 ชม./wk',
        '$105',
        'อาหารบุฟเฟต์ 3 มื้อฟรีใน EDR, รถรับส่ง, ชมวิวยอดเขาเดนาลี บรรยากาศสงบ',
        '🥩 20,320 Alaskan Grill (ในโรงแรม): Busser/Steward กะค่ำ 17:30-22:30 น. (เรต OT $24/ชม. + ทิป)',
        '🍕 Northland Wood Fired Pizza (ในโรงแรม): ผู้ช่วยทำพิซซ่า/ครัว 16:30-21:30 น. (เรต OT $24/ชม.)',
        '🥐 Talkeetna Roadhouse: นั่งรถตู้พนักงานเข้าเมือง Talkeetna ช่วยล้างจาน/ทำขนมวันหยุด'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Fairbanks Princess Riverside Lodge',
        'IEE, Acadex, Higher, IEO',
        'Food Runner / Laundry / Steward',
        'ปกติ: 06:30 – 14:30 หรือ 15:00 – 23:00\nพีค: กะสลับตามรอบรถไฟ 8 ชม.',
        'ฐาน $15.50 / OT $23.25',
        '$20 - $40',
        '36 – 40 ชม./wk',
        '$105',
        'หอพักในเมืองแฟร์แบงก์ส + รถชัตเติลบัส, ใกล้ Walmart และร้านอาหารไทย หางาน 2 ง่าย',
        '🛒 Walmart Supercenter Fairbanks: จัดสต็อกสินค้า/แคชเชียร์ 16:30-22:30 น. ($16-$17/ชม. มีรถเมล์ผ่าน)',
        '🍜 Pad Thai Restaurant / Thai House: ผู้ช่วยครัว/เสิร์ฟ 17:00-22:30 น. (ทิปสด + กินอาหารไทยฟรี)',
        '🍺 The Pump House Restaurant: Busser/Dishwasher ร้านอาหารริมน้ำดัง 17:30-23:00 น. ($15/ชม. + ทิป)'
    ],

    # 2. WYOMING (WY) - Tier S
    [
        'Tier S',
        'Wyoming (WY)',
        'Grand Teton Lodge Company - Jackson Lake Lodge',
        'Acadex, Higher, OEG, IEE, IEO',
        'Housekeeping / Crew Member',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีค: 07:00 – 17:30 (10 ชม. ควงกะ)',
        'ฐาน $17.75 / OT $26.62',
        '-',
        '54 – 60 ชม./wk',
        '$0 (ฟรี!)',
        'หอพักฟรี 100%! + อาหารบุฟเฟต์ 3 มื้อ EDR ($105/wk), ส่วนลด 40%, บัตรผ่าน 2 อุทยานฟรี',
        '🍽️ Mural Room & Pioneer Grill (ในโรงแรม): Busser 17:30-22:30 น. ได้เรต OT $26.62/ชม. + ทิป',
        '🍸 Blue Heron Lounge (ในโรงแรม): Barback ช่วยยกน้ำแข็ง/ล้างแก้ว 18:00-23:30 น. (เรต OT $26.62 + Tip-Out)',
        '🛶 Colter Bay Chuckwagon & Marina: นั่งชัตเติลฟรีไปช่วยมินิมาร์ท/เรือแคนู 17:00-21:30 น.'
    ],
    [
        'Tier S',
        'Wyoming (WY)',
        'Grand Teton Lodge Company - Colter Bay Village',
        'Acadex, Higher, OEG, IEE, IEO',
        'Cabin Attendant / Grocery Clerk / Marina',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีค: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $17.75 / OT $26.62',
        '-',
        '52 – 58 ชม./wk',
        '$0 (ฟรี!)',
        'หอพักฟรี 100%! + อาหารบุฟเฟต์ 3 มื้อ EDR ($105/wk), หมู่บ้านริมทะเลสาบ Jackson Lake',
        '🥩 Chuckwagon Restaurant (ในหมู่บ้าน): Busser/Steward บุฟเฟต์มื้อเย็น 17:00-22:00 น. (เรต OT $26.62)',
        '🛒 Colter Bay General Store: แคชเชียร์/เติมสต็อกมินิมาร์ท 17:30-22:00 น. (เรต OT $26.62)',
        '🛶 Colter Bay Marina: ล้างเรือยนต์/เรือแคนู 16:30-20:30 น. (เรต OT $26.62)'
    ],
    [
        'Tier S',
        'Wyoming (WY)',
        'Signal Mountain Lodge (Grand Teton NP - Forever Resorts)',
        'Higher, Acadex, IEO',
        'Housekeeping / Front Desk / Marina',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีค: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75',
        '$15 - $30',
        '45 – 50 ชม./wk',
        '$110 (รวมกิน)',
        'รีสอร์ตริมทะเลสาบ Signal Mountain, หอพักพนักงาน + อาหาร 3 มื้อ, ส่วนลดเช่าเรือ',
        '🥩 The Peaks Restaurant (ในรีสอร์ต): Busser/Runner 17:30-22:30 น. ($14/ชม. + ทิปสด $50-$90/คืน)',
        '🌮 Trapper Grill (ในรีสอร์ต): ผู้ช่วยครัว/ทำนาโชส์ 17:00-22:00 น. (ขอ OT $24.75/ชม.)',
        '⛽ Signal Mountain Gas Station & Store: แคชเชียร์รอบค่ำ 17:00-21:30 น.'
    ],
    [
        'Tier S',
        'Wyoming (WY)',
        'Xanterra Yellowstone Lodges (Old Faithful / Canyon)',
        'OEG, IEE Thailand, IEO',
        'Hospitality Crew / Kitchen Steward',
        'ปกติ: 07:00 – 15:30 หรือ 15:00 – 23:30\nพีค: 06:30 – 16:30 (10 ชม.)',
        'ฐาน $15.70 / OT $23.55',
        '-',
        '46 – 52 ชม./wk',
        '$120 (รวมกิน)',
        'รวมหอพัก + อาหารบุฟเฟต์ 3 มื้อ EDR, หอพักใหม่ Arnica, เที่ยวบ่อน้ำพุร้อน Yellowstone ฟรี',
        '🌋 Old Faithful Snow Lodge Dining: Busser/Steward กะค่ำ 17:00-22:30 น. (เรต OT $23.55/ชม. + ทิป)',
        '🛍️ Delaware North General Stores: แคชเชียร์ร้านของฝากข้างๆ เดิน 3 นาที 17:00-21:30 น. ($15.50/ชม.)',
        '🍻 Employee Pub & Rec Hall: ผู้ช่วยผับพนักงาน/ทำความสะอาด 19:30-23:30 น.'
    ],
    [
        'Tier S',
        'Wyoming (WY)',
        'Four Seasons Resort & Snake River Lodge (Teton Village)',
        'OEG, Acadex, IEO',
        'Housekeeping / Stewarding',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีค: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $17.50 / OT $26.25',
        '-',
        '45 – 50 ชม./wk',
        '$140',
        'รีสอร์ตหรู 5 ดาวใน Teton Village, หอพักพนักงาน, นั่งรถบัส START Bus ฟรี',
        '🍺 The Mangy Moose Saloon (Teton Village): Barback/Busser ผับดัง 18:00-00:30 น. (ทิปสดเศรษฐี $60-$120/คืน)',
        '🤠 Million Dollar Cowboy Bar (เมือง Jackson): นั่ง START Bus เข้าเมือง ทำ Barback 19:00-01:30 น.',
        '🍕 Alpenhof Bistro: ล้างจาน/ผู้ช่วยครัว 17:30-22:30 น. ($16/ชม. + อาหารฟรี)'
    ],
    [
        'Tier S',
        'Wyoming (WY)',
        'The Wort Hotel & Silver Dollar Bar (Jackson Town)',
        'Acadex, OEG, IEO',
        'Housekeeping / Banquet Server / Steward',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีค: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $17.00 / OT $25.50',
        '$30 - $60',
        '44 – 50 ชม./wk',
        '$150',
        'โรงแรมประวัติศาสตร์ใจกลางเมือง Jackson, เดินทางสะดวกที่สุด มีร้านค้าล้อมรอบ',
        '💵 Silver Dollar Bar (ในโรงแรม): Barback/Busser บาร์ดนตรีสดคนแน่น 18:30-01:00 น. (ทิปสด $70-$130/คืน)',
        '🥩 Gun Barrel Steak & Game House: Busser ร้านสเต๊กเนื้อสัตว์ป่า 17:30-22:30 น. ($14/ชม. + ทิป)',
        '🛒 Albertsons Jackson: จัดสต็อกสินค้ากะดึก 20:00-00:00 น. ($18/ชม.)'
    ],
    [
        'Tier S',
        'Wyoming (WY)',
        'Under Canvas Grand Teton / Yellowstone',
        'Higher Education, IEO',
        'Housekeeping / Guest Service',
        'ปกติ: 08:30 – 16:30 (8 ชม.)\nพีค: 08:00 – 17:30 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75',
        '$50 - $100',
        '42 – 46 ชม./wk',
        '$100',
        'แคมป์กระโจมซาฟารีหรู, อาหารพนักงาน, ทิปเงินสดจากแขกไฮเอนด์ บรรยากาศเป็นกันเอง',
        '🏕️ Embers Restaurant (ในแกลมปิ้ง): Food Runner กะค่ำ 17:30-22:00 น. (ได้ทิปสดคืนละ $40-$60)',
        '☕ Moose-Wilson Road Cafes: ผู้ช่วยบาริสต้า/เบเกอรี่ช่วงเช้าตรู่ 06:00-08:00 น. หรือเย็น',
        '🛒 Jackson Town Local Diners: นั่งรถเข้าเมืองแจ็กสัน ทำงานร้านอาหารวันหยุด'
    ],

    # 3. WISCONSIN (WI) - Tier S
    [
        'Tier S',
        'Wisconsin (WI)',
        'Kalahari Resorts & Conventions (Wisconsin Dells)',
        'OEG, Acadex, Higher, IEO, New Step',
        'Lifeguard / Housekeeping',
        'ปกติ: 09:30 – 18:00 หรือ 12:00 – 20:30\nพีค: 09:00 – 19:30 (10 ชม.)',
        'ฐาน $15.00 / OT $22.50',
        '-',
        '38 – 44 ชม./wk',
        '$105',
        'หอพัก Kalahari Village, บัตรเล่นสวนน้ำฟรี, เมืองปั่นจักรยาน 100%, หางาน 2 ง่ายที่สุดในอเมริกา',
        '🍕 Moosejaw Pizza & Dells Brewing: ปั่นจักรยาน 10 นาที Busser/Barback 18:30-23:30 น. ($13/ชม. + ทิปสด $60-$90/คืน)',
        '🍔 Buffalo Phil’s Grille: Food Runner/Busser เสิร์ฟอาหารด้วยรถไฟจิ๋ว 18:00-22:30 น. ($13/ชม. + ทิปสด $50-$80)',
        '🧀 MACS Mac & Cheese / Dairy Queen: แคชเชียร์/ครัวกะดึก 18:30-23:00 น. ($14.50-$15.50/ชม.)'
    ],
    [
        'Tier S',
        'Wisconsin (WI)',
        'Wilderness Resort & Glacier Canyon Lodge (WI Dells)',
        'OEG, IEE, Acadex, IEO',
        'Waterpark Attendant / Housekeeping',
        'ปกติ: 09:00 – 17:30 (8 ชม.)\nพีค: 08:30 – 19:00 (10 ชม.)',
        'ฐาน $15.00 / OT $22.50',
        '-',
        '40 – 46 ชม./wk',
        '$105',
        'อาณาจักรรีสอร์ตสวนน้ำที่ใหญ่ที่สุดในอเมริกา (600 เอเคอร์), หอพักพนักงานในรีสอร์ต',
        '🥩 Field’s at the Wilderness (สเต๊กหรูในรีสอร์ต): Busser 17:30-23:00 น. ($12/ชม. + ทิปสด $70-$120/คืน)',
        '🍕 Sarento’s Restaurant (ในรีสอร์ต): Food Runner/ล้างจาน 17:00-22:30 น. (ขอ OT ในรีสอร์ต $22.50)',
        '🍔 B-LUX Grill & Bar: Barback/Busser ร้านเบอร์เกอร์คราฟต์เบียร์ 18:00-00:00 น. (ทิปสดดีมาก)'
    ],
    [
        'Tier S',
        'Wisconsin (WI)',
        'Mt. Olympus Water & Theme Park (WI Dells)',
        'New Step, Acadex, Higher, IEO',
        'Ride Operator / Housekeeping / Lifeguard',
        'ปกติ: 09:30 – 18:00 (8 ชม.)\nพีค: 09:00 – 21:00 (11.5 ชม.)',
        'ฐาน $15.00 / OT $22.50',
        '-',
        '42 – 48 ชม./wk',
        '$95',
        'สวนสนุกธีมกรีกโบราณ โรลเลอร์โคสเตอร์ไม้, หอพักราคาถูก, ทำเลติดถนนใหญ่ Parkway',
        '🥞 Paul Bunyan’s Cook Shanty: ล้างจาน/ทำความสะอาดรอบค่ำ 17:30-22:00 น. ($14.50/ชม. + กินฟรี)',
        '🌭 Hot Dog Avenue: แคชเชียร์/ครัวปิด 18:00-22:30 น. ($14.50/ชม.)',
        '🍺 Showboat Saloon (Downtown): Barback ผับดนตรีสด 19:00-01:30 น. (ทิปสดแน่น)'
    ],
    [
        'Tier S',
        'Wisconsin (WI)',
        'Noah’s Ark Waterpark (Wisconsin Dells)',
        'OEG, IEE, New Step, IEO',
        'Ride Operator / Park Services',
        'ปกติ: 09:00 – 17:30 (8 ชม.)\nพีค: 08:30 – 18:30 (9.5 ชม.)',
        'ฐาน $14.50 / OT $21.75',
        '-',
        '40 – 46 ชม./wk',
        '$100',
        'สวนน้ำกลางแจ้งใหญ่ที่สุดในอเมริกา, เล่นสวนน้ำฟรี, หอพักพนักงานใกล้ที่ทำงาน',
        '🍻 Monk’s Bar & Grill (Downtown Dells): ปั่นจักรยานไปทำ Barback/Busser 18:30-00:00 น. (ทิปสดแน่นมาก)',
        '🍕 Pizza Pub Dells: ช่วยส่งอาหาร/ทำพิซซ่า/ล้างจานรอบดึก 18:00-00:00 น. ($14/ชม. + ทิป)',
        '🍦 Dairy Queen / Cold Stone Dells: ตักไอศกรีมกะค่ำ 18:00-22:30 น. ($14.50/ชม.)'
    ],
    [
        'Tier S',
        'Wisconsin (WI)',
        'Chula Vista Resort & Waterpark (WI Dells)',
        'Higher, Acadex, IEE, IEO',
        'Housekeeping / Lifeguard',
        'ปกติ: 08:30 – 16:30 (8 ชม.)\nพีค: 08:00 – 17:30 (9.5 ชม.)',
        'ฐาน $15.00 / OT $22.50',
        '-',
        '40 – 45 ชม./wk',
        '$105',
        'รีสอร์ตริมแม่น้ำ Wisconsin River, สวนน้ำในร่ม/กลางแจ้ง, หอพักในรีสอร์ต',
        '🥩 Kaminski’s Chop House (ในรีสอร์ต): Busser ร้านสเต๊กหรู 17:30-23:00 น. ($12/ชม. + ทิปสดเศรษฐี $70-$120/คืน)',
        '🌮 Mexicali Rose: Busser/Runner ร้านอาหารเม็กซิกันริมน้ำ 18:00-23:00 น. ($13/ชม. + ทิปสด)',
        '🍕 Kilbourn City Grill (ในรีสอร์ต): ล้างจาน/ผู้ช่วยครัว 17:00-22:00 น. (ขอ OT ในรีสอร์ตได้)'
    ],
    [
        'Tier S',
        'Wisconsin (WI)',
        'Grand Geneva Resort & Spa (Lake Geneva, WI)',
        'Acadex, OEG, IEO',
        'Housekeeping / Banquet / Culinary',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีค: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00',
        '$20 - $50',
        '42 – 48 ชม./wk',
        '$110',
        'รีสอร์ตหรูระดับ 4 เพชร AAA เมืองตากอากาศทะเลสาบคนรวยชิคาโก, หอพักพนักงาน',
        '🥩 Geneva ChopHouse (ในรีสอร์ต): Busser 17:30-23:00 น. ($13/ชม. + ทิปสด $60-$100/คืน)',
        '🍕 Popeye’s on Lake Geneva: Busser/Dishwasher ร้านอาหารริมทะเลสาบดัง 18:00-23:30 น. (ทิปดี)',
        '🍺 The Bottle Shop / Local Pubs: Barback ร้านคราฟต์เบียร์ 18:30-00:00 น.'
    ],

    # 4. TENNESSEE (TN) - Tier S
    [
        'Tier S',
        'Tennessee (TN)',
        'Dollywood Theme Park & Splash Country (Pigeon Forge)',
        'New Step, Acadex, IEO',
        'Ride Operator / Food Service / Retail',
        'ปกติ: 09:30 – 18:00 (8 ชม.)\nพีค: 09:00 – 21:30 (12 ชม. สวนสนุกเปิดดึก)',
        'ฐาน $15.00 / OT $22.50',
        '-',
        '44 – 50 ชม./wk',
        '$110',
        'ปลอดภาษีเงินได้รัฐ 0%, นั่งรถราง Pigeon Forge Trolley $1/วัน, บัตรเข้าสวนสนุก Dollywood ฟรี',
        '🍗 Paula Deen’s Family Kitchen (The Island): นั่งรถรางไปทำ Busser 18:30-23:00 น. ($13/ชม. + ทิปสด $60-$90)',
        '🍕 Mellow Mushroom Pizza: Barback/Busser ร้านพิซซ่าคราฟต์เบียร์ 18:30-00:00 น. ($12/ชม. + ทิปสด $50-$80)',
        '🥞 Puckett’s Grocery & Restaurant: Food Runner 18:00-23:00 น. ($13/ชม. + ทิป)'
    ],
    [
        'Tier S',
        'Tennessee (TN)',
        'The Island in Pigeon Forge (Arcades & Attractions)',
        'New Step, Acadex, IEO',
        'Attractions Host / Retail / F&B',
        'ปกติ: 10:00 – 18:00 (8 ชม.)\nพีค: 10:00 – 23:00 (กะดึก)',
        'ฐาน $15.00 / OT $22.50',
        '$20 - $40',
        '42 – 48 ชม./wk',
        '$110',
        'ศูนย์รวมความบันเทิง ชิงช้าสวรรค์ยักษ์และร้านอาหารกลางเมือง, รถรางผ่านหน้าร้าน',
        '🦜 Margaritaville Restaurant (ใน The Island): Busser/Barback 18:30-00:00 น. ($13/ชม. + ทิปสด $60-$100)',
        '🥞 Timberwood Grill (ใน The Island): ล้างจาน/ผู้ช่วยครัว 18:00-23:30 น. ($14.50/ชม.)',
        '🍭 The Island Candy Kitchen: แคชเชียร์/ทำขนม 18:00-22:30 น. ($15/ชม.)'
    ],
    [
        'Tier S',
        'Tennessee (TN)',
        'Wilderness at the Smokies (Sevierville)',
        'OEG, Acadex, Higher, IEO',
        'Lifeguard / Housekeeping',
        'ปกติ: 09:00 – 17:30 (8 ชม.)\nพีค: 08:30 – 19:30 (10.5 ชม.)',
        'ฐาน $15.00 / OT $22.50',
        '-',
        '42 – 48 ชม./wk',
        '$105',
        'สวนน้ำในร่มใหญ่ที่สุดในเทนเนสซี, ปลอดภาษีรัฐ 0%, หอพักพนักงาน Sevierville',
        '🍏 Applewood Farmhouse Restaurant: Busser ร้านอาหารดังคนแน่น 18:00-22:30 น. (ทิปสด $60-$100/คืน)',
        '🥩 Hidden Trail Restaurant (ในรีสอร์ต): ล้างจาน/Busser กะค่ำ 18:00-22:30 น. (ขอ OT ในรีสอร์ต $22.50/ชม.)',
        '🛍️ Tanger Outlets Sevierville: จัดสต็อกสินค้า/ปิดร้าน 18:00-21:30 น. ($15/ชม.)'
    ],
    [
        'Tier S',
        'Tennessee (TN)',
        'Anakeesta Mountaintop Theme Park (Gatlinburg)',
        'Higher, IEE, IEO',
        'Guest Host / F&B / Retail',
        'ปกติ: 09:00 – 17:30 (8 ชม.)\nพีค: 08:30 – 20:00 (10.5 ชม.)',
        'ฐาน $15.00 / OT $22.50',
        '$15 - $30',
        '42 – 48 ชม./wk',
        '$110',
        'สวนสนุกธรรมชาติบนยอดเขา Gatlinburg นั่งกระเช้า Chondola, ปลอดภาษีรัฐ 0%',
        '🍺 Smoky Mountain Brewery (Gatlinburg): Barback/Busser 18:30-00:30 น. ($12/ชม. + ทิปสด $70-$120/คืน)',
        '🥩 Alamo Steakhouse: Busser/Dishwasher ร้านสเต๊กคาวบอย 17:30-23:00 น. ($13/ชม. + ทิป)',
        '🥞 Pancake Pantry (ร้านแพนเค้กอันดับ 1): ช่วยเตรียมวัตถุดิบ/ล้างจานรอบบ่าย-เย็น'
    ],
    [
        'Tier S',
        'Tennessee (TN)',
        'Ober Mountain / Gatlinburg Area Lodges',
        'IEE, New Step, IEO',
        'Attractions Operator / Retail',
        'ปกติ: 09:00 – 17:00 (8 ชม.)\nพีค: 08:30 – 19:00 (10 ชม.)',
        'ฐาน $15.00 / OT $22.50',
        '-',
        '40 – 46 ชม./wk',
        '$110',
        'กระเช้าลอยฟ้าและสวนสนุกบนยอดเขา Gatlinburg, ปลอดภาษีรัฐ 0%, เมืองเดินเท้า 100%',
        '🥃 Ole Smoky Moonshine Distillery: พนักงานเช็ดแก้ว/เติมสต็อก/แคชเชียร์ 17:30-22:30 น. ($15/ชม.)',
        '🥩 Calhoun’s in Gatlinburg: Busser/Runner ร้านบาร์บีคิวซี่โครงหมูชื่อดัง 17:30-23:00 น. (ทิปดี)',
        '🍕 Best Italian Cafe & Pizzeria: ผู้ช่วยครัว/ล้างจาน 18:00-23:30 น. ($14/ชม. + ทิป)'
    ],

    # 5. MONTANA (MT) - Tier S
    [
        'Tier S',
        'Montana (MT)',
        'Glacier National Park Lodges (Pursuit / Xanterra)',
        'OEG, Acadex, Higher, IEO',
        'Hospitality Crew / Housekeeping',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีค: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00',
        '-',
        '46 – 52 ชม./wk',
        '$115 (รวมกิน)',
        'อุทยานธรรมชาติธารน้ำแข็ง Glacier NP, ปลอดภาษีมูลค่าเพิ่ม 0% Sales Tax, หอพัก+อาหาร EDR',
        '🥩 Belton Chalet Dining Room: Busser/Steward ร้านอาหารประวัติศาสตร์ 17:30-22:30 น. ($15/ชม. + ทิป)',
        '🛶 Glacier Raft Company Base: พนักงานล้างทำความสะอาดเรือยาง/อุปกรณ์ล่องแก่ง 17:00-21:30 น. ($16/ชม.)',
        '🥐 West Glacier Bakery & Cafe: ผู้ช่วยเตรียมวัตถุดิบ/ล้างจาน 17:00-22:00 น.'
    ],
    [
        'Tier S',
        'Montana (MT)',
        'Many Glacier Hotel & Glacier Park Lodge (East Glacier)',
        'OEG, Acadex, IEO',
        'Housekeeping / Dining Room / Steward',
        'ปกติ: 07:30 – 15:30 (8 ชม.)\nพีค: 07:00 – 17:00 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00',
        '$15 - $30',
        '46 – 52 ชม./wk',
        '$115 (รวมกิน)',
        'โรงแรมสไตล์สวิสชาเลต์ริมทะเลสาบ Swiftcurrent Lake สวยที่สุดใน Glacier NP, อาหาร EDR 3 มื้อ',
        '🥩 Ptarmigan Dining Room (ในโรงแรม): Busser 17:00-22:30 น. (เรต OT $24/ชม. + ทิปสด)',
        '☕ Heidi’s Snack Shop (ในโรงแรม): แคชเชียร์/ชงกาแฟ 16:30-21:30 น. (ขอ OT $24/ชม.)',
        '🛶 Many Glacier Boat Tours: ช่วยเทียบเรือ/ล้างเรือทัวร์ 17:00-20:30 น.'
    ],
    [
        'Tier S',
        'Montana (MT)',
        'Big Sky Resort / Montage Big Sky',
        'Acadex, Higher, IEE, IEO',
        'Mountain Operations / Housekeeping',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีค: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $17.50 / OT $26.25',
        '-',
        '46 – 52 ชม./wk',
        '$140',
        'รีสอร์ตภูเขาหรูหราไฮเอนด์, ค่าแรงฐานสูงมาก, มีรถบัส Skyline Bus ฟรี',
        '🍺 Lone Peak Brewery (Town Center): Barback/Busser 17:30-23:30 น. ($15/ชม. + ทิปสดเศรษฐี $60-$100/คืน)',
        '🍖 The Riverhouse BBQ: Busser/Runner ร้านบาร์บีคิวริมแม่น้ำ Gallatin 17:00-22:30 น. ($14/ชม. + ทิป)',
        '🛒 Roxy’s Market Big Sky: พนักงานจัดสต็อกซูเปอร์มาร์เก็ต 18:00-22:00 น. ($17/ชม.)'
    ],

    # 6. MAINE (ME) - Tier S
    [
        'Tier S',
        'Maine (ME)',
        'Bar Harbor Grand Hotel / Harborside Hotel',
        'Acadex, OEG, Higher, IEO',
        'Housekeeping / Laundry',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีค: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75',
        '-',
        '44 – 50 ชม./wk',
        '$130',
        'เมืองตากอากาศชายทะเล Bar Harbor & อุทยาน Acadia NP, รถบัส Island Explorer ฟรี',
        '🦞 Stewman’s Lobster Pound (ริมทะเล): Busser/Barback ร้านกุ้งล็อบสเตอร์ 17:30-23:00 น. ($13/ชม. + ทิปสด $60-$120/คืน)',
        '🍺 Geddy’s Down Under / The Chart Room: Busser/Runner 18:00-23:30 น. (ทิปสดแน่นมาก)',
        '🍦 Ben & Bill’s Chocolate Emporium: พนักงานตักไอศกรีม/แคชเชียร์ 17:00-22:00 น. ($15.50/ชม.)'
    ],
    [
        'Tier S',
        'Maine (ME)',
        'Cliff House Maine (Cape Neddick / Ogunquit)',
        'Higher, Acadex, IEO',
        'Housekeeping / Culinary / Stewarding',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีค: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $17.00 / OT $25.50',
        '-',
        '42 – 48 ชม./wk',
        '$135',
        'รีสอร์ตหรูบนหน้าผาริมมหาสมุทรแอตแลนติก แขกไฮเอนด์ระดับมหาเศรษฐีบอสตันและนิวยอร์ก',
        '🦞 The Tiller Restaurant (ในรีสอร์ต): Busser ร้าน Fine Dining วิวมหาสมุทร 17:30-23:00 น. (ทิปสด $70-$130/คืน)',
        '🍺 Nubb’s Lobster Shack (ในรีสอร์ต): Food Runner/Barback 17:00-22:30 น. (ขอ OT ในรีสอร์ต $25.50)',
        '🍦 Ogunquit Beach Cafes: ผู้ช่วยครัว/บริการรอบเย็น'
    ],
    [
        'Tier S',
        'Maine (ME)',
        'The Nonantum Resort (Kennebunkport, ME)',
        'Higher, Acadex, IEO',
        'Housekeeping / Banquet / F&B',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีค: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75',
        '$20 - $50',
        '42 – 48 ชม./wk',
        '$125',
        'รีสอร์ตตากอากาศริมน้ำประวัติศาสตร์ เมืองของประธานาธิบดีบุช, หอพักพนักงาน Kennebunkport',
        '🦞 The Clam Shack (สะพาน Kennebunkport): ล้างจาน/ทอดซีฟู้ดร้านดัง 17:30-22:30 น. ($16/ชม. + ทิป)',
        '🥩 Ocean Restaurant: Busser ร้านอาหารหรูริมน้ำ 18:00-23:00 น. (ทิปสด $60-$100/คืน)',
        '🍦 Rococo Artisan Ice Cream: ตักไอศกรีม 17:00-22:00 น. ($15/ชม.)'
    ],

    # 7. UTAH (UT) - Tier S
    [
        'Tier S',
        'Utah (UT)',
        'Zion National Park Lodge (Xanterra Springdale)',
        'OEG, IEE, Acadex, IEO',
        'Hospitality Crew / Housekeeping',
        'ปกติ: 07:30 – 15:30 (8 ชม.)\nพีค: 07:00 – 16:30 (9 ชม.)',
        'ฐาน $16.00 / OT $24.00',
        '-',
        '44 – 50 ชม./wk',
        '$110',
        'อุทยานแห่งชาติหุบเขาผาแดง Zion NP, มีรถชัตเติลบัสฟรีวิ่งตลอดถนน Springdale',
        '🌮 Bit & Spur Restaurant & Saloon: Busser/Barback 17:30-23:00 น. ($13/ชม. + ทิปสดแขกต่างชาติ $50-$90/คืน)',
        '🍔 Oscar’s Cafe (Springdale): Food Runner/Busser 17:00-22:00 น. ($13/ชม. + ทิป)',
        '🍺 Zion Canyon Brew Pub: ล้างจาน/ผู้ช่วยครัวหน้าปากทางเข้าอุทยาน 18:00-23:30 น. ($15/ชม.)'
    ],
    [
        'Tier S',
        'Utah (UT)',
        'Ruby’s Inn / Bryce Canyon Grand Hotel',
        'Higher, IEE, Acadex, IEO',
        'Housekeeping / Fast Food / Retail',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีค: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $15.00 / OT $22.50',
        '-',
        '42 – 48 ชม./wk',
        '$100',
        'อาณาจักรโรงแรมและรีสอร์ต Ruby’s Inn หน้าปากทาง Bryce Canyon NP, หอพักพนักงานใกล้ที่ทำงาน',
        '🥩 Cowboy’s Buffet & Steak Room (ในเครือ): Busser/Steward 17:00-22:30 น. (ขอ OT ในเครือ $22.50/ชม.)',
        '🤠 Ebenezer’s Barn & Grill: Food Runner งานดินเนอร์โชว์คาวบอย 18:00-22:00 น. (ได้ส่วนแบ่งทิป)',
        '🛒 Ruby’s General Store & Diner: แคชเชียร์/ผู้ช่วยครัว 17:00-21:30 น. ($15/ชม.)'
    ],
    [
        'Tier S',
        'Utah (UT)',
        'Park City Mountain Resort (Vail Resorts - Park City)',
        'OEG, Acadex, IEO',
        'Mountain Host / Housekeeping / F&B',
        'ปกติ: 08:30 – 16:30 (8 ชม.)\nพีค: 08:00 – 17:30 (9.5 ชม.)',
        'ฐาน $17.50 / OT $26.25',
        '-',
        '42 – 48 ชม./wk',
        '$150',
        'สกีรีสอร์ตและเมืองภูเขาที่ใหญ่ที่สุดในสหรัฐฯ, ระบบรถเมล์ฟรีทั้งเมือง Park City Transit',
        '🥩 High West Distillery & Saloon (Main Street): Barback/Busser โรงกลั่นวิสกี้ดัง 17:30-23:30 น. (ทิปสด $80-$140/คืน)',
        '🍕 Red Banjo Pizza (Historic Main St): ล้างจาน/ผู้ช่วยครัว 18:00-23:00 น. ($16/ชม. + ทิป)',
        '🛒 Freshies Lobster Co. / Local Cafes: Food Runner 17:00-21:30 น. ($15/ชม. + ทิป)'
    ],

    # 8. MARYLAND (MD) - Tier S
    [
        'Tier S',
        'Maryland (MD)',
        'Premier Aquatics / High Sierra Pools (Bethesda/Rockville)',
        'Acadex, New Step, ALC, IEO',
        'Pool Lifeguard',
        'ปกติ: 10:30 – 19:30 (9 ชม.)\nพีค: 10:00 – 20:30 (10.5 ชม. สระเปิดยาว)',
        'ฐาน $16.00 / OT $24.00',
        '-',
        '50 – 54 ชม./wk (การันตี OT)',
        '$120',
        'การันตีชั่วโมง OT แน่นอนสัปดาห์ละ 10-14 ชม., อพาร์ตเมนต์แชร์กับเพื่อน, รถไฟใต้ดิน Metro เข้า DC',
        '🛒 Giant Food / Safeway: พนักงานจัดสต็อกสินค้ากะดึก 20:30-01:00 น. ($16-$17.50/ชม. มีสาขาใกล้ที่พัก)',
        '🍜 Thai Tanic / Ruan Thai: ผู้ช่วยครัว/แพ็กอาหาร 20:00-23:30 น. (มีอาหารไทยฟรี)',
        '🎯 Target / CVS Pharmacy: แคชเชียร์/ปิดร้าน 20:00-23:30 น. ($16.00/ชม.)'
    ],
    [
        'Tier S',
        'Maryland (MD)',
        'Ocean City Boardwalk Hotels & Resorts',
        'IEE, New Step, OEG, IEO',
        'Housekeeping / Ride Operator',
        'ปกติ: 08:30 – 16:30 (8 ชม.)\nพีค: 08:00 – 17:30 (9.5 ชม.)',
        'ฐาน $15.00 / OT $22.50',
        '-',
        '44 – 50 ชม./wk',
        '$125',
        'เมืองตากอากาศชายหาด Atlantic, รถบัส Coastal Highway วิ่ง 24 ชม., หางานสองง่ายมาก',
        '🌴 Seacrets Jamaica USA (ผับริมหาดยักษ์ใหญ่): Barback/Busser 18:00-01:30 น. ($12/ชม. + ทิปสดมหาศาล $80-$150/คืน)',
        '🍟 Thrasher’s French Fries (ริมหาด): แคชเชียร์/ทอดเฟรนช์ฟรายส์ 18:00-23:00 น. ($15/ชม.)',
        '🍺 Shenanigans Irish Pub: ล้างจาน/ผู้ช่วยบาร์ 18:30-00:30 น. ($14/ชม. + ทิป)'
    ],
    [
        'Tier S',
        'Maryland (MD)',
        'Jolly Roger Amusement Park & Splash Mountain (Ocean City)',
        'New Step, IEE, IEO',
        'Ride Operator / Lifeguard / Park Services',
        'ปกติ: 11:00 – 19:00 (8 ชม.)\nพีค: 10:00 – 23:00 (12 ชม.)',
        'ฐาน $15.00 / OT $22.50',
        '-',
        '45 – 52 ชม./wk',
        '$120',
        'สวนสนุกและสวนน้ำที่ใหญ่ที่สุดใน Ocean City, เล่นสวนสนุกฟรี, มีรถเมล์ผ่านหน้าสวนสนุก',
        '🦀 Higgins Crab House: Busser ร้านปูยักษ์ 19:30-00:30 น. ($13/ชม. + ทิปสด $60-$90/คืน)',
        '🍕 Dough Roller Pizza (Boardwalk): ล้างจาน/ทำพิซซ่ากะดึก 19:30-01:00 น. ($15/ชม.)',
        '🍦 Dumser’s Dairyland: ตักไอศกรีม/แคชเชียร์ 19:00-23:30 น. ($15/ชม.)'
    ],

    # 9. OHIO (OH) - Tier S
    [
        'Tier S',
        'Ohio (OH)',
        'Cedar Point Amusement Park & Resorts (Sandusky)',
        'OEG, IEE Thailand, IEO',
        'Ride Operator / Food Service',
        'ปกติ: 10:00 – 18:30 (8 ชม.)\nพีค: 09:30 – 22:30 (12 ชม. สวนสนุกปิดดึก)',
        'ฐาน $14.50 / OT $21.75',
        '-',
        '46 – 52 ชม./wk',
        '$80 (ถูกสุด)',
        'สวนสนุกเครื่องเล่นระดับโลก, หอพักราคาถูกที่สุดในอเมริกา ($80/wk), รถบัสรับส่งฟรี, เล่นสวนสนุกฟรี',
        '🏨 Hotel Breakers / Castaway Bay (ในสวนสนุก): ล้างจาน/แม่บ้านกะค่ำ 19:00-00:00 น. (ขอ OT ในสวนสนุก $21.75/ชม.)',
        '🍖 Famous Dave’s BBQ (Cedar Point Marina): Busser/Dishwasher 18:30-23:30 น. ($13/ชม. + ทิปสด)',
        '🐴 Thirsty Pony / Kalahari Sandusky: Barback/Busser ร้านอาหารใกล้เคียง 19:00-00:30 น.'
    ],
    [
        'Tier S',
        'Ohio (OH)',
        'Kings Island Amusement Park (Mason / Cincinnati)',
        'OEG, IEE Thailand, IEO',
        'Ride Operator / Park Services / Culinary',
        'ปกติ: 10:00 – 18:30 (8 ชม.)\nพีค: 09:30 – 22:30 (12 ชม.)',
        'ฐาน $14.50 / OT $21.75',
        '-',
        '44 – 50 ชม./wk',
        '$90',
        'สวนสนุกชั้นนำเครือ Cedar Fair ใกล้เมือง Cincinnati, หอพักพนักงาน + รถรับส่งฟรี',
        '🍕 Mason Local Pizzerias & Diners: ล้างจาน/ผู้ช่วยครัวรอบดึก 19:00-00:00 น. ($14.50/ชม.)',
        '🍦 Greaters Ice Cream: พนักงานตักไอศกรีมชื่อดัง 19:00-23:00 น. ($14.50/ชม.)',
        '🏨 Great Wolf Lodge Mason (ข้างๆ สวนสนุก): แม่บ้าน/ผู้ช่วยครัวกะค่ำ (ขอทำเพิ่มได้)'
    ],

    # 10. COLORADO (CO) - Tier S
    [
        'Tier S',
        'Colorado (CO)',
        'YMCA of the Rockies (Estes Park Center)',
        'Higher, IEE, Acadex, IEO',
        'Housekeeping / Food Service',
        'ปกติ: 07:30 – 15:30 (8 ชม.)\nพีค: 07:00 – 16:30 (9 ชม.)',
        'ฐาน $15.50 / OT $23.25',
        '-',
        '42 – 48 ชม./wk',
        '$110 (รวมกิน)',
        'แคมป์รีสอร์ตกลางเทือกเขา Rocky Mountain NP, หอพัก+อาหารบุฟเฟต์ 3 มื้อ, รถชัตเติลบัสเข้าเมืองฟรี',
        '🏨 The Stanley Hotel (โรงแรมประวัติศาสตร์ The Shining): Busser/Steward ร้านอาหารหรู 17:30-23:00 น. (ทิปสด $50-$90)',
        '🍔 Penelope’s Old Time Burgers: ผู้ช่วยครัว/ทอดเบอร์เกอร์ 17:00-21:30 น. ($15/ชม. + กินฟรี)',
        '🍺 Estes Park Brewery / Rock Cut Brewing: ล้างแก้ว/ผู้ช่วยบาร์ 18:00-22:30 น. ($15/ชม.)'
    ],

    # 11. SOUTH CAROLINA (SC) - Tier S
    [
        'Tier S',
        'South Carolina (SC)',
        'Myrtle Beach Oceanfront Resorts & Boardwalk',
        'OEG, IEE, New Step, IEO',
        'Housekeeping / Lifeguard / Attractions',
        'ปกติ: 08:30 – 16:30 (8 ชม.)\nพีค: 08:00 – 17:30 (9.5 ชม.)',
        'ฐาน $14.50 / OT $21.75',
        '$15 - $30',
        '44 – 50 ชม./wk',
        '$115',
        'เมืองตากอากาศชายหาดยอดนิยมอันดับ 1 ฝั่งใต้, ชายหาดยาว 60 ไมล์, เมืองเดินเท้า/จักรยาน',
        '🦀 Sea Captain’s House (ร้านซีฟู้ดระดับตำนาน): Busser 17:30-23:00 น. (ทิปสด $70-$120/คืน)',
        '🍕 Broadway at the Beach Eateries: Barback/Runner ศูนย์การค้าเปิดโล่ง 18:30-00:30 น. (ทิปแน่น)',
        '🍦 Peaches Corner / Mad Myrtle’s Ice Cream: แคชเชียร์ริมหาด 18:00-23:30 น.'
    ],

    # 12. NORTH CAROLINA (NC) - Tier S
    [
        'Tier S',
        'North Carolina (NC)',
        'Outer Banks Coastal Resorts (Nags Head / Kill Devil Hills)',
        'IEE, New Step, Acadex',
        'Housekeeping / Beach Operations / F&B',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีค: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $15.50 / OT $23.25',
        '$20 - $40',
        '42 – 48 ชม./wk',
        '$125',
        'หมู่เกาะตากอากาศ Outer Banks ทะเลสวย สงบ คนรวยมาพักผ่อน, บ้านพักแชร์ J-1 ริมทะเล',
        '🦞 Owens’ Restaurant (ร้านซีฟู้ดประวัติศาสตร์): Busser 17:30-23:00 น. (ทิปสด $60-$110/คืน)',
        '🍺 Outer Banks Brewing Station: Barback ร้านคราฟต์เบียร์กังหันลม 18:00-00:30 น.',
        '🍕 Duck Donuts / Kill Devil Grill: ผู้ช่วยครัว/ทอดโดนัทกะเย็น ($15/ชม.)'
    ],

    # -------------------------------------------------------------------------
    # ✨ TIER A STATES (19 รัฐตาม data.js ในเว็บ)
    # -------------------------------------------------------------------------
    # 13. TEXAS (TX) - Tier A
    [
        'Tier A',
        'Texas (TX)',
        'Schlitterbahn Waterpark (New Braunfels / Galveston)',
        'OEG, Acadex, IEE, IEO',
        'Lifeguard / Park Operations',
        'ปกติ: 09:30 – 18:00 (8 ชม.)\nพีค: 09:00 – 19:30 (10 ชม.)',
        'ฐาน $15.00 / OT $22.50',
        '-',
        '44 – 50 ชม./wk',
        '$110',
        'สวนน้ำระดับตำนานของเท็กซัส, ปลอดภาษีเงินได้รัฐ 0%, เล่นสวนน้ำฟรี',
        '🥩 Gristmill River Restaurant (Gruene): Busser ร้านอาหารริมแม่น้ำสุดคึกคัก 18:30-23:30 น. ($12/ชม. + ทิปสด $60-$100)',
        '🦫 Buc-ee’s New Braunfels (ใหญ่ที่สุดในโลก): แคชเชียร์/Food Prep กะดึก 19:00-00:00 น. ($17-$19/ชม. จ่ายหนักมาก)',
        '🍺 Krause’s Cafe & Biergarten: Barback/Runner ร้านเบียร์เยอรมัน 18:00-23:00 น. ($13/ชม. + ทิป)'
    ],
    [
        'Tier A',
        'Texas (TX)',
        'Kalahari Resorts & Conventions Round Rock (Austin, TX)',
        'OEG, Acadex, IEO',
        'Lifeguard / Housekeeping / F&B',
        'ปกติ: 09:30 – 18:00 (8 ชม.)\nพีค: 09:00 – 19:30 (10 ชม.)',
        'ฐาน $15.50 / OT $23.25',
        '-',
        '42 – 48 ชม./wk',
        '$120',
        'สวนน้ำในร่มใหญ่ที่สุดในอเมริกา สาขาเท็กซัส, ปลอดภาษีรัฐ 0%, ใกล้ออสติน',
        '🥩 Double Cut Steak House (ในรีสอร์ต): Busser ร้านสเต๊กหรู 17:30-23:00 น. ($13/ชม. + ทิปสด $70-$120)',
        '🍕 Tom Foolerys Adventure Park (ในรีสอร์ต): คุมเครื่องเล่น/เกมรอบค่ำ 18:00-23:00 น. (ขอ OT $23.25)',
        '🍔 Round Rock Local Eateries: Busser/ล้างจานร้านอาหารรอบนอก 18:30-23:30 น.'
    ],
    [
        'Tier A',
        'Texas (TX)',
        'Six Flags Fiesta Texas & SeaWorld San Antonio',
        'New Step, Higher, IEE, IEO',
        'Ride Operator / Lifeguard / Culinary',
        'ปกติ: 10:00 – 18:30 (8 ชม.)\nพีค: 09:30 – 21:30 (11.5 ชม.)',
        'ฐาน $14.50 / OT $21.75',
        '-',
        '42 – 48 ชม./wk',
        '$115',
        'สวนสนุกและสวนน้ำระดับโลก ซานอันโตนิโอ, ปลอดภาษีรัฐ 0%, หอพักพนักงาน',
        '🥩 The County Line BBQ (River Walk): Busser ร้านบาร์บีคิวริมแม่น้ำ 19:00-00:00 น. (ทิปสด $60-$100/คืน)',
        '🎸 Hard Rock Cafe San Antonio: Food Runner/Busser 19:00-00:30 น. ($13/ชม. + ทิป)',
        '🌮 Boudro’s on the Riverwalk: ล้างจาน/ผู้ช่วยครัว 19:00-01:00 น. ($15/ชม.)'
    ],
    [
        'Tier A',
        'Texas (TX)',
        'Kemah Boardwalk & Galveston Pleasure Pier',
        'OEG, New Step, IEO',
        'Ride Operator / Retail / F&B',
        'ปกติ: 10:30 – 18:30 (8 ชม.)\nพีค: 10:00 – 22:30 (12 ชม.)',
        'ฐาน $14.50 / OT $21.75',
        '$15 - $30',
        '42 – 48 ชม./wk',
        '$110',
        'สวนสนุกริมอ่าวเม็กซิโก เครือ Landry’s, ปลอดภาษีรัฐ 0%, บรรยากาศชายทะเล',
        '🦞 Aquarium Restaurant Kemah (ในเครือ): Busser ร้านอาหารใต้น้ำ 18:30-23:30 น. (ทิปสด $60-$100/คืน)',
        '🍤 Bubba Gump Shrimp Co. (Galveston Pier): Food Runner/Busser 18:30-00:00 น. (ทิปดี)',
        '🏖️ The Spot (Galveston Seawall): Barback/Busser ร้านอาหารริมหาดคนแน่น 19:00-01:00 น.'
    ],

    # 14. FLORIDA (FL) - Tier A
    [
        'Tier A',
        'Florida (FL)',
        'Universal Orlando Resort & Volcano Bay',
        'OEG, IEE, Acadex, IEO',
        'Attractions Attendant / Culinary / Lifeguard',
        'ปกติ: 09:30 – 18:00 (8 ชม.)\nพีค: 09:00 – 22:00 (12 ชม.)',
        'ฐาน $15.50 / OT $23.25',
        '-',
        '42 – 48 ชม./wk',
        '$130',
        'สวนสนุกระดับโลก ยูนิเวอร์แซล ออร์แลนโด, ปลอดภาษีเงินได้รัฐ 0%, บัตรเข้าสวนสนุกฟรี',
        '🎸 Universal CityWalk Eateries: Food Runner/Busser บาร์ดึก 18:30-01:00 น. (ทิปสด $60-$100/คืน)',
        '🍔 The Cowfish Sushi Burger Bar: ล้างจาน/ผู้ช่วยครัว 19:00-01:00 น. ($15/ชม. + ทิป)',
        '🍕 Red Oven Pizza Bakery: ผู้ช่วยทำพิซซ่ากะดึก 18:30-00:30 น.'
    ],
    [
        'Tier A',
        'Florida (FL)',
        'Busch Gardens Tampa Bay & Adventure Island',
        'New Step, Acadex, IEO',
        'Ride Operator / Lifeguard / Food Service',
        'ปกติ: 09:30 – 18:00 (8 ชม.)\nพีค: 09:00 – 21:30 (11.5 ชม.)',
        'ฐาน $15.00 / OT $22.50',
        '-',
        '42 – 48 ชม./wk',
        '$120',
        'สวนสนุกโรลเลอร์โคสเตอร์อันดับ 1 ในแทมปาและสวนน้ำ, ปลอดภาษีรัฐ 0%',
        '🍺 Ybor City Historic Bars (แทมปา): Barback ผับประวัติศาสตร์ 19:00-01:30 น. (ทิปสด $60-$110/คืน)',
        '🦀 Columbia Restaurant (ร้านสเปนชื่อดังที่สุด): Busser 18:30-23:30 น. (ทิปดี)',
        '🍔 Portillo’s Hot Dogs Tampa: ครัว/แคชเชียร์รอบดึก 18:30-00:00 น. ($15/ชม.)'
    ],
    [
        'Tier A',
        'Florida (FL)',
        'Gaylord Palms Resort & Convention Center (Kissimmee)',
        'OEG, Acadex, Higher',
        'Housekeeping / Banquet Server / Steward',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีค: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00',
        '$20 - $50',
        '44 – 50 ชม./wk',
        '$125',
        'รีสอร์ตศูนย์ประชุมโดมกระจกยักษ์ระดับ 4 ดาว Marriott, ปลอดภาษีรัฐ 0%',
        '🥩 Old Hickory Steakhouse (ในรีสอร์ต): Busser ร้านสเต๊กหรู 17:30-23:00 น. (ทิปสด $70-$120)',
        '🌴 Wreckers Sports Bar (ในรีสอร์ต): Barback ผับกีฬาจอ 2 ชั้น 18:30-00:30 น. (ขอ OT ในรีสอร์ต $24/ชม.)',
        '🛍️ Disney Springs Eateries: Food Runner ร้านอาหารฝั่งดิสนีย์ 19:00-01:00 น.'
    ],

    # 15. NEW JERSEY (NJ) - Tier A
    [
        'Tier A',
        'New Jersey (NJ)',
        'Morey’s Piers & Beachfront Waterparks (Wildwood, NJ)',
        'OEG, IEE, New Step, IEO',
        'Ride Operator / Lifeguard / Pier Services',
        'ปกติ: 11:00 – 19:00 (8 ชม.)\nพีค: 10:30 – 23:30 (12 ชม.)',
        'ฐาน $15.50 / OT $23.25',
        '-',
        '45 – 52 ชม./wk',
        '$120',
        'สวนสนุกริมสะพานปลาชานหาดที่ใหญ่ที่สุดในฝั่ง East Coast, เล่นเครื่องเล่นฟรี, เมืองจักรยาน',
        '🍕 Mack’s Pizza / Sam’s Pizza (Boardwalk): ล้างจาน/ทำพิซซ่ากะดึก 19:30-01:30 น. ($15/ชม.)',
        '🍺 The Wharf Restaurant & Bar: Barback/Busser ร้านอาหารริมน้ำ 19:00-01:00 น. (ทิปสด $70-$120/คืน)',
        '🍦 Curley’s Fries / Kohr Brothers: แคชเชียร์/ตักไอศกรีม 19:00-23:30 น. ($15.50/ชม.)'
    ],

    # 16. SOUTH DAKOTA (SD) - Tier A
    [
        'Tier A',
        'South Dakota (SD)',
        'Xanterra Mount Rushmore / Keystone Lodges',
        'OEG, IEE, Higher, IEO',
        'Retail / Food Service / Housekeeping',
        'ปกติ: 08:30 – 16:30 (8 ชม.)\nพีค: 08:00 – 17:30 (9.5 ชม.)',
        'ฐาน $15.50 / OT $23.25',
        '-',
        '44 – 50 ชม./wk',
        '$105',
        'ทำงานหน้าอนุสรณ์สถานแห่งชาติ Mount Rushmore, ปลอดภาษีรัฐ 0%, หอพัก+อาหาร EDR',
        '🍔 Carver’s Cafe at Mt Rushmore: ล้างจาน/ปิดครัว 17:00-21:30 น. (ขอ OT ในอุทยาน $23.25/ชม.)',
        '🥩 Ruby House Restaurant (Keystone): Busser ร้านอาหารธีมคาวบอยย้อนยุค 17:30-22:30 น. ($13/ชม. + ทิป)',
        '🚂 1880 Train / Keystone Gift Shops: พนักงานร้านของฝาก/สถานีรถไฟโบราณ 17:00-21:30 น. ($15/ชม.)'
    ],
    [
        'Tier A',
        'South Dakota (SD)',
        'Custer State Park Resorts (State Game Lodge / Sylvan)',
        'Higher, Acadex, IEO',
        'Guest Service / Housekeeping',
        'ปกติ: 07:30 – 15:30 (8 ชม.)\nพีค: 07:00 – 16:30 (9 ชม.)',
        'ฐาน $15.50 / OT $23.25',
        '-',
        '42 – 48 ชม./wk',
        '$105 (รวมกิน)',
        'อุทยานธรรมชาติฝูงควายไบซัน Custer SP, ปลอดภาษีรัฐ 0%, หอพัก+อาหาร EDR',
        '🥩 State Game Lodge Dining Room: Busser ร้านสเต๊กควายไบซันหรู 17:00-22:00 น. ($13/ชม. + ทิปสด $50-$80)',
        '🍔 Black Hills Burger & Bun (เมือง Custer): ล้างจาน/ครัว 17:00-21:30 น. ($15/ชม. + กินฟรี)',
        '🏕️ Sylvan Lake General Store: พนักงานมินิมาร์ท/เช่าเรือแคนู 16:30-21:00 น.'
    ],
    [
        'Tier A',
        'South Dakota (SD)',
        'Wall Drug Store (Wall, SD)',
        'IEE, Acadex, IEO',
        'Retail / Restaurant Staff / Fast Food',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีค: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $15.50 / OT $23.25',
        '-',
        '45 – 50 ชม./wk',
        '$85 (ถูกมาก)',
        'ห้างคาวบอยระดับตำนานของอเมริกา จุดแวะพักยอดฮิตก่อนเข้า Badlands NP, หอพักราคาถูก',
        '☕ Wall Drug Western Art Dining Room: Busser/Steward 17:00-22:00 น. (ขอ OT ในตัว $23.25)',
        '🍩 Wall Drug Famous Donut Kitchen: ช่วยทำโดนัท/เบเกอรี่รอบเย็น 16:30-21:00 น.',
        '🌵 Badlands Saloon & Grille: Barback/ล้างจาน 18:00-23:00 น. ($14.50/ชม. + ทิป)'
    ],
    [
        'Tier A',
        'South Dakota (SD)',
        'Deadwood Historic Hotels & Casinos (The Lodge at Deadwood)',
        'Higher, New Step, IEO',
        'Housekeeping / Food & Beverage',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีค: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $15.50 / OT $23.25',
        '$20 - $50',
        '42 – 48 ชม./wk',
        '$100',
        'เมืองคาวบอยคาสิโนประวัติศาสตร์ ปลอดภาษีรัฐ 0%, มีรถราง Deadwood Trolley $1',
        '🥩 Deadwood Grille / O’Shea’s: Busser/Runner 17:30-23:00 น. ($13/ชม. + ทิปสด $50-$90/คืน)',
        '🎰 Mineral Palace / Silverado Casino: Barback บาร์ในคาสิโน 18:30-01:00 น. (ทิปดี)',
        '🍕 Mustang Sally’s Sports Bar: ผู้ช่วยครัว/ล้างจาน 18:00-00:00 น. ($14.50/ชม.)'
    ],

    # 17. VIRGINIA (VA) - Tier A
    [
        'Tier A',
        'Virginia (VA)',
        'Busch Gardens Williamsburg & Water Country USA',
        'New Step, Acadex, IEO',
        'Ride Operator / Culinary Operations',
        'ปกติ: 09:30 – 18:00 (8 ชม.)\nพีค: 09:00 – 21:30 (12 ชม. สวนสนุกเปิดดึก)',
        'ฐาน $14.50 / OT $21.75',
        '-',
        '44 – 50 ชม./wk',
        '$115',
        'สวนสนุกธีมยุโรปชื่อดัง, บัตรเข้าสวนสนุกและสวนน้ำฟรี, หอพักพนักงาน Williamsburg',
        '🏰 Kingsmill Resort (ริมแม่น้ำ James River): Banquet Server/Busser งานจัดเลี้ยง 18:30-23:00 น. (ทิปสด $50-$90/คืน)',
        '🦀 Captain George’s Seafood Buffet: Busser/Dishwasher บุฟเฟต์ซีฟู้ดยักษ์ใหญ่ 18:30-23:30 น. (คนแน่นมาก ทิปดี)',
        '🥞 Cracker Barrel / Pancake House: ผู้ช่วยครัว/ล้างจานรอบค่ำ 18:00-22:00 น. ($14.50/ชม.)'
    ],
    [
        'Tier A',
        'Virginia (VA)',
        'Virginia Beach Oceanfront Resorts & Boardwalk',
        'IEE, New Step, Acadex, IEO',
        'Housekeeping / Beach Attendant',
        'ปกติ: 08:30 – 16:30 (8 ชม.)\nพีค: 08:00 – 17:30 (9.5 ชม.)',
        'ฐาน $15.00 / OT $22.50',
        '$15 - $30',
        '42 – 48 ชม./wk',
        '$130',
        'เมืองตากอากาศชายทะเลเวอร์จิเนีย มีทางเดินเลียบหาดยาว 3 ไมล์, รถราง Wave Trolley สะดวก',
        '🍺 Waterman’s Surfside Grille: Barback/Busser ร้านริมหาดคนแน่น 18:00-00:30 น. (ทิปสด $70-$120/คืน)',
        '🦀 Catch 31 Fish Bar: Food Runner/Busser 18:00-23:30 น. (ทิปดี)',
        '🍕 Dough Boy’s California Pizza: ผู้ช่วยครัว/ล้างจาน 18:30-00:00 น. ($14.50/ชม.)'
    ],

    # 18. MASSACHUSETTS (MA) - Tier A
    [
        'Tier A',
        'Massachusetts (MA)',
        'Cape Cod Oceanfront Resorts & Inns (Hyannis / Yarmouth)',
        'OEG, IEE, Acadex, Higher',
        'Housekeeping / Banquet / F&B',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีค: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75',
        '$20 - $50',
        '42 – 48 ชม./wk',
        '$135',
        'แหลมตากอากาศระดับตำนานของตระกูลเคนเนดี้ Cape Cod, ปั่นจักรยานเลียบหาดสะดวก',
        '🦞 The Lobster Pot (Provincetown): Busser/Steward ร้านซีฟู้ดดัง 17:30-23:30 น. (ทิปสด $70-$130/คืน)',
        '🍔 The Black Cat Tavern (Hyannis Harbor): Food Runner/Busser 18:00-00:00 น. (ทิปดี)',
        '🍦 Four Seas Ice Cream: ตักไอศกรีมกะค่ำ 18:00-22:30 น. ($16.00/ชม.)'
    ],

    # 19. NEW HAMPSHIRE (NH) - Tier A
    [
        'Tier A',
        'New Hampshire (NH)',
        'Omni Mount Washington Resort (Bretton Woods)',
        'OEG, Acadex, IEO',
        'Housekeeping / Culinary / Steward',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีค: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00',
        '$15 - $35',
        '44 – 50 ชม./wk',
        '$110 (รวมกิน)',
        'โรงแรมปราสาทประวัติศาสตร์ระดับ 4 ดาวหน้าเทือกเขา White Mountains, ปลอดภาษีซื้อ 0% Sales Tax',
        '🥩 Main Dining Room (ในโรงแรม): Busser ร้าน Fine Dining 17:30-23:00 น. (ทิปสด $60-$100/คืน)',
        '🍺 The Cave (ผับใต้ดินในโรงแรม): Barback บาร์ยุค Prohibition 19:00-01:00 น. (ขอ OT ในรีสอร์ต $24)',
        '🍕 Fabyan’s Station Restaurant: ล้างจาน/ผู้ช่วยครัว 17:30-22:30 น. ($15/ชม.)'
    ],

    # 20. MISSOURI (MO) - Tier A
    [
        'Tier A',
        'Missouri (MO)',
        'Silver Dollar City Theme Park & Showboat Branson Belle',
        'New Step, IEE, IEO',
        'Ride Operator / Attractions Host / Culinary',
        'ปกติ: 09:30 – 18:00 (8 ชม.)\nพีค: 09:00 – 21:30 (12 ชม.)',
        'ฐาน $14.50 / OT $21.75',
        '-',
        '44 – 50 ชม./wk',
        '$95',
        'สวนสนุกธีมยุคคาวบอย 1880s และเรือสำราญดินเนอร์โชว์ Branson, ค่าครองชีพถูกมาก',
        '🚢 Showboat Branson Belle (เรือสำราญ): Banquet Server/Busser 18:00-22:30 น. (ทิปสด $50-$90/รอบ)',
        '🥩 Guy Fieri’s Branson Kitchen: Food Runner/Busser 18:30-23:30 น. ($13/ชม. + ทิป)',
        '🥞 Billy Gail’s Cafe: ผู้ช่วยเตรียมวัตถุดิบ/ล้างจานรอบบ่าย-เย็น ($14.50/ชม.)'
    ],

    # 21. PENNSYLVANIA (PA) - Tier A
    [
        'Tier A',
        'Pennsylvania (PA)',
        'Hersheypark & The Hotel Hershey',
        'OEG, IEE, New Step',
        'Ride Operator / Food Service / Housekeeping',
        'ปกติ: 10:00 – 18:30 (8 ชม.)\nพีค: 09:30 – 22:30 (12 ชม.)',
        'ฐาน $15.00 / OT $22.50',
        '-',
        '44 – 50 ชม./wk',
        '$110',
        'สวนสนุกเมืองช็อกโกแลต Hershey, หอพักพนักงาน Hershey Co-Op + รถรับส่งฟรี, เข้าสวนสนุกฟรี',
        '🍫 The Circular at The Hotel Hershey: Busser ร้านอาหารหรู 17:30-23:00 น. (ทิปสด $60-$110/คืน)',
        '🍺 Troegs Independent Brewing: Barback โรงเบียร์ดังข้างสวนสนุก 18:30-00:00 น. (ทิปดีมาก)',
        '🍕 Hershey Grill / Local Diners: ล้างจาน/ผู้ช่วยครัว 18:00-23:00 น. ($15/ชม.)'
    ]
]

ws2.append(headers2)
for r in rows2:
    ws2.append(r)

for col_idx in range(1, len(headers2) + 1):
    cell = ws2.cell(row=1, column=col_idx)
    cell.fill = header_fill
    cell.font = header_font
    cell.alignment = Alignment(horizontal='center', vertical='center', wrap_text=True)

for row_idx, row in enumerate(ws2.iter_rows(min_row=2, max_row=len(rows2)+1, min_col=1, max_col=len(headers2)), start=2):
    tier_text = str(row[0].value or '')
    row_fill = tier_s_fill if 'Tier S' in tier_text else tier_a_fill
    fill = row_fill if row_idx % 2 == 0 else PatternFill(fill_type=None)
    for col_idx, cell in enumerate(row, start=1):
        cell.font = regular_font
        cell.border = thin_border
        if fill.fill_type:
            cell.fill = fill
        if col_idx in [1, 2, 7, 8, 10]:
            cell.alignment = Alignment(horizontal='center', vertical='center')
        elif col_idx in [6, 11, 12, 13, 14]:
            cell.alignment = Alignment(horizontal='left', vertical='center', wrap_text=True)
        else:
            cell.alignment = Alignment(horizontal='left', vertical='center')

for col in ws2.columns:
    max_len = 0
    col_letter = get_column_letter(col[0].column)
    for cell in col:
        val_str = str(cell.value or '')
        lines = val_str.split('\n')
        for l in lines:
            length = len(l.encode('utf-8')) // 2 if any(ord(c) > 127 for c in l) else len(l)
            if length > max_len:
                max_len = length
    ws2.column_dimensions[col_letter].width = min(max(max_len + 4, 12), 55)

ws2.freeze_panes = 'D2'


# ==============================================================================
# 📊 SHEET 3: 12-Week Cashflow Simulator
# ==============================================================================
ws3 = wb.create_sheet(title='12-Week Cashflow Simulator')
ws3.views.sheetView[0].showGridLines = True

headers3 = [
    'สัปดาห์ (Week)', 'สถานการณ์ & รายละเอียดกะงาน', 'ชม. งานหลัก (ชม.)', 'ชม. งานสอง (ชม.)',
    'รวม ชม./สัปดาห์', 'รายรับงานหลัก ($)', 'รายรับงานสอง ($)', 'เงินทิปสด ($)',
    'รายรับรวมรายสัปดาห์ ($)', 'รายรับรวม (บาท)', 'หักภาษี Fed 10% ($)', 'หักหอพัก/EDR ($)',
    'หักของใช้ส่วนตัว ($)', 'เงินสดสุทธิสัปดาห์นั้น ($)', 'เงินสดสะสมคงเหลือ ($)', 'เงินสดสะสมคงเหลือ (บาท)'
]

sim_data = [
    ['Week 1', 'ปฐมนิเทศ, อบรม, ทำ SSN ที่แฟร์แบงก์ส', 32, 0, 32, 512, 0, 0, 512, 16819, 51.2, 105, 25, 330.8, 330.8, 10867],
    ['Week 2', 'เริ่มแม่บ้านจริง, เรือสำราญรอบแรก, สมัครงาน 2', 38, 0, 38, 608, 0, 0, 608, 19973, 60.8, 105, 25, 417.2, 748.0, 24572],
    ['Week 3', 'รถไฟทัวร์แน่น, งานสองเริ่มทำ 2-3 วัน', 48, 10, 58, 832, 150, 60, 1042, 34230, 104.2, 105, 25, 807.8, 1555.8, 51108],
    ['Week 4', 'เข้าที่เต็มตัว, งานสอง Barback 4 วัน', 54, 14, 68, 976, 210, 120, 1306, 42902, 130.6, 105, 25, 1045.4, 2601.2, 85449],
    ['Week 5', 'PEAK จัด วันชาติ 4th of July แขกล้น', 58, 15, 73, 1072, 225, 160, 1457, 47862, 145.7, 105, 25, 1181.3, 3782.5, 124255],
    ['Week 6', 'PEAK ต่อเนื่อง เรือสำราญเข้าทุกวัน', 56, 14, 70, 1024, 210, 140, 1374, 45136, 137.4, 105, 25, 1106.6, 4889.1, 160607],
    ['Week 7', 'ฝนตกหนัก/รถไฟดีเลย์ ร่างกายเริ่มล้า', 44, 12, 56, 736, 180, 80, 996, 32719, 99.6, 105, 25, 766.4, 5655.5, 185783],
    ['Week 8', 'ฟื้นตัวกลับมาพีค ทัวร์ครอบครัวแน่น', 55, 14, 69, 1000, 210, 140, 1350, 44348, 135.0, 105, 25, 1085.0, 6740.5, 221425],
    ['Week 9', 'ช่วงท้ายพีคซีซัน ชั่วโมงยังแน่น', 52, 12, 64, 928, 180, 120, 1228, 40340, 122.8, 105, 25, 975.2, 7715.7, 253461],
    ['Week 10', 'อากาศเย็นลง นักศึกษาฝรั่งเริ่มกลับ', 48, 10, 58, 832, 150, 100, 1082, 35544, 108.2, 105, 25, 843.8, 8559.5, 281180],
    ['Week 11', 'ทัวร์เริ่มซา ปิดห้องพักบางโซน', 44, 8, 52, 736, 120, 60, 916, 30091, 91.6, 105, 25, 694.4, 9253.9, 303991],
    ['Week 12', 'สัปดาห์สุดท้าย เคลียร์ห้องพัก คืนมัดจำ', 36, 0, 36, 576, 0, 0, 576, 18922, 57.6, 105, 25, 388.4, 9642.3, 316750]
]

ws3.append(headers3)
for row in sim_data:
    ws3.append(row)

for col_num in range(1, len(headers3) + 1):
    cell = ws3.cell(row=1, column=col_num)
    cell.fill = header_fill
    cell.font = header_font
    cell.alignment = Alignment(horizontal='center', vertical='center', wrap_text=True)

for row_idx, row in enumerate(ws3.iter_rows(min_row=2, max_row=len(sim_data)+1, min_col=1, max_col=len(headers3)), start=2):
    for col_idx, cell in enumerate(row, start=1):
        cell.font = regular_font
        cell.border = thin_border
        if col_idx in [1, 3, 4, 5]:
            cell.alignment = Alignment(horizontal='center', vertical='center')
        elif col_idx >= 6:
            cell.alignment = Alignment(horizontal='right', vertical='center')
            if col_idx in [6, 7, 8, 9, 11, 12, 13, 14, 15]:
                cell.number_format = '$#,##0.00'
            elif col_idx in [10, 16]:
                cell.number_format = '#,##0฿'
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


# ==============================================================================
# 📊 SHEET 4: Agency Directory & Contacts (6 เอเจนซี่)
# ==============================================================================
ws4 = wb.create_sheet(title='Agency Directory & Contacts')
ws4.views.sheetView[0].showGridLines = True

headers4 = [
    'ชื่อเอเจนซี่ (Agency)', 'ระดับ (Tier)', 'ค่าโครงการโดยประมาณ (บาท)', 'สปอนเซอร์สหรัฐฯ',
    'งานเด่นใน Tier S & Tier A', 'เบอร์โทรศัพท์', 'LINE Official',
    'ที่ตั้งสำนักงาน (Office Address)', 'จุดเด่น & คำแนะนำ'
]

data4 = [
    ['OEG (Overseas Ed Group)', 'Tier S (Mass)', '106,900 - 111,900 ฿', 'CIEE (อันดับ 1 สหรัฐฯ), Spirit', 'Grand Teton (WY), Yellowstone (WY), Denali (AK), Kalahari (WI), Schlitterbahn (TX)', '02-263-3666', '@oegworkandtravel', 'อาคารสินธร ทาวเวอร์ 1 ชั้น 7 ถ.วิทยุ กทม. & เชียงใหม่', 'สปอนเซอร์ CIEE มั่นคงที่สุด ระบบติวสัมภาษณ์และดูแลมาตรฐานสูงสุด'],
    ['Acadex Thailand', 'Tier S (Boutique)', '69,000 - 82,000 ฿', 'Intrax, CCUSA, CHI, IENA', 'Grand Teton (WY), Denali Princess & Bluffs (AK), Kalahari (WI), Dollywood (TN), Lifeguards (MD)', '086-390-0333', '@AcadexThailand', 'อาคาร ซี.ซี.ที. (CCT Bldg) ชั้น 12A ถ.สุรวงศ์ บางรัก กทม.', 'พอร์ตงานอลาสกาและไวโอมิงครบที่สุด มีทั้ง Princess และ Bluffs ค่าโครงการคุ้มค่า'],
    ['IEE Thailand', 'Tier S (Boutique)', '68,000 - 78,000 ฿', 'CCUSA, InterExchange, GeoVisions', 'Xanterra Yellowstone (WY), Mount Rushmore (SD), Chula Vista (WI), Gatlinburg (TN), Cedar Point (OH)', '02-612-9511', '@IEEThailand', 'อาคารพญาไทพลาซ่า ชั้น 12 ถ.พญาไท ราชเทวี กทม.', 'ค่าโครงการย่อมเยา เครือข่ายสปอนเซอร์ CCUSA แน่นแฟ้นกับงานอุทยานและรีสอร์ต'],
    ['IEO Abroad (I.E.O.)', 'Tier S (Boutique)', '68,000 - 79,000 ฿', 'CIEE, Intrax, InterExchange', 'Denali (AK), Yellowstone (WY), Kalahari (WI), Dollywood (TN), Morey’s Piers (NJ), Universal (FL)', '061-426-2299', '@ieoworkandtravel', 'อาคาร K.A.N Place ซ.นราธิวาสราชนครินทร์ 8 สาทร กทม.', 'พอร์ตงานหลากหลาย มีงานสวนสนุกและรีสอร์ตทั้งฝั่งตะวันตกและตะวันออก'],
    ['Higher Education (Higher)', 'Tier S (Boutique)', '66,000 - 76,000 ฿', 'IENA, Spirit, Janus', 'Grand Teton (WY), Under Canvas (WY/MT), Mt. McKinley (AK), Custer State Park (SD), Estes Park (CO)', '02-054-9544', '@HigherEducation', 'อาคารจัตุรัสจามจุรี (Chamchuri Square) ชั้น 24 ปทุมวัน กทม.', 'ดูแลนักศึกษาใกล้ชิดเป็นกันเอง ตอบแชทเร็ว ค่าโครงการสบายกระเป๋า'],
    ['New Step Thailand', 'Tier S (Boutique)', '67,000 - 79,000 ฿', 'Intrax, CHI, AWA', 'Dollywood (TN), The Island (TN), Busch Gardens (VA/FL), Ocean City (MD), Six Flags (TX)', '063-535-9463', '@newstepworktravel', 'อาคาร SiamScape ชั้น 19 ห้อง 1910 สยามสแควร์ กทม.', 'เชี่ยวชาญงานสายสวนสนุกและงานชายฝั่งทะเล ออฟฟิศสยามเดินทางสะดวก']
]

ws4.append(headers4)
for row in data4:
    ws4.append(row)

for col_num in range(1, len(headers4) + 1):
    cell = ws4.cell(row=1, column=col_num)
    cell.fill = header_fill
    cell.font = header_font
    cell.alignment = Alignment(horizontal='center', vertical='center', wrap_text=True)

for row_idx, row in enumerate(ws4.iter_rows(min_row=2, max_row=len(data4)+1, min_col=1, max_col=len(headers4)), start=2):
    for col_idx, cell in enumerate(row, start=1):
        cell.font = regular_font
        cell.border = thin_border
        if col_idx in [2, 6, 7]:
            cell.alignment = Alignment(horizontal='center', vertical='center')
        else:
            cell.alignment = Alignment(horizontal='left', vertical='center')

for col in ws4.columns:
    max_len = 0
    col_letter = get_column_letter(col[0].column)
    for cell in col:
        val_str = str(cell.value or '')
        length = len(val_str.encode('utf-8')) // 2 if any(ord(c) > 127 for c in val_str) else len(val_str)
        if length > max_len:
            max_len = length
    ws4.column_dimensions[col_letter].width = max(max_len + 4, 15)

ws4.freeze_panes = 'B2'

# Save
for p in [excel_path, excel_clean_path]:
    try:
        wb.save(p)
        print('Successfully saved perfectly aligned Master Excel to:', p)
    except PermissionError:
        print('Locked path:', p)
