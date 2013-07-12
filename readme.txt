LICENSE 
Copyright 2011 Raymond Camden

=======

Contributors:
	TJ Downes
	Andy Matthews
	Afforess

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

Icon from: Andy Matthews

=========================================================================================================
Last Updated: March 11, 2013 (1.5.2)
Afforess added a 'Delete All' button
Afforess added a 'Delete' button for individual storage items

Last Updated: March 11, 2013 (1.5.1)
Adam Tuttle added a size report.

Last Updated: March 11, 2013 (1.5)
Update to v2 manifest support.

Last Updated: September 26, 2011 (1.3.3)
Fixed logic bug when hitting a site with 0 items.

Last Updated: September 23, 2011 (1.3.2)
ADDED: 3 icon sizes, 16, 48, and 128. Also cleaned up icon.
FIXED: Added conditional to badge text so that it only displays when count is greater than 0
ADDED: New extension icon, badge text for Local Storage count.
The above by Andy Mattews.

Last Updated: September 23, 2011 (1.2)
FIXED: issue where null keys where appearing in the list. Values were also null, so removed these entirely from the report
FIXED: issue where HTTPS URLS did not update the report, as they were excluded
NEW: Parses JSON strings into table data where in local storage value fields 
IMPROVED: All javascripts are now referenced via CDN, using Google. This allows for a smaller and cleaner package
