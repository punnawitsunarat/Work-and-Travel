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
# 📊 SHEET 1: Top Employers Masterlist (Summer 2027 เฉพาะงานซัมเมอร์)
# ==============================================================================
ws1 = wb.active
ws1.title = 'Top Employers (Summer Only)'
ws1.views.sheetView[0].showGridLines = True

headers1 = [
    'ระดับ Tier',
    'รัฐ (State)',
    'ชื่องาน / สถานที่ทำงาน (Summer Host)',
    'Agency ที่ถือสัญญา',
    'ตำแหน่งงาน Summer (Role)',
    '⏱️ เวลาทำงานจริง (ปกติ / พีคซัมเมอร์)',
    'ค่าแรงฐาน / OT ($/ชม.)',
    'ทิป ($/สัปดาห์)',
    'ชม. ทำงานจริงเฉลี่ยซัมเมอร์ (ชม./wk)',
    'ค่าที่พัก ($/สัปดาห์)',
    'สวัสดิการซัมเมอร์ (อาหาร / บัตรผ่าน / ส่วนลด)'
]

rows1 = [
    [
        'Tier S',
        'Alaska (AK)',
        'Denali Princess Wilderness Lodge (Summer Season)',
        'Acadex, OEG, IEE, Higher, IEO',
        'Housekeeping / Room Attendant',
        'ปกติ: 07:30 – 15:30 (8 ชม.)\nพีคซัมเมอร์ (มิ.ย.-ส.ค.): 07:00 – 17:30 (10 ชม. ควงกะ)',
        'ฐาน $16.00 / OT $24.00',
        '$15 - $30',
        '50 – 54 ชม./wk (พีคจัด 58-62 ชม. / หัวท้าย พ.ค., ก.ย. 35-42 ชม.)',
        '$105',
        'อาหารบุฟเฟต์ 3 มื้อฟรีใน EDR ตักไม่อั้น 7 วัน, ทิปหัวเตียง, รถรับส่งพนักงาน, ส่วนลดทัวร์/รถไฟ 50%'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Denali Princess Wilderness Lodge (Summer Season)',
        'Acadex, OEG, IEE, Higher, IEO',
        'Kitchen Stewarding / Dishwasher (ล้างจาน)',
        'ปกติ: 16:00 – 00:00 (8 ชม.)\nพีคซัมเมอร์: 15:00 – 01:30 (10.5 ชม.)',
        'ฐาน $16.00 / OT $24.00',
        '-',
        '50 – 55 ชม./wk (ควงกะ Banquet และรอบรถไฟได้)',
        '$105',
        'อาหารบุฟเฟต์ 3 มื้อใน EDR + เชฟทำสเต๊ก/เบอร์เกอร์เลี้ยงในครัวฟรีทุกกะ'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Denali Princess Wilderness Lodge (Summer Season)',
        'Acadex, OEG, IEE, Higher, IEO',
        'Luggage Handler (พนักงานยกกระเป๋าทัวร์)',
        'ปกติ: 08:00 – 16:30 หรือ 12:00 – 20:30\nพีคซัมเมอร์: 07:00 – 18:30 (ตามรอบรถไฟ)',
        'ฐาน $15.50 / OT $23.25',
        '$40 - $70',
        '46 – 52 ชม./wk (ช่วงรถไฟ Wilderness Express วิ่งเต็มรอบ)',
        '$105',
        'อาหารบุฟเฟต์ 3 มื้อฟรีใน EDR, ทิปเงินสดจากกรุ๊ปทัวร์ผู้สูงอายุ'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Denali Princess Wilderness Lodge',
        'ขอทำเพิ่มหน้างาน (Internal Summer 2nd Job)',
        'Fleet Detailer (งานเสริมล้างรถทัวร์กะดึกซัมเมอร์)',
        'ปกติ: 21:00 – 01:30 (4.5 ชม.)\nพีคซัมเมอร์: 21:00 – 02:30 (5.5 ชม.)',
        'คิดเรต OT $24.00/ชม. ทันที',
        '-',
        '20 – 25 ชม./wk (ทำควบหลังงานหลักแม่บ้าน)',
        '-',
        'นับเป็นชั่วโมง OT $24.00 ทั้งหมด, ทำงานในอู่รถบัส Princess, อาหาร EDR 3 มื้อ'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Denali Bluffs Hotel (เปิดเฉพาะ Summer)',
        'Acadex Thailand, IEO',
        'Housekeeping / Laundry',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีคซัมเมอร์: 08:00 – 17:00 (9 ชม.)',
        'ฐาน $15.00 / OT $22.50',
        '-',
        '40 – 45 ชม./wk (หัวท้าย 32-38 ชม.)',
        '$140',
        'โบนัสพิเศษ Summer Bonus +$1.00/ชม. ท้ายทริป (ครบสัญญา), รถชัตเติลบัส, ส่วนลดอาหาร The Perk'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Grande Denali Lodge (เปิดเฉพาะ Summer)',
        'Acadex Thailand, IEO',
        'Housekeeping / Public Area Cleaner',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $15.50 / OT $23.25',
        '-',
        '42 – 46 ชม./wk (หัวท้าย 35-40 ชม.)',
        '$140',
        'โบนัสพิเศษ Summer Bonus +$1.00/ชม. ท้ายทริป, โรงแรมหรู 4 ดาว, รถชัตเติลบัส'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Grande Denali Lodge (เปิดเฉพาะ Summer)',
        'Acadex Thailand, IEO',
        'Busser / Food Runner (Alpenglow Restaurant)',
        'ปกติ: 16:30 – 22:30 (6 ชม.)\nพีคซัมเมอร์: 16:00 – 23:30 (7.5 ชม.)',
        'ฐาน $14.00 / OT $21.00',
        '$200 - $350',
        '40 – 45 ชม./wk',
        '$140',
        'โบนัส +$1.00/ชม., ทิปเงินสดจากแขกไฮเอนด์ร้านอาหารวิวพาโนรามาช่วง Midnight Sun ($40-$70/คืน)'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Mt. McKinley Princess Lodge (Summer Season)',
        'Higher, OEG, Acadex, IEO',
        'Housekeeping / Kitchen / Laundry',
        'ปกติ: 08:00 – 16:00 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:00 (9.5 ชม.)',
        'ฐาน $16.00 / OT $24.00',
        '$10 - $20',
        '44 – 48 ชม./wk',
        '$105',
        'อาหารบุฟเฟต์ 3 มื้อฟรีใน EDR, รถรับส่งพนักงาน, ชมวิวยอดเขาเดนาลี บรรยากาศสงบ'
    ],
    [
        'Tier S',
        'Alaska (AK)',
        'Fairbanks Princess Riverside Lodge (Summer Season)',
        'IEE, Acadex, Higher, IEO',
        'Food Runner / Laundry / Steward',
        'ปกติ: 06:30 – 14:30 หรือ 15:00 – 23:00\nพีคซัมเมอร์: กะสลับตามรอบรถไฟ 8 ชม.',
        'ฐาน $15.50 / OT $23.25',
        '$20 - $40',
        '36 – 40 ชม./wk (ไม่ค่อยมี OT)',
        '$105',
        'หอพักในเมืองแฟร์แบงก์ส + รถชัตเติลบัส, ใกล้ Walmart และร้านอาหารไทย หางาน 2 ง่าย'
    ],
    [
        'Tier S',
        'Wyoming (WY)',
        'Grand Teton Lodge Company - Jackson Lake Lodge (Summer)',
        'Acadex, Higher, OEG, IEE, IEO',
        'Housekeeping / Crew Member',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีคซัมเมอร์ (มิ.ย.-ส.ค.): 07:00 – 17:30 (10 ชม. ควงกะ)',
        'ฐาน $17.75 / OT $26.62',
        '-',
        '54 – 60 ชม./wk (พีคซัมเมอร์ 60-64 ชม. / หัวท้าย 40 ชม.)',
        '$0 (ฟรี!)',
        'หอพักฟรี 100%! + อาหารบุฟเฟต์ 3 มื้อ EDR ($105/wk), ส่วนลดซื้อของ 40%, เข้าอุทยาน Grand Teton & Yellowstone ฟรี'
    ],
    [
        'Tier S',
        'Wyoming (WY)',
        'Grand Teton Lodge Company - Colter Bay Village (Summer)',
        'Acadex, Higher, OEG, IEE, IEO',
        'Cabin Attendant / Grocery Clerk / Marina',
        'ปกติ: 08:00 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 07:30 – 17:30 (9.5 ชม.)',
        'ฐาน $17.75 / OT $26.62',
        '-',
        '52 – 58 ชม./wk',
        '$0 (ฟรี!)',
        'หอพักฟรี 100%! + อาหาร 3 มื้อ EDR, หมู่บ้านริมทะเลสาบ Jackson Lake สวยที่สุดในซัมเมอร์'
    ],
    [
        'Tier S',
        'Wyoming (WY)',
        'Xanterra Yellowstone Lodges (Summer Season)',
        'OEG, IEE Thailand, IEO',
        'Hospitality Crew / Kitchen / Steward',
        'ปกติ: 07:00 – 15:30 หรือ 15:00 – 23:30\nพีคซัมเมอร์: 06:30 – 16:30 (10 ชม.)',
        'ฐาน $15.70 / OT $23.55',
        '-',
        '46 – 52 ชม./wk (หัวท้าย 38-42 ชม.)',
        '$120',
        'รวมหอพัก + อาหารบุฟเฟต์ 3 มื้อ EDR, หอพักใหม่ Arnica, เที่ยวบ่อน้ำพุร้อน Yellowstone ฟรี'
    ],
    [
        'Tier S',
        'Wyoming (WY)',
        'Under Canvas Grand Teton / Yellowstone (เปิดเฉพาะ Summer)',
        'Higher Education, IEO',
        'Housekeeping / Guest Service',
        'ปกติ: 08:30 – 16:30 (8 ชม.)\nพีคซัมเมอร์: 08:00 – 17:30 (9.5 ชม.)',
        'ฐาน $16.50 / OT $24.75',
        '$50 - $100',
        '42 – 46 ชม./wk',
        '$100',
        'แคมป์กระโจมซาฟารีหรูเปิดเฉพาะ พ.ค.-ก.ย., อาหารพนักงาน, ทิปเงินสดจากแขกไฮเอนด์'
    ],
    [
        'Tier S',
        'Wisconsin (WI)',
        'Kalahari Resorts & Conventions (Summer Season)',
        'OEG, Acadex, Higher, IEO, New Step',
        'Lifeguard / Housekeeping (งานหลักซัมเมอร์)',
        'ปกติ: 09:30 – 18:00 หรือ 12:00 – 20:30\nพีคซัมเมอร์: 09:00 – 19:30 (10 ชม.)',
        'ฐาน $15.00 / OT $22.50',
        '-',
        '38 – 44 ชม./wk (เกลี่ยกะ 40 ชม.)',
        '$105',
        'หอพัก Kalahari Village, บัตรเล่นสวนน้ำฟรี, เมืองปั่นจักรยาน 100%, หางาน 2 ร้านอาหารง่าย'
    ],
    [
        'Tier S',
        'Wisconsin (WI)',
        'Wisconsin Dells Riverfront Eateries (Summer High Season)',
        'Walk-in สมัครเองหน้างาน',
        'Barback / Busser / Runner (งานที่สองช่วงซัมเมอร์)',
        'ปกติ: 17:30 – 22:30 (5 ชม.)\nพีคซัมเมอร์: 17:00 – 00:30 (7.5 ชม.)',
        'ฐาน $12.00 – $14.00',
        '$250 - $500',
        '20 – 25 ชม./wk (กะค่ำ 17:30-23:00)',
        '-',
        'รับทิปเงินสดทุกคืน ยัดกระเป๋ากลับห้องทันที ($50-$100/คืน), อาหารพนักงานในกะ (ทำควบกับงานหลัก)'
    ],
    [
        'Tier S',
        'Tennessee (TN)',
        'Dollywood Theme Park & Splash Country (Summer Festival)',
        'New Step, Acadex, IEO',
        'Ride Operator / Food Service / Retail',
        'ปกติ: 09:30 – 18:00 (8 ชม.)\nพีคซัมเมอร์: 09:00 – 21:30 (12 ชม. สวนสนุกเปิดดึกมีพลุทุกคืน)',
        'ฐาน $15.00 / OT $22.50',
        '-',
        '44 – 50 ชม./wk (หัวท้าย 35-40 ชม.)',
        '$110',
        'ปลอดภาษีเงินได้รัฐ 0%, นั่งรถราง Pigeon Forge Trolley $1/วัน, บัตรเข้าสวนสนุก Dollywood ฟรี'
    ],
    [
        'Tier S',
        'Maryland (MD)',
        'Premier Aquatics / High Sierra Pools (Summer Pools)',
        'Acadex, New Step, ALC, IEO',
        'Pool Lifeguard (เปิดเฉพาะ Summer พ.ค.-ก.ย.)',
        'ปกติ: 10:30 – 19:30 (9 ชม.)\nพีคซัมเมอร์: 10:00 – 20:30 (10.5 ชม. สระเปิดยาว)',
        'ฐาน $16.00 / OT $24.00',
        '-',
        '50 – 54 ชม./wk (การันตี OT 10-14 ชม. สม่ำเสมอ)',
        '$120',
        'การันตีชั่วโมง OT แน่นอนสัปดาห์ละ 10-14 ชม., อพาร์ตเมนต์แชร์กับเพื่อน, รถไฟใต้ดิน Metro เข้า DC'
    ],
    [
        'Tier S',
        'Ohio (OH)',
        'Cedar Point Amusement Park (Summer Peak Season)',
        'OEG, IEE Thailand, IEO',
        'Ride Operator / Food Service',
        'ปกติ: 10:00 – 18:30 (8 ชม.)\nพีคซัมเมอร์: 09:30 – 22:30 (12 ชม. สวนสนุกปิดดึก)',
        'ฐาน $14.50 / OT $21.75',
        '-',
        '46 – 52 ชม./wk (หัวท้าย 38-42 ชม.)',
        '$80 (ถูกสุด)',
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
# 📊 SHEET 2: Tier S-A Summer Jobs & 2nd Options (38 งาน Summer ตรงตาม data.js)
# ==============================================================================
ws2 = wb.create_sheet(title='Tier S-A Summer Jobs')
ws2.views.sheetView[0].showGridLines = True

headers2 = [
    'ระดับ Tier (เว็บ)',
    'รัฐ (State)',
    'ชื่องาน / สถานที่ทำงาน (Summer Host)',
    'Agency ที่ถือสัญญา',
    'ตำแหน่งงาน Summer (Role)',
    '⏱️ เวลาทำงานจริง (ปกติ / พีคซัมเมอร์)',
    'ค่าแรงฐาน / OT ($/ชม.)',
    'ทิป ($/สัปดาห์)',
    'ชม. งานหลัก (ชม./wk)',
    'ค่าที่พัก ($/สัปดาห์)',
    'สวัสดิการซัมเมอร์ (อาหาร ฟรี หรือ อื่นๆ)',
    '🔥 งานที่สองซัมเมอร์ที่ทำต่อได้จริง (ตัวเลือก 1)',
    '🔥 งานที่สองซัมเมอร์ที่ทำต่อได้จริง (ตัวเลือก 2)',
    '🔥 งานที่สองซัมเมอร์ที่ทำต่อได้จริง (ตัวเลือก 3)'
]

import generate_tier_sa_sheet
rows2 = []
for r in generate_tier_sa_sheet.rows:
    # r[0] is 'Tier S - Alaska (AK)', r[1] is Employer, r[2] is Agency, etc.
    tier_str = 'Tier S' if 'Tier S' in r[0] else 'Tier A'
    state_str = r[0].replace('Tier S - ', '').replace('Tier A - ', '').strip()
    new_row = [
        tier_str,
        state_str,
        r[1],
        r[2],
        r[3],
        r[4],
        r[5],
        r[6],
        r[7],
        r[8],
        r[9],
        r[10],
        r[11],
        r[12]
    ]
    rows2.append(new_row)

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
# 📊 SHEET 3: Summer 12-Week Cashflow Simulator (7 พ.ค. – 7 ก.ย.)
# ==============================================================================
ws3 = wb.create_sheet(title='Summer 12-Week Simulator')
ws3.views.sheetView[0].showGridLines = True

headers3 = [
    'สัปดาห์ (Summer Week)', 'ช่วงวันที่ (Summer Timeline)', 'สถานการณ์ & รายละเอียดกะงานซัมเมอร์', 'ชม. งานหลัก (ชม.)', 'ชม. งานสอง (ชม.)',
    'รวม ชม./สัปดาห์', 'รายรับงานหลัก ($)', 'รายรับงานสอง ($)', 'เงินทิปสด ($)',
    'รายรับรวมรายสัปดาห์ ($)', 'รายรับรวม (บาท)', 'หักภาษี Fed 10% ($)', 'หักหอพัก/EDR ($)',
    'หักของใช้ส่วนตัว ($)', 'เงินสดสุทธิสัปดาห์นั้น ($)', 'เงินสดสะสมคงเหลือ ($)', 'เงินสดสะสมคงเหลือ (บาท)'
]

summer_sim_data = [
    ['Week 1', '7 พ.ค. - 14 พ.ค.', 'เดินทางถึง, ปฐมนิเทศ, อบรม, ทำ SSN ที่แฟร์แบงก์ส', 32, 0, 32, 512, 0, 0, 512, 16819, 51.2, 105, 25, 330.8, 330.8, 10867],
    ['Week 2', '15 พ.ค. - 21 พ.ค.', 'เปิดซีซันซัมเมอร์, เรือสำราญรอบแรกเข้า, สมัครงาน 2', 38, 0, 38, 608, 0, 0, 608, 19973, 60.8, 105, 25, 417.2, 748.0, 24572],
    ['Week 3', '22 พ.ค. - 28 พ.ค. (Memorial Day)', 'วันหยุด Memorial Day เปิดซัมเมอร์เต็มรูปแบบ งานสองเริ่มทำ', 48, 10, 58, 832, 150, 60, 1042, 34230, 104.2, 105, 25, 807.8, 1555.8, 51108],
    ['Week 4', '29 พ.ค. - 4 มิ.ย.', 'รถไฟทัวร์แน่น, เข้าที่เต็มตัว, งานสอง Barback 4 วัน', 54, 14, 68, 976, 210, 120, 1306, 42902, 130.6, 105, 25, 1045.4, 2601.2, 85449],
    ['Week 5', '5 มิ.ย. - 11 มิ.ย.', 'ช่วง Midnight Sun สว่าง 24 ชม. แขกแน่นตลอดคืน', 56, 14, 70, 1024, 210, 140, 1374, 45136, 137.4, 105, 25, 1106.6, 3707.8, 121801],
    ['Week 6', '12 มิ.ย. - 18 มิ.ย.', 'PEAK ซัมเมอร์ เรือสำราญและรถไฟเข้าเต็มพิกัด', 56, 14, 70, 1024, 210, 140, 1374, 45136, 137.4, 105, 25, 1106.6, 4814.4, 158153],
    ['Week 7', '19 มิ.ย. - 25 มิ.ย.', 'ฝนตกในหุบเขา/รถไฟดีเลย์ ร่างกายเริ่มล้า พักผ่อน', 44, 12, 56, 736, 180, 80, 996, 32719, 99.6, 105, 25, 766.4, 5580.8, 183330],
    ['Week 8', '26 มิ.ย. - 4 ก.ค. (4th of July PEAK)', 'วันชาติอเมริกา PEAK ที่สุดในรอบปี แขกล้น ทิปมหาศาล', 58, 15, 73, 1072, 225, 160, 1457, 47862, 145.7, 105, 25, 1181.3, 6762.1, 222135],
    ['Week 9', '5 ก.ค. - 15 ก.ค.', 'ช่วงพีคต่อเนื่อง นักท่องเที่ยวครอบครัวสหรัฐฯ แน่น', 52, 12, 64, 928, 180, 120, 1228, 40340, 122.8, 105, 25, 975.2, 7737.3, 254171],
    ['Week 10', '16 ก.ค. - 31 ก.ค.', 'เข้าสู่ปลายซัมเมอร์ นักศึกษาฝรั่งเริ่มทยอยกลับ', 48, 10, 58, 832, 150, 100, 1082, 35544, 108.2, 105, 25, 843.8, 8581.1, 281890],
    ['Week 11', '1 ส.ค. - 15 ส.ค.', 'ใบไม้เริ่มเปลี่ยนสี ทัวร์ซา ปิดห้องพักบางโซน', 44, 8, 52, 736, 120, 60, 916, 30091, 91.6, 105, 25, 694.4, 9275.5, 304701],
    ['Week 12', '16 ส.ค. - 7 ก.ย. (Wrap Up)', 'สัปดาห์สุดท้าย เคลียร์ห้อง ปิดซีซันซัมเมอร์ คืนมัดจำ', 36, 0, 36, 576, 0, 0, 576, 18922, 57.6, 105, 25, 388.4, 9663.9, 317459]
]

ws3.append(headers3)
for row in summer_sim_data:
    ws3.append(row)

for col_num in range(1, len(headers3) + 1):
    cell = ws3.cell(row=1, column=col_num)
    cell.fill = header_fill
    cell.font = header_font
    cell.alignment = Alignment(horizontal='center', vertical='center', wrap_text=True)

for row_idx, row in enumerate(ws3.iter_rows(min_row=2, max_row=len(summer_sim_data)+1, min_col=1, max_col=len(headers3)), start=2):
    for col_idx, cell in enumerate(row, start=1):
        cell.font = regular_font
        cell.border = thin_border
        if col_idx in [1, 2, 4, 5, 6]:
            cell.alignment = Alignment(horizontal='center', vertical='center')
        elif col_idx >= 7:
            cell.alignment = Alignment(horizontal='right', vertical='center')
            if col_idx in [7, 8, 9, 10, 12, 13, 14, 15, 16]:
                cell.number_format = '$#,##0.00'
            elif col_idx in [11, 17]:
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

ws3.freeze_panes = 'C2'


# ==============================================================================
# 📊 SHEET 4: Agency Directory & Contacts (Summer Season Focus)
# ==============================================================================
ws4 = wb.create_sheet(title='Summer Agency Directory')
ws4.views.sheetView[0].showGridLines = True

headers4 = [
    'ชื่อเอเจนซี่ (Agency)', 'ระดับ (Tier)', 'ค่าโครงการ Summer โดยประมาณ', 'สปอนเซอร์สหรัฐฯ',
    'งานเด่น Summer ใน Tier S & Tier A', 'เบอร์โทรศัพท์', 'LINE Official',
    'ที่ตั้งสำนักงาน (Office Address)', 'จุดเด่น & คำแนะนำสำหรับ Summer'
]

data4 = [
    ['OEG (Overseas Ed Group)', 'Tier S (Mass)', '106,900 - 111,900 ฿', 'CIEE (อันดับ 1 สหรัฐฯ), Spirit', 'Grand Teton (WY), Yellowstone (WY), Denali (AK), Kalahari (WI), Schlitterbahn (TX)', '02-263-3666', '@oegworkandtravel', 'อาคารสินธร ทาวเวอร์ 1 ชั้น 7 ถ.วิทยุ กทม. & เชียงใหม่', 'สปอนเซอร์ CIEE มั่นคงที่สุด ระบบติวสัมภาษณ์และดูแลมาตรฐานสูงสุดช่วง Summer'],
    ['Acadex Thailand', 'Tier S (Boutique)', '69,000 - 82,000 ฿', 'Intrax, CCUSA, CHI, IENA', 'Grand Teton (WY), Denali Princess & Bluffs (AK), Kalahari (WI), Dollywood (TN), Lifeguards (MD)', '086-390-0333', '@AcadexThailand', 'อาคาร ซี.ซี.ที. (CCT Bldg) ชั้น 12A ถ.สุรวงศ์ บางรัก กทม.', 'พอร์ตงานอลาสกาและไวโอมิงครบที่สุด มีทั้ง Princess และ Bluffs ค่าโครงการคุ้มค่า'],
    ['IEE Thailand', 'Tier S (Boutique)', '68,000 - 78,000 ฿', 'CCUSA, InterExchange, GeoVisions', 'Xanterra Yellowstone (WY), Mount Rushmore (SD), Chula Vista (WI), Gatlinburg (TN), Cedar Point (OH)', '02-612-9511', '@IEEThailand', 'อาคารพญาไทพลาซ่า ชั้น 12 ถ.พญาไท ราชเทวี กทม.', 'ค่าโครงการย่อมเยา เครือข่ายสปอนเซอร์ CCUSA แน่นแฟ้นกับงานอุทยานและรีสอร์ตช่วง Summer'],
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
        print('Successfully saved Summer-Only Master Excel to:', p)
    except PermissionError:
        print('Locked path:', p)
