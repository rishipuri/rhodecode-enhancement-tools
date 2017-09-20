import {h} from 'dom-chef';
import select from 'select-dom';

function addPullRequestToQuickRepoMenu() {
  const parent = select('#repo_list_table');
  select.all('a[title="Summary"]', parent).forEach(function(element) {
    element.parentNode.after(
      <li>
        <a title="Pull Request" href={element.href + '/pull-request'}>
          <span>Pull Request</span>
        </a>
      </li>
    );
  });
}

addPullRequestToQuickRepoMenu();
