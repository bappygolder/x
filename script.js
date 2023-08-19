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

function next() {
    var nextGeneral = generalPillars[currentCombination % generalPillars.length];
    var nextContent = contentTypes[currentCombination % contentTypes.length];
    var nextCTA = callToActionPillars[currentCombination % callToActionPillars.length];

    var output = `<div class="row">
                    <div class="title"><strong>Next Tweet:</strong></div>
                    <div class="content">${nextGeneral}</div>
                  </div>
                  <div class="row">
                    <div class="title"><strong>Content Type:</strong></div>
                    <div class="content">${nextContent}</div>
                  </div>
                  <div class="row">
                    <div class="title"><strong>Possible CTA:</strong></div>
                    <div class="content">${nextCTA}</div>
                  </div>`;
    
    document.getElementById('output').innerHTML = output;

    currentCombination++;
}

function displayNext() {
    next();
}
