import { Component } from '@angular/core';

@Component({
  selector: 'app-anagram-check',
  templateUrl: './anagram-check.component.html',
  styleUrls: ['./anagram-check.component.css'],
})
export class AnagramCheckComponent {
  firstWord = '';
  secondWord = '';
  isAnagram: boolean = false;
  clickedAnagram: boolean = false;

  checkAnagram() {
    this.clickedAnagram = true;
    if (this.firstWord.length && this.secondWord.length) {
      const sortedFirstString = this.sortString(
        this.firstWord.trim().toLowerCase()
      );
      const sortedSecondString = this.sortString(
        this.secondWord.trim().toLowerCase()
      );

      this.isAnagram = sortedFirstString === sortedSecondString;
    }
    if (this.firstWord.length !== this.secondWord.length) {
      return false;
    }
  }

  sortString(word) {
    return word.split('').sort().join('');
  }
}
