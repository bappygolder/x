var callToActionPillars = [
  "Join Our Newsletter",
  "Join oLab Team",
  "Join Our Consulting Program",
  "Hire Our Team For Your Business",
  "Get Our Agency Service",
  "Partner With oLab (Rev. Share Partnership)",
];

var generalPillars = [
  "Bappy’s Philosophy or Tenets",
  "Business Building & Entrepreneurship",
  "Remote Work and Leadership",
  "Freelancing & Being A Remote Team Member",
  "Inspirational & Motivational",
  "Technology & Automation",
  "Ongoing Learning & Growth",
  "Personal Development",
  "Sales, Marketing & Business Growth",
  "Other Account Mention",
  "Personal Branding",
  "Growth in 𝕏",
  "Philosophy",
  "Taking Action",
];

var contentTypes = [
  "Small Posts (Tweets)",
  "Long Posts (Article & Similar)",
  "Question",
  "Poll",
  "Voice Tweet",
  "Video: Short",
  "Video: Long",
  "Audio Recordings (Podcasts, Space Recording etc.)",
  "Quote Repost",
  "Photo / Gif",
];

var currentCombination = 0;

// Function to handle the toggle action
function handleToggle() {
  // Reference to the checkboxes
  var contentTypeToggle = document.getElementById('contentTypeToggle');
  var ctaToggle = document.getElementById('ctaToggle');

  var nextGeneral = generalPillars[currentCombination % generalPillars.length];
  var nextContent = contentTypeToggle.checked ? contentTypes[currentCombination % contentTypes.length] : null;
  var nextCTA = ctaToggle.checked ? callToActionPillars[currentCombination % callToActionPillars.length] : null;

  var output = `<div class="row">
                  <div class="title"><strong>Next Post:</strong></div>
                  <div class="content">${nextGeneral}</div>
                </div>`;
  if (nextContent) {
      output += `<div class="row content-type-row">
                  <div class="title"><strong>Content Type:</strong></div>
                  <div class="content">${nextContent}</div>
                 </div>`;
  }
  if (nextCTA) {
      output += `<div class="row cta-row">
                  <div class="title"><strong>Possible CTA:</strong></div>
                  <div class="content">${nextCTA}</div>
                 </div>`;
  }
  
  document.getElementById('suggestedContent').style.display = 'none'; // Hide the placeholder text
  document.getElementById('generatedContent').innerHTML = output;
  document.getElementById('generatedContent').style.display = 'block'; // Show the generated content
  currentCombination++;
}

function displayNext() {
  document.getElementById('suggestedContent').style.display = 'none'; // Hide the placeholder text
  handleToggle();
}

// Event listeners for the checkboxes
document.getElementById('contentTypeToggle').addEventListener('change', handleToggle);
document.getElementById('ctaToggle').addEventListener('change', handleToggle);