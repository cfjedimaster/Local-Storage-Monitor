LICENSE 
Copyright 2011 Raymond Camden

Contributors:
	TJ Downes
	Andy Matthews
	
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

=======================================================================================================================================================================================

Last Updated: September 23, 2011 (1.3)
ADDED: New extension icon, badge text for Local Storage count.
FIXED: issue where null keys where appearing in the list. Values were also null, so removed these entirely from the report
FIXED: issue where HTTPS URLS did not update the report, as they were excluded
NEW: Parses JSON strings into table data where in local storage value fields 
IMPROVED: All javascripts are now referenced via CDN, using Google. This allows for a smaller and cleaner package
