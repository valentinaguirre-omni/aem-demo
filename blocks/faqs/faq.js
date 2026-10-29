export default function decorate(block) {
  const items = [...block.children];

  items.forEach((item) => {
    const columns = [...item.children];
    if (columns.length < 2) return;

    const question = columns[0].textContent.trim();
    const answer = columns[1].innerHTML;

    const details = document.createElement('details');
    const summary = document.createElement('summary');
    const content = document.createElement('div');

    summary.textContent = question;
    content.innerHTML = answer;

    details.append(summary, content);
    item.replaceWith(details);
  });
}