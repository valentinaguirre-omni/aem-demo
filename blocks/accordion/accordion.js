export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row) => {
    const columns = [...row.children];

    if (columns.length < 2) return;

    const question = columns[0].textContent.trim();
    const answer = columns[1].innerHTML;

    const details = document.createElement('details');
    const summary = document.createElement('summary');
    const content = document.createElement('div');

    summary.textContent = question;
    content.className = 'accordion-content';
    content.innerHTML = answer;

    details.append(summary, content);
    row.replaceWith(details);
  });
}