const fs = require('fs');
let content = fs.readFileSync('G:/projectngoai/profile.html', 'utf8');

// Remove HTML
const htmlToRemove = \        <div class="w-full bg-surface p-3 rounded-lg border border-outline-variant/30 flex justify-between items-center">
        <span class="text-xs text-on-surface-variant font-label-caps">SỐ DƯ</span>
        <span id="profile-balance" class="text-primary font-bold font-price-display text-lg">\</span>
      </div>\;
content = content.replace(htmlToRemove, '');

// Remove JS
content = content.replace(/document\.getElementById\('profile-balance'\)\.textContent = .*?;/, '');

fs.writeFileSync('G:/projectngoai/profile.html', content, 'utf8');
console.log('Removed balance from profile.html');
