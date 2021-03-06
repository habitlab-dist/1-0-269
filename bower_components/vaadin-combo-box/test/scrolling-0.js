
    describe('scrolling', function() {

      var combobox;

      beforeEach(function() {
        combobox = fixture('combobox');
      });

      describeIf(touchDevice, 'touch devices', function() {
        it('should blur input on scroll', function() {
          combobox.open();

          combobox.$.overlay.fire('down');
          var focusedInput = Polymer.dom(combobox.root).querySelector('input:focus');

          expect(focusedInput).not.to.equal(combobox.$.input);
        });
      });

      describeIf(ios, 'iOS', function() {
        it('should have momentum scrolling enabled', function() {
          combobox.open();

          var scroller = combobox.$.overlay._unwrapIfNeeded(combobox.$.overlay.$.scroller);
          expect(getComputedStyle(scroller).WebkitOverflowScrolling).to.equal('touch');
        });
      });

      describe('scrolling position', function() {
        beforeEach(function() {
          var items = [];

          for (var i = 0; i < 100; i++) {
            items.push(i.toString());
          }

          combobox.items = items;
        });

        it('should be zero when no items are selected', function() {
          combobox.open();

          expect(combobox.$.overlay.$.scroller.scrollTop).to.equal(0);
        });

        it('should be zero when the first item is selected', function() {
          combobox.value = combobox.items[0];
          combobox.open();

          expect(combobox.$.overlay.$.scroller.scrollTop).to.equal(0);
        });

        function expectSelectedItemPositionToBeVisible() {
          var selectedItem = Polymer.dom(combobox.$.overlay.$.selector).querySelector('[selected]');
          expect(selectedItem).to.be.ok;

          var selectedItemRect = selectedItem.getBoundingClientRect();
          var overlayRect = combobox.$.overlay.getBoundingClientRect();
          expect(selectedItemRect.left).to.be.at.least(overlayRect.left - 1);
          expect(selectedItemRect.top).to.be.at.least(overlayRect.top - 1);
          expect(selectedItemRect.right).to.be.at.most(overlayRect.right + 1);
          expect(selectedItemRect.bottom).to.be.at.most(overlayRect.bottom + 1);
        }

        it('should make selected item visible after open', function(done) {
          combobox.value = combobox.items[50];
          combobox.open();

          combobox.async(function() {
            expectSelectedItemPositionToBeVisible();
            done();
          }, 1);
        });

        it('should make selected item visible after reopen', function(done) {
          combobox.open();

          combobox.value = combobox.items[50];
          combobox.close();
          combobox.open();

          combobox.async(function() {
            expectSelectedItemPositionToBeVisible();
            done();
          }, 1);
        });
      });
    });
  