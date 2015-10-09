/*************************************************************
 *
 *  MathJax/jax/output/HTML-CSS/fonts/TeX/Main/Regular/GeometricShapes.js
 *
 *  Copyright (c) 2009-2015 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

MathJax.Hub.Insert(
  MathJax.OutputJax['HTML-CSS'].FONTDATA.FONTS['MathJax_Main'],
  {
    0x25B3: [716,0,889,59,828],        // WHITE UP-POINTING TRIANGLE
    0x25B9: [505,5,500,26,474],        // WHITE RIGHT-POINTING SMALL TRIANGLE
    0x25BD: [500,215,889,59,828],      // WHITE DOWN-POINTING TRIANGLE
    0x25C3: [505,5,500,26,473],        // WHITE LEFT-POINTING SMALL TRIANGLE
    0x25EF: [715,215,1000,56,944]      // LARGE CIRCLE
  }
);

MathJax.Ajax.loadComplete(MathJax.OutputJax["HTML-CSS"].fontDir + "/Main/Regular/GeometricShapes.js");
