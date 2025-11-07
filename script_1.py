
# Now create the CSV file with all questions
import csv
import io

# Write to CSV
output = io.StringIO()
fieldnames = ['id', 'category', 'difficulty', 'text_en', 'text_pt', 'question_en', 'question_pt',
              'option_a_en', 'option_a_pt', 'option_b_en', 'option_b_pt', 
              'option_c_en', 'option_c_pt', 'option_d_en', 'option_d_pt',
              'option_e_en', 'option_e_pt', 'correct_answer', 'explanation_en', 'explanation_pt']

writer = csv.DictWriter(output, fieldnames=fieldnames)
writer.writeheader()
writer.writerows(all_questions)

csv_content = output.getvalue()

# Save to file
with open('enem_english_questions.csv', 'w', encoding='utf-8') as f:
    f.write(csv_content)

print("CSV file created successfully!")
print(f"\nFirst few lines of CSV:\n")
print('\n'.join(csv_content.split('\n')[:5]))
print(f"\n... ({len(all_questions)} total questions)")
